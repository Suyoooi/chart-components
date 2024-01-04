"use client";
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export interface lineChartJsProps {
  data: any[];
  labels: string[];
}

const MultiLine: React.FC<lineChartJsProps> = ({ data, labels }) => {
  const multiLineChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const multiLineChartCanvas = multiLineChartRef.current;

    let multiLineChartInstance: Chart<"line", number[], string> | null = null;

    if (multiLineChartCanvas) {
      if (Chart.getChart(multiLineChartCanvas)) {
        Chart.getChart(multiLineChartCanvas)?.destroy();
      }

      multiLineChartInstance = new Chart<"line", number[], string>(
        multiLineChartCanvas,
        {
          type: "line",
          data: {
            labels: labels,
            datasets: data.map((dataset, index) => ({
              label: `Line Chart ${index + 1}`,
              data: dataset,
              borderColor: `rgb(${Math.random() * 255},${Math.random() * 255},${
                Math.random() * 255
              })`,
              borderWidth: 2,
              fill: false,
            })),
          },
        }
      );
    }

    return () => {
      if (multiLineChartInstance) {
        multiLineChartInstance.destroy();
      }
    };
  }, [data, labels]);

  return <canvas ref={multiLineChartRef} width="400" height="200"></canvas>;
};

export default MultiLine;
