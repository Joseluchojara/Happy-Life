import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
 // Atributo que almacena los datos del chart
 public chart: Chart;

 ngOnInit(): void {

   // datos
   const data = {
     labels: ['pepe', 'February', 'March', 'April', 'May', 'June', 'July'],
     datasets: [{
       label: 'My First Dataset',
       data: [65, 59, 80, 81, 56, 55, 40],
       fill: false,
       borderColor: 'rgb(75, 192, 192)',
       tension: 0.1
     }]
   };

   // Creamos la gráfica
   this.chart = new Chart("chart", {
     type: 'line' as ChartType, // tipo de la gráfica 
     data // datos 
   })

 }
}