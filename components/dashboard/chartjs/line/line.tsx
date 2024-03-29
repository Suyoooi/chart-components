"use client";

import { useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { chartJsProps } from "@/types/chartJs";

Chart.register(...registerables);

const Line: React.FC<chartJsProps> = ({ data, labels }) => {
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
              borderColor: "rgb(135,206,235)",
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
