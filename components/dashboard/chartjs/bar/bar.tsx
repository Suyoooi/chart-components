"use client";

import { useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface BarChartProps {
  data: number[];
  labels: string[];
}

const Bar: React.FC<BarChartProps> = ({ data, labels }) => {
  useEffect(() => {
    const barChartCanvas = document.getElementById(
      "barChart"
    ) as HTMLCanvasElement;
    let barChartInstance: Chart | null = null;

    if (barChartCanvas) {
      if (Chart.getChart(barChartCanvas)) {
        Chart.getChart(barChartCanvas)?.destroy();
      }

      barChartInstance = new Chart(barChartCanvas, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Bar Chart",
              data: data,
              backgroundColor: "green",
              borderColor: "green",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }

    return () => {
      if (barChartInstance) {
        barChartInstance.destroy();
      }
    };
  }, [data, labels]);

  return <canvas id="barChart" width="400" height="200"></canvas>;
};

export default Bar;
