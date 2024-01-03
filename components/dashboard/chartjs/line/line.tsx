"use client";

import { useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface LineChartProps {
  data: number[];
  labels: string[];
}

const Line: React.FC<LineChartProps> = ({ data, labels }) => {
  useEffect(() => {
    const lineChartCanvas = document.getElementById(
      "lineChart"
    ) as HTMLCanvasElement;
    let lineChartInstance: Chart | null = null;

    if (lineChartCanvas) {
      if (Chart.getChart(lineChartCanvas)) {
        Chart.getChart(lineChartCanvas)?.destroy();
      }

      lineChartInstance = new Chart(lineChartCanvas, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Line Chart",
              data: data,
              borderColor: "blue",
              borderWidth: 2,
              fill: false,
            },
          ],
        },
      });
    }

    return () => {
      if (lineChartInstance) {
        lineChartInstance.destroy();
      }
    };
  }, [data, labels]);

  return <canvas id="lineChart" width="400" height="200"></canvas>;
};

export default Line;
