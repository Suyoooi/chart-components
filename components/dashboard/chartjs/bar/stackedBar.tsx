"use client";

import React, { useEffect, useRef } from "react";
import {
  Chart,
  ChartConfiguration,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  TooltipItem,
} from "chart.js";

interface StackedBarChartProps {
  data: number[][];
  labels: string[];
  legend: string[];
}

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const StackedBarChart: React.FC<StackedBarChartProps> = ({
  data,
  labels,
  legend,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const colors = legend.map(() => getRandomColor());

      const stackedBarChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: data.map((dataset, index) => ({
            label: legend[index],
            data: dataset,
            backgroundColor: colors[index],
            stack: "Stack 1",
          })),
        },
        options: {
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: true,
            },
          },
          plugins: {
            legend: {
              display: true,
            },
          },
          tooltips: {
            mode: "index",
            intersect: false,
            callbacks: {
              label: function (tooltipItem: any, data: any) {
                const datasetLabel =
                  data.datasets[tooltipItem.datasetIndex].label || "";
                const value = Math.abs(tooltipItem.yLabel as number);
                return `${datasetLabel}: ${value}`;
              },
              footer: function (tooltipItems: any) {
                const total = tooltipItems.reduce(
                  (sum: any, current: any) =>
                    sum + Math.abs(current.yLabel as number),
                  0
                );
                return `Total: ${total}`;
              },
            },
          },
        },
      } as ChartConfiguration);

      return () => {
        stackedBarChart.destroy();
      };
    }
  }, [data, labels, legend]);

  return <canvas ref={chartRef} width="400" height="300"></canvas>;
};

export default StackedBarChart;
