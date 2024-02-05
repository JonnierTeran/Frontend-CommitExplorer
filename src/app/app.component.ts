//Modulos y Dependencias Necesarias
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavVarComponent } from './Components/nav-var/nav-var.component';
import { FooterComponentComponent } from './Components/footer-component/footer-component.component';
import { GraficCommitsComponentComponent } from './Components/grafic-commits-component/grafic-commits-component.component';

//Decorador de un componente
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavVarComponent,
    FooterComponentComponent, GraficCommitsComponentComponent], //Componentes y librerias usadas en el componente raiz
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
