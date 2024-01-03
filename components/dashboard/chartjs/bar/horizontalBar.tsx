"use client";

import { useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface HorizontalBarChartProps {
  data: number[];
  labels: string[];
}

const HorizontalBar: React.FC<HorizontalBarChartProps> = ({ data, labels }) => {
  useEffect(() => {
    const horizontalBarChartCanvas = document.getElementById(
      "horizontalBarChart"
    ) as HTMLCanvasElement;
    let horizontalBarChartInstance: Chart | null = null;

    if (horizontalBarChartCanvas) {
      if (Chart.getChart(horizontalBarChartCanvas)) {
        Chart.getChart(horizontalBarChartCanvas)?.destroy();
      }

      horizontalBarChartInstance = new Chart(horizontalBarChartCanvas, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Horizontal Bar Chart",
              data: data,
              backgroundColor: "purple",
              borderColor: "purple",
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: "y",
          //   scales: {
          //     x: {
          //       beginAtZero: true,
          //     },
          //     y: {
          //       beginAtZero: true,
          //     },
          //   },
        },
      });
    }

    return () => {
      if (horizontalBarChartInstance) {
        horizontalBarChartInstance.destroy();
      }
    };
  }, [data, labels]);

  return <canvas id="horizontalBarChart" width="400" height="200"></canvas>;
};

export default HorizontalBar;
