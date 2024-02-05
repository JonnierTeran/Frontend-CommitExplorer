import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'app-grafic-commits-component',
    standalone: true,
  imports: [ChartModule],
  templateUrl: './grafic-commits-component.component.html',
  styleUrl: './grafic-commits-component.component.css'
})
export class GraficCommitsComponentComponent implements OnInit {
    
    
    //Propiedad para guardar el Objeto de Data para la Grafica
    public data: any;
    
    //Propiedad para manejar los estilos de la grafica
    public options: any;


    // Constructor de la clase, utilizando inyección de dependencias para obtener PLATFORM_ID
    // En este punto, platformId contiene la referencia a PLATFORM_ID
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    
  }
    ngOnInit() {

        if (isPlatformBrowser(this.platformId)) {
           
        
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
            
            this.data = {
                labels: ['1 Semana', '2 Semana', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7'],
                datasets: [
                {
                    label: 'Repo 1',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    yAxisID: 'y',
                    tension: 0.4,
                    data: [65, 59, 80, 81, 56, 55, 10]
                },
                {
                    label: 'Repo 2',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--red-500'),
                    yAxisID: 'y1',
                    tension: 0.4,
                    data: [28, 48, 40, 19, 86, 27, 90]
                },
               
            ]
        };
        

        //Manejo de Posiciones y estilos de las graficas
        this.options = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: surfaceBorder
                    }
                }
            }
        };
    } //
    }
}
