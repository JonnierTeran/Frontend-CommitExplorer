import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { CommitExplorerServiceService } from '../../Services/commit-explorer-service.service';
import { RequestCommitsModels } from '../../Models/RequestCommits.models';
import { ResponseCommitsModels } from '../../Models/ResponseCommits.models';

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

    
    public Response:ResponseCommitsModels[];


    // Constructor de la clase, utilizando inyección de dependencias para obtener PLATFORM_ID
    // En este punto, platformId contiene la referencia a PLATFORM_ID y Se agrega como depenpendencia el servicio CommitService
    constructor(@Inject(PLATFORM_ID) private platformId: Object,
        private _CommitService: CommitExplorerServiceService) 
    {

        //Se inicializa Array que almacenara las respuestas http
        this.Response=[];

    }

    //Ciclo de vida del componente 
    ngOnInit() {

        if (isPlatformBrowser(this.platformId)) {

            //Configuracion del Diagrama
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
            const surfaceBorder = documentStyle.getPropertyValue('--surface-border');


            //Data del Diagrama
            this.data = {
                labels: ['1 Semana Commits', '2 Semana Commits', 'Semana 3 Commits', 'Semana 4 Commits', 'Semana 5 Commits', 'Semana 6 Commits', 'Semana 7 Commits'],
                datasets: [
                    {
                        label: 'Repo 1',
                        fill: false,
                        //borderColor: documentStyle.getPropertyValue('--blue-500'),
                        yAxisID: 'y0',
                        tension: 0.4,
                        data: [65, 59, 80, 81, 56, 55, 10]
                    }

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


        } // Fin del condicional para validar el entorno NAVEGADOR
    }

    //_________________________________________________________________________________________



    /// Método para ejecutar el servicio y realizar una llamada a la API
    public GetResponseAPI(): void {
    // Crear un objeto RequestCommitsModels con parámetros específicos
        let RequestBody: RequestCommitsModels = new RequestCommitsModels("Angular", 2);

        // Llamar al servicio para obtener la respuesta de la API
        this._CommitService.GetResponse(RequestBody)
            .subscribe(
                // Función de éxito (Res es la respuesta de la API)
                Res => {
                    // Asignar la respuesta a la propiedad Response de la clase actual
                    this.Response = Res;
                },
                // Función de error (Err contiene información sobre el error)
                Err => {
                    // Imprimir el error en la consola
                    console.log(Err);
                }
            );
}



}
