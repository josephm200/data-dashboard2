import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

function RandomChart(props) {
  const chartRef = useRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');

    new Chart(myChartRef, {
      type: 'line',
      data: {
        labels: props.labels,
        datasets: [
          {
            label: 'Random Chart',
            data: props.data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, [props]);

  return <canvas ref={chartRef} />;
}

export default RandomChart;