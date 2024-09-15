import ApexCharts from "apexcharts";
import { useEffect } from "react";

const options = {
  colors: ["#09090b"],
  series: [
    {
      name: "Organic",
      color: "#09090b",
      data: [
        { x: "Ene", y: 301 },
        { x: "Feb", y: 222 },
        { x: "Mar", y: 93 },
        { x: "Abr", y: 421 },
        { x: "May", y: 122 },
        { x: "Jun", y: 323 },
        { x: "Jul", y: 221 },
        { x: "Ago", y: 251 },
        { x: "Sep", y: 281 },
        { x: "Oct", y: 391 },
        { x: "Nov", y: 320 },
        { x: "Dic", y: 530 },
      ],
    },
  ],

  chart: {
    type: "bar",
    height: "320px",
    fontFamily: "Inter, sans-serif",
    toolbar: {
      show: false,
    },
  },
  states: {
    normal: {
      filter: {
        type: "lighten",
        value: 0.5,
      },
    },
    hover: {
      filter: {
        type: "darken",
        value: 1.5,
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "darken",
        value: 1.5,
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadiusApplication: "end",
      borderRadius: 8,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },

  stroke: {
    show: true,
    width: 0,
    colors: ["transparent"],
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: -14,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    floating: false,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        fontFamily: "Inter, sans-serif",
        cssClass:
          "text-xs font-normal fill-gray-500 dark:fill-gray-400 text-gray-400 mr-4",
      },
    },
  },
  fill: {
    opacity: 1,
  },
};

export const BarChart = () => {
  useEffect(() => {
    if (
      document.getElementById("bar-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("bar-chart"),
        options
      );
      chart.render();
    }
  }, []);

  return <div id="bar-chart" className="mt-8"></div>;
};
