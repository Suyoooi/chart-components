import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface LineChartProps {
  data: { date: Date; [key: string]: number }[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);

    const margin = { top: 20, right: 80, bottom: 30, left: 50 };
    const width = +svg.attr("width") - margin.left - margin.right;
    const height = +svg.attr("height") - margin.top - margin.bottom;

    const parseTime = d3.timeParse("%Y%m%d");

    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);
    const z = d3.scaleOrdinal(d3.schemeCategory10);

    const line = d3
      .line<{ date: Date; electricity: number }>()
      .curve(d3.curveBasis)
      .x((d) => x(d.date))
      .y((d) => y(d.electricity));

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const devices = data.columns.slice(1).map((id: string) => ({
      id,
      values: data.map((d: any) => ({ date: d.date, electricity: d[id] })),
    }));

    x.domain(d3.extent(data, (d: any) => d.date) as [Date, Date]);
    y.domain([
      d3.min(devices, (c: any) =>
        d3.min(c.values, (d: any) => d.electricity)
      ) as number,
      d3.max(devices, (c: any) =>
        d3.max(c.values, (d: any) => d.electricity)
      ) as number,
    ]);
    z.domain(devices.map((c: any) => c.id));

    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x));

    g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("fill", "#000")
      .text("Electricity, kWh");

    const etc = g
      .selectAll(".etc")
      .data(devices)
      .enter()
      .append("g")
      .attr("class", "etc");

    etc
      .append("path")
      .attr("class", "line")
      .attr("d", (d: any) => line(d.values))
      .style("stroke", (d: any) => z(d.id));

    etc
      .append("text")
      .datum((d: any) => ({ id: d.id, value: d.values[d.values.length - 1] }))
      .attr(
        "transform",
        (d: any) => `translate(${x(d.value.date)},${y(d.value.electricity)})`
      )
      .attr("x", 3)
      .attr("dy", "0.35em")
      .style("font", "10px sans-serif")
      .text((d: any) => d.id);
  }, [data]);

  return <svg ref={svgRef} width="960" height="500"></svg>;
};

export default LineChart;
