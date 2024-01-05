"use client";
import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

interface lineChartJsProps {
  data: any[];
  labels: string[];
}

const MultiLine: React.FC<lineChartJsProps> = ({ data, labels }) => {
  const multiLineChartRef = useRef<HTMLCanvasElement | null>(null);
  const [zoomCount, setZoomCount] = useState(0);

  useEffect(() => {
    let multiLineChartInstance: Chart<"line", number[], string> | null = null;
    const multiLineChartCanvas = multiLineChartRef.current;

    const updateZoom = () => {
      if (multiLineChartInstance) {
        if (
          multiLineChartInstance.options &&
          multiLineChartInstance.options.scales
        ) {
          const xScale = multiLineChartInstance.options.scales.x;
          if (xScale) {
            xScale.min = zoomCount > 0 ? 1 : undefined;
            xScale.max = zoomCount > 0 ? 6 : undefined;
          }
        }
        multiLineChartInstance.update();
      }
    };

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

    updateZoom();

    return () => {
      if (multiLineChartInstance) {
        multiLineChartInstance.destroy();
      }
    };
  }, [data, labels, zoomCount]);

  const handleZoomIn = () => {
    setZoomCount((prevZoomCount) => prevZoomCount + 1);
    console.log("zoomIn 했습니다::::", zoomCount);
  };

  const handleZoomOut = () => {
    setZoomCount((prevZoomCount) => Math.max(0, prevZoomCount - 1));
    console.log("zoomOut 했습니다::::", zoomCount);
  };

  useEffect(() => {
    console.log("zoomCount 변경:", zoomCount);
  }, [zoomCount]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{
            backgroundColor: "#e9e9e9",
            paddingRight: 6,
            paddingLeft: 6,
            borderWidth: 2,
            borderColor: "#616161",
            fontWeight: 700,
            marginRight: 10,
            borderRadius: 8,
          }}
          onClick={handleZoomIn}
        >
          +
        </button>
        <button
          style={{
            backgroundColor: "#e9e9e9",
            paddingRight: 6,
            paddingLeft: 6,
            borderWidth: 2,
            borderColor: "#616161",
            borderRadius: 8,
            fontWeight: 700,
          }}
          onClick={handleZoomOut}
        >
          -
        </button>
      </div>
      <canvas ref={multiLineChartRef} width="400" height="200"></canvas>
    </div>
  );
};

export default MultiLine;
