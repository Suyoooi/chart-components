"use client";
import { useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface DoughnutChartProps {
  data: number[];
  labels: string[];
}

const Donut: React.FC<DoughnutChartProps> = ({ data, labels }) => {
  useEffect(() => {
    const doughnutChartCanvas = document.getElementById(
      "doughnutChart"
    ) as HTMLCanvasElement;
    let doughnutChartInstance: Chart<"doughnut", number[], string> | null =
      null;

    if (doughnutChartCanvas) {
      if (Chart.getChart(doughnutChartCanvas)) {
        Chart.getChart(doughnutChartCanvas)?.destroy();
      }

      doughnutChartInstance = new Chart<"doughnut", number[], string>(
        doughnutChartCanvas,
        {
          type: "doughnut",
          data: {
            labels: labels,
            datasets: [
              {
                data: data,
                backgroundColor: [
                  "rgb(255,240 ,245)",
                  "rgb(255,182,193)",
                  "rgb(255,20,147)",
                  "rgb(221,160,221)",
                  "rgb(128,128,221)",
                ],
              },
            ],
          },
        }
      );
    }

    return () => {
      if (doughnutChartInstance) {
        doughnutChartInstance.destroy();
      }
    };
  }, [data, labels]);

  return <canvas id="doughnutChart" width="400" height="200"></canvas>;
};

export default Donut;
