import Area from "@/components/dashboard/chartjs/area/area";
import AreaZoom from "@/components/dashboard/chartjs/area/areaZoom";
import Bar from "@/components/dashboard/chartjs/bar/bar";
import HorizontalBar from "@/components/dashboard/chartjs/bar/horizontalBar";
import Donut from "@/components/dashboard/chartjs/donut/donut";
import HalfDonut from "@/components/dashboard/chartjs/donut/halfDonut";
import Gauge from "@/components/dashboard/chartjs/gauage/gauge";
import GaugeChart1 from "@/components/dashboard/chartjs/gauage/gaugeChart1";
import GaugeChart from "@/components/dashboard/chartjs/gauage/gaugeChart1";
import GaugeChart2 from "@/components/dashboard/chartjs/gauage/gaugeChart2";
import Line from "@/components/dashboard/chartjs/line/line";
import LineAddData from "@/components/dashboard/chartjs/line/lineAddData";
import MultiLine from "@/components/dashboard/chartjs/line/multiLine";
import BarChart from "@/components/dashboard/d3/bar/bar";

import HorizontalBarChart from "@/components/dashboard/d3/bar/horizontalBar";
import LineChart from "@/components/dashboard/d3/line/line";

export default function Home() {
  const labels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];
  const areaZoomLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const gaugeLabels = ["Level.1", "Level.2", "Level.3"];
  const gaugeLabels2 = ["Level.1", "Level.2"];

  const lineChartData = [10, 20, 15, 25, 18];
  const multiLineChartData = [
    [10, 20, 15, 25, 18],
    [15, 25, 18, 30, 22],
    [8, 18, 12, 20, 15],
  ];
  const barChartData = [15, 25, -18, 30, 22];
  const horizontalBarChartData = [15, 25, 18, -6, 22];
  const doughnutChartData = [30, 20, 10, 25, 15];
  const areaChartData = [10, -13, 3, 25, -15];
  const areaZoomChartData = [10, -13, 3, 25, -15, 32, -23, 3];
  const gauageChartData = [200, 400, 700];
  const gauageChartData2 = [700, 200];

  const chartWidth = 400;
  const chartHeight = 200;

  const d3Data = [
    { Country: "A", Value: 50 },
    { Country: "B", Value: 80 },
    { Country: "C", Value: 120 },
    { Country: "D", Value: 10 },
    { Country: "E", Value: 150 },
    // { Country: "F", Value: -2000 },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-100">
      <div style={{ fontSize: 30, fontWeight: 700 }} className="mb-20">
        Chart.js
      </div>
      <div className="flex flex-row">
        <div>
          <Line data={lineChartData} labels={labels} />
        </div>
        <div>
          <MultiLine data={multiLineChartData} labels={labels} />
        </div>
        <div>
          <LineAddData data={multiLineChartData} labels={labels} />
        </div>
      </div>
      <div className="flex flex-row mt-12">
        <div>
          <HalfDonut data={doughnutChartData} labels={labels} />
        </div>
        <div>
          <Donut data={doughnutChartData} labels={labels} />
        </div>
      </div>
      <div className="flex flex-row mt-12 gap-10">
        <div>
          <Gauge data={gauageChartData} labels={gaugeLabels} />
        </div>
        <div>
          <GaugeChart1 data={gauageChartData} labels={gaugeLabels} />
        </div>
        <div>
          <GaugeChart2 data={gauageChartData2} labels={gaugeLabels2} />
        </div>
      </div>
      <div className="flex flex-row mt-12">
        <div>
          <Bar data={barChartData} labels={labels} />
        </div>
        <div>
          <HorizontalBar data={horizontalBarChartData} labels={labels} />
        </div>
      </div>
      <div className="flex flex-row mt-12 gap-10">
        <div>
          <Area data={areaChartData} labels={labels} />
        </div>
        <div>
          <AreaZoom data={areaZoomChartData} labels={areaZoomLabels} />
        </div>
      </div>
      <div style={{ fontSize: 30, fontWeight: 700 }} className="mb-20 mt-20">
        D3 Chart
      </div>
      <div className="flex flex-row">
        <div>
          <LineChart
            data={lineChartData}
            width={chartWidth}
            height={chartHeight}
          />
        </div>
        <div>
          <HorizontalBarChart data={d3Data} />
        </div>
        <div>
          <BarChart data={d3Data} />
        </div>
      </div>
      <div className="flex flex-row mt-12"></div>
      <div className="flex flex-row mt-12">
        <div>
          <HorizontalBar data={horizontalBarChartData} labels={labels} />
        </div>
      </div>
    </main>
  );
}
