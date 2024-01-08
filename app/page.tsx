import Area from "@/components/dashboard/chartjs/area/area";
import AreaZoom from "@/components/dashboard/chartjs/area/areaZoom";
import Bar from "@/components/dashboard/chartjs/bar/bar";
import HorizontalBar from "@/components/dashboard/chartjs/bar/horizontalBar";
import StackedBar2 from "@/components/dashboard/chartjs/bar/stackedBar2";
import Donut from "@/components/dashboard/chartjs/donut/donut";
import HalfDonut from "@/components/dashboard/chartjs/donut/halfDonut";
import Gauge from "@/components/dashboard/chartjs/gauage/gauge";
import GaugeChart1 from "@/components/dashboard/chartjs/gauage/gaugeChart1";
import GaugeChart2 from "@/components/dashboard/chartjs/gauage/gaugeChart2";
import Line from "@/components/dashboard/chartjs/line/line";
import LineAddData from "@/components/dashboard/chartjs/line/lineAddData";
import MultiLine from "@/components/dashboard/chartjs/line/multiLine";
import Treemap from "@/components/dashboard/chartjs/treemap/treemap";
import BarChart from "@/components/dashboard/d3/bar/bar";

import HorizontalBarChart from "@/components/dashboard/d3/bar/horizontalBar";
import LineChart from "@/components/dashboard/d3/line/line";
import MultiLineChart from "@/components/dashboard/d3/line/multiLine";
import AgGrid from "@/components/grid/agGrid/agGrid1";
import AgGrid2 from "@/components/grid/agGrid/agGrid2";
import Tabulator1 from "@/components/grid/tabulator/tabulator1";
import {
  areaChartData,
  areaZoomChartData,
  areaZoomLabels,
  barChartData,
  d3Data,
  doughnutChartData,
  gauageChartData,
  gauageChartData2,
  gaugeLabels,
  gaugeLabels2,
  horizontalBarChartData,
  labels,
  lineChartData,
  multiLineChartData,
  temporaryData,
  treemapDataset,
} from "@/data/chartData";

export default function Home() {
  const columns = [
    { title: "Name", field: "name", width: 150 },
    { title: "Age", field: "age", align: "left" },
    { title: "Country", field: "country", align: "left" },
  ];

  const data = [
    { name: "수연", age: 30, country: "한국" },
    { name: "붕어빵", age: 25, country: "한국" },
    { name: "계란빵", age: 40, country: "UK" },
    { name: "John Doe", age: 30, country: "USA" },
    { name: "호두과자", age: 67, country: "한국" },
    { name: "Jane Doe", age: 24, country: "Canada" },
    { name: "호두과자", age: 24, country: "한국" },
    { name: "옥수수빵", age: 51, country: "한국" },
    { name: "Bob Smith", age: 40, country: "UK" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-red-100">
      <div style={{ fontSize: 30, fontWeight: 700 }} className="mb-10">
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
        <div>
          <StackedBar2
            maleData={lineChartData}
            femaleData={doughnutChartData}
            labels={labels}
          />
        </div>
      </div>
      <div className="flex flex-row mt-12 gap-10">
        <div>
          <Area data={areaChartData} labels={labels} />
        </div>
        <div>
          <AreaZoom data={areaZoomChartData} labels={areaZoomLabels} />
        </div>
        <div>
          <Treemap data={treemapDataset} />
        </div>
      </div>
      <div style={{ fontSize: 30, fontWeight: 700 }} className="mb-20 mt-20">
        D3 Chart
      </div>
      <div className="flex flex-row">
        <div>
          <LineChart data={d3Data} />
        </div>
        <div>
          <MultiLineChart data={temporaryData} />
        </div>
      </div>
      <div className="flex flex-row mt-12">
        <div>
          <HorizontalBarChart data={d3Data} />
        </div>
        <div>
          <BarChart data={d3Data} />
        </div>
      </div>
      <div style={{ fontSize: 30, fontWeight: 700 }} className="mb-10 mt-20">
        Tabulator
      </div>
      <div className="flex flex-row">
        <div>
          <Tabulator1 columns={columns} data={data} />
        </div>
      </div>
      <div style={{ fontSize: 30, fontWeight: 700 }} className="mb-10 mt-20">
        ag-grid
      </div>
      <div className="flex flex-row mt-12">
        <div>
          <AgGrid />
        </div>
        <div>
          <AgGrid2 />
        </div>
      </div>
    </main>
  );
}
