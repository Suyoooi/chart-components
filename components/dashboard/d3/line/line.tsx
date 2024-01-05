"use client";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface LineChartProps {
  data: number[];
  width: number;
  height: number;
}

const Line: React.FC<LineChartProps> = ({ data, width, height }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const xAxisRef = useRef<SVGGElement | null>(null);
  const yAxisRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current || !xAxisRef.current || !yAxisRef.current) return;

    const svg = d3.select(svgRef.current);
    const xAxisGroup = d3.select(xAxisRef.current);
    const yAxisGroup = d3.select(yAxisRef.current);

    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, width]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data) || 0])
      .range([height, 0]);

    const line = d3
      .line<number>()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d));

    svg.selectAll("*").remove();

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale).ticks(data.length));

    svg.append("g").call(d3.axisLeft(yScale));

    svg
      .append("path")
      .data([data])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data, width, height]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      <g ref={xAxisRef}></g>
      <g ref={yAxisRef}></g>
    </svg>
  );
};

export default Line;
