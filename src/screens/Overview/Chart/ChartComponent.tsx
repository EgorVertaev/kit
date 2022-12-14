import React from 'react';
import './ChartComponent.scss';
import { Chart, registerables, ScriptableContext } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(...registerables);

const labels = [0, 1, 2, 3, 4, 5, 6, 7];
const dataToday = [10, 30, 25, 50, 18, 38, 44, 40, 36];
const dataYesterday = [8, 18, 18, 12, 39, 44, 22, 31, 39];

export const ChartComponent = () => {
  
  const chartDate = new Date()

  return (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            data: dataToday,
            label: `Today`,
            borderColor: 'rgba(55, 81, 255, 1)',
            cubicInterpolationMode: 'monotone',
            fill: true,
            backgroundColor: (context: ScriptableContext<'line'>) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(10, 500, 80, 40);
              gradient.addColorStop(0, 'rgba(25,100,255,0.088161915156687)');
              gradient.addColorStop(1, 'rgba(255,255,255,0.17833070728291311)');
              return gradient;
            },
          },
          {
            data: dataYesterday,
            label: `Yesterday`,
            borderColor: 'rgba(183, 183, 183, 0.8)',
            cubicInterpolationMode: 'monotone',
          },
        ],
      }}
      options={{
        responsive: true,
        elements: {
          point: {
            radius: 1,
          },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              usePointStyle: true,
              pointStyle: 'line',
              padding: 20,
            },
            align: 'end',
          },
          title: {
            text: 'Today`s trends',
            display: true,
            color: '#252733',
            align: "start",
            font: {
              weight: 'bold',
              size: 19,
            }
          },
          subtitle: {
            text: `as of ${chartDate}`,
            display: true,
            align: "start",
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          
          myScale: {
            position: 'right',
            min:0,
            max:60,
            ticks: {
              stepSize: 10
            }
          }
        }
      }}
    />
  );
};


