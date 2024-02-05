//Modelo para Generar cada linea de tiempo en la grafica
export class datasetsModels {
    label: string;
    fill: boolean;
    // borderColor: string; // Descomenta si deseas incluir la propiedad 'borderColor'
    yAxisID: string;
    tension: number;
    data: number[];
  

    //Contructor que recibe el nombre del Repositorio y la informacion de cada uno por semana
    constructor(label: string,  data: number[]) {
      this.label = label;
      this.fill = false;
      // this.borderColor = borderColor; // Descomenta si deseas incluir la propiedad 'borderColor'
      this.yAxisID = 'y0';
      this.tension = 0.4;
      this.data = data;
    }
  }

  