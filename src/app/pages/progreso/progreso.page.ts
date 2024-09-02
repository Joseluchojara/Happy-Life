import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.page.html',
  styleUrls: ['./progreso.page.scss'],
})
export class ProgresoPage implements OnInit {
  // Atributos que almacenan los gráficos
  public pesoChart: Chart;
  public alturaChart: Chart;
  public bicepsChart: Chart;
  public antebrazosChart: Chart;
  public abdomenChart: Chart;
  public muslosChart: Chart;
  public pantorillaChart: Chart;
  public pectoralesChart: Chart;
  public presionChart: Chart;

  ngOnInit(): void {
    this.createPesoChart();
    this.createAlturaChart();
    this.createBicepsChart();
    this.createAntebrazosChart();
    this.createAbdomenChart();
    this.createMuslosChart();
    this.createPantorillaChart();
    this.createPectoralesChart();
    this.createPresionChart();
  }

  createPesoChart() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Peso (kg)',
        data: [90, 88, 86, 85, 82, 81, 80],
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };

    this.pesoChart = new Chart("pesoChart", {
      type: 'line' as ChartType,
      data
    });
  }

  createAlturaChart() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Altura (cm)',
        data: [170, 170, 170, 170, 170, 170, 170], // datos de ejemplo
        fill: true,
        borderColor: 'rgb(192, 75, 192)',
        tension: 0.1
      }]
    };

    this.alturaChart = new Chart("alturaChart", {
      type: 'line' as ChartType,
      data
    });
  }

  // Otros gráficos
  createBicepsChart() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Bíceps (cm)',
        data: [35, 36, 37, 38, 39, 40, 41], // datos de ejemplo
        fill: true,
        borderColor: 'rgb(192, 192, 75)',
        tension: 0.1
      }]
    };

    this.bicepsChart = new Chart("bicepsChart", {
      type: 'line' as ChartType,
      data
    });
  }

  createAntebrazosChart() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Antebrazos (cm)',
        data: [30, 34, 36, 40], // datos de ejemplo
        fill: true,
        borderColor: 'rgb(75, 192, 75)',
        tension: 0.1
      }]
    };

    this.antebrazosChart = new Chart("antebrazosChart", {
      type: 'line' as ChartType,
      data
    });
  }

  createAbdomenChart() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Abdomen (cm)',
        data: [90, 88, 85, 83, 80, 78, 75], // datos de ejemplo
        fill: true,
        borderColor: 'rgb(75, 75, 192)',
        tension: 0.1
      }]
    };

    this.abdomenChart = new Chart("abdomenChart", {
      type: 'line' as ChartType,
      data
    });
  }

  createMuslosChart() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Muslos (cm)',
        data: [50, 51, 52, 53, 54, 55, 56], // datos de ejemplo
        fill: true,
        borderColor: 'rgb(192, 75, 75)',
        tension: 0.1
      }]
    };

    this.muslosChart = new Chart("muslosChart", {
      type: 'line' as ChartType,
      data
    });
  }

  createPantorillaChart() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Pantorrilla (cm)',
        data: [30, 31, 32, 33, 34, 35, 36], // datos de ejemplo
        fill: true,
        borderColor: 'rgb(192, 75, 192)',
        tension: 0.1
      }]
    };

    this.pantorillaChart = new Chart("pantorillaChart", {
      type: 'line' as ChartType,
      data
    });
  }

  createPectoralesChart() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Pectorales (cm)',
        data: [95, 96, 97, 98, 99, 100, 101], // datos de ejemplo
        fill: true,
        borderColor: 'rgb(75, 75, 75)',
        tension: 0.1
      }]
    };

    this.pectoralesChart = new Chart("pectoralesChart", {
      type: 'line' as ChartType,
      data
    });
  }
  createPresionChart() {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Presión arterial',
        data: [112, 100, 97, 110, 130, 140, 145], // datos de ejemplo
        fill: true,
        borderColor: 'rgb(75, 75, 75)',
        tension: 0.1
      }]
    };
  
    this.presionChart = new Chart("presionChart", {
      type: 'line' as ChartType,
      data
    });
  }
}