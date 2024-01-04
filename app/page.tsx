import Area from "@/components/dashboard/chartjs/area";
import Bar from "@/components/dashboard/chartjs/bar/bar";
import HorizontalBar from "@/components/dashboard/chartjs/bar/horizontalBar";
import Donut from "@/components/dashboard/chartjs/donut/donut";
import HalfDonut from "@/components/dashboard/chartjs/donut/halfDonut";
import Line from "@/components/dashboard/chartjs/line/line";
import MultiLine from "@/components/dashboard/chartjs/line/multiLine";

export default function Home() {
  const labels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];
  const lineChartData = [10, 20, 15, 25, 18];
  const multiLineChartData = [
    [10, 20, 15, 25, 18],
    [15, 25, 18, 30, 22],
    [8, 18, 12, 20, 15],
  ];
  const barChartData = [15, 25, 18, 30, 22];
  const horizontalBarChartData = [15, 25, 18, -6, 22];
  const doughnutChartData = [30, 20, 10, 25, 15];
  const areaChartData = [10, -13, 3, 25, -15];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-100">
      <h1>Chart.js</h1>
      <div className="flex flex-row">
        <div>
          <Line data={lineChartData} labels={labels} />
        </div>
        <div>
          <MultiLine data={multiLineChartData} labels={labels} />
        </div>
        <div>
          <Area data={areaChartData} labels={labels} />
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
      <div className="flex flex-row mt-12">
        <div>
          <Bar data={barChartData} labels={labels} />
        </div>
        <div>
          <HorizontalBar data={horizontalBarChartData} labels={labels} />
        </div>
      </div>
    </main>
  );
}
