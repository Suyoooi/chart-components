"use client";
import React, { useEffect } from "react";
import * as d3 from "d3";

const StackedBarChart: React.FC = () => {
  useEffect(() => {
    d3.select("#viz_container").select("svg").remove();

    const margin = { top: 100, right: 20, bottom: 50, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Sample Data
    const sampleData = [
      { year: 2010, male: 50, female: 30 },
      { year: 2011, male: 70, female: 40 },
      { year: 2012, male: 90, female: 60 },
      { year: 2013, male: 50, female: 30 },
      { year: 2014, male: 70, female: 40 },
      { year: 2015, male: 90, female: 60 },
    ];

    const svg = d3
      .select("#viz_container")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      //   .attr("width", "100%")
      //   .attr("height", "100%")
      //   .attr("viewBox", "0 0 450 350")
      .attr("preserveAspectRatio", "xMinYMin")
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const typeKeys = ["male", "female"];

    // stack data
    const stack = d3
      .stack()
      .keys(typeKeys)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);
    const stackedData = stack(sampleData);

    // X scale and Axis
    const xScale = d3
      .scaleBand()
      .domain(sampleData.map((d: any) => d.year))
      .range([0, width])
      .padding(0.2);
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickSize(0).tickPadding(8));

    const maxDataValue = d3.max(stackedData, (d: any) =>
      d3.max(d, (e: any) => +e[1])
    );

    const yScale = d3
      .scaleLinear()
      .domain([0, maxDataValue || 0])
      .range([height, 0]);

    svg
      .append("g")
      .call(d3.axisLeft(yScale).ticks(9).tickSize(0).tickPadding(6))
      .call(function (d: any) {
        return d.select(".domain").remove();
      });

    // color palette
    const color = d3
      .scaleOrdinal()
      .domain(typeKeys)
      .range(["#8EBEFF", "#e0a9dc"]);

    const GridLine = function (scale: any) {
      return d3.axisLeft(scale);
    };

    svg
      .append("g")
      .attr("class", "grid")
      .call(
        d3
          .axisLeft(yScale)
          .tickSize(-width)
          .tickFormat(null as any)
      );

    // tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("id", "chart")
      .attr("class", "tooltip");

    const mouseover = function (this: any, d: any) {
      tooltip.style("opacity", 0.8);
      d3.select(this).style("opacity", 0.5);
    };
    const mousemove = function (event: any, d: any) {
      const formater = d3.format(",");
      tooltip
        .html(formater(d[1] - d[0]))
        .style("top", event.pageY - 10 + "px")
        .style("left", event.pageX + 10 + "px");
    };
    const mouseleave = function (this: any, d: any) {
      tooltip.style("opacity", 0);
      d3.select(this).style("opacity", 1);
    };

    // bar
    svg
      .append("g")
      .selectAll("g")
      .data(stackedData)
      .enter()
      .append("g")
      .attr("fill", (d: any) => color(d.key) as string)
      .selectAll("rect")
      .data((d: any) => d)
      .join("rect")
      .attr("x", (d: any) => xScale(d.data.year) as number)
      .attr("y", (d: any) => yScale(d[1]) as number)
      .attr("width", xScale.bandwidth() as number)
      .attr("height", (d: any) => (yScale(d[0]) - yScale(d[1])) as number)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    // // title
    // svg
    //   .append("text")
    //   .attr("class", "chart-title")
    //   .attr("x", -margin.left * 0.6)
    //   .attr("y", -margin.top / 1.5)
    //   .attr("text-anchor", "start")
    //   .text("Resettlement by UNHCR and others | 2010-2020");

    // // Y axis label
    // svg
    //   .append("text")
    //   .attr("class", "chart-label")
    //   .attr("x", -margin.left * 0.6)
    //   .attr("y", -(margin.top / 8))
    //   .attr("text-anchor", "start")
    //   .text("Number of people (thousands)");

    // // source
    // svg
    //   .append("text")
    //   .attr("class", "chart-source")
    //   .attr("x", -margin.left * 0.6)
    //   .attr("y", height + margin.bottom * 0.7)
    //   .attr("text-anchor", "start")
    //   .text("Source: UNHCR Refugee Data Finder");

    // // copyright
    // svg
    //   .append("text")
    //   .attr("class", "copyright")
    //   .attr("x", -margin.left * 0.6)
    //   .attr("y", height + margin.bottom * 0.9)
    //   .attr("text-anchor", "start")
    //   .text("©UNHCR, The UN Refugee Agency");

    // legend
    svg
      .append("rect")
      .attr("x", -margin.left * 0.6)
      .attr("y", -(margin.top / 2))
      .attr("width", 15)
      .attr("height", 15)
      .style("fill", "#8EBEFF");
    svg
      .append("text")
      .attr("class", "legend")
      .attr("x", -margin.left * 0.6 + 20)
      .attr("y", -(margin.top / 2.5))
      .text("UNHCR resettlement");
    svg
      .append("rect")
      .attr("x", 130)
      .attr("y", -(margin.top / 2))
      .attr("width", 15)
      .attr("height", 15)
      .style("fill", "#e0a9dc");
    svg
      .append("text")
      .attr("class", "legend")
      .attr("x", 150)
      .attr("y", -(margin.top / 2.5))
      .text("Other resettlement");
  }, []);

  return <div id="viz_container" />;
};

export default StackedBarChart;
