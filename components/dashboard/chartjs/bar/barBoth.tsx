"use client";

import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { chartJsProps } from "@/types/chartJs";

Chart.register(...registerables);

const BarBoth: React.FC<chartJsProps> = ({ data, labels }) => {
  const barChartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let barChartInstance: Chart<"bar", number[], string> | null = null;

    if (barChartRef.current) {
      if (Chart.getChart(barChartRef.current)) {
        Chart.getChart(barChartRef.current)?.destroy();
      }

      const datasets = data.map((dataset, index) => ({
        label: `Dataset ${index + 1}`,
        data: [dataset],
        backgroundColor:
          index % 2 === 0
            ? "rgba(75, 192, 192, 0.5)"
            : "rgba(255, 99, 132, 0.5)",
        borderColor:
          index % 2 === 0 ? "rgba(75, 192, 192, 1)" : "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        yAxisID: index % 2 === 0 ? "positiveYAxis" : "negativeYAxis", // 각 데이터셋에 대한 yAxisID 설정
      }));

      barChartInstance = new Chart<"bar", number[], string>(
        barChartRef.current,
        {
          type: "bar",
          data: {
            labels: labels,
            datasets: datasets,
          },
          options: {
            scales: {
              x: {
                beginAtZero: true,
              },
              y: {
                beginAtZero: true,
                stacked: false,
                // 각각의 y 축에 대한 설정
                // scales: {
                //   positiveYAxis: {
                //     type: "linear",
                //     position: "left",
                //   },
                //   negativeYAxis: {
                //     type: "linear",
                //     position: "right",
                //   },
                // },
              },
            },
          },
        }
      );
    }

    return () => {
      if (barChartInstance) {
        barChartInstance.destroy();
      }
    };
  }, [data, labels]);

  return <canvas ref={barChartRef} width="400" height="200"></canvas>;
};

export default BarBoth;
