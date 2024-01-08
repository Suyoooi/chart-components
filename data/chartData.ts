export const labels = ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"];
export const areaZoomLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];
export const gaugeLabels = ["Level.1", "Level.2", "Level.3"];
export const gaugeLabels2 = ["Level.1", "Level.2"];

export const lineChartData = [10, 20, 15, 25, 18];
export const multiLineChartData = [
  [10, 20, 15, 5, 18],
  [15, 20, 10, 24, 22],
  [17, 33, 1, 14, 12],
];
export const barChartData = [15, 25, -18, 30, 22];
export const horizontalBarChartData = [15, 25, 18, -6, 22];
export const doughnutChartData = [30, 20, 10, 25, 15];
export const areaChartData = [10, -13, 3, 25, -15];
export const areaZoomChartData = [10, -13, 3, 25, -15, 32, -23, 3];
export const gauageChartData = [200, 400, 700];
export const gauageChartData2 = [700, 200];

interface TreemapDataset {
  label: string;
  key: string;
  groups: string[];
  fontColor: string;
  fontSize: number;
  fontWeight: string;
  tree: any[];
  spacing: number;
  borderWidth: number;
  borderColor: string;
}

export const treemapDataset: TreemapDataset = {
  label: "treemap",
  key: "price",
  groups: ["displayValue"],
  fontColor: "grey",
  fontSize: 16,
  fontWeight: "bold",
  tree: [
    { price: 100, name: "BTC" },
    { price: 20, name: "ETX" },
    { price: 6, name: "XRP" },
    { price: 6, name: "DGE" },
    { price: 0.4, name: "TRD" },
    { price: 40, name: "TVD" },
    { price: 10, name: "FRO" },
    { price: 10, name: "GEO" },
    { price: 63, name: "ABC" },
  ].map((item) => {
    const { name, price } = item;
    const displayValue = `Subtheme: ${name} ${price}`;
    return { ...item, displayValue };
  }),
  spacing: 0.1,
  borderWidth: 1,
  borderColor: "rgba(255, 255, 255, 0.5)",
};

export const d3Data = [
  { Country: "A", Value: 50 },
  { Country: "B", Value: 80 },
  { Country: "C", Value: 120 },
  { Country: "D", Value: 10 },
  { Country: "E", Value: 150 },
  // { Country: "F", Value: -2000 },
];

export const temporaryData = [
  { name: "Group1", year: 2020, n: 15 },
  { name: "Group1", year: 2021, n: 25 },
  { name: "Group1", year: 2022, n: 13 },
  { name: "Group2", year: 2020, n: 17 },
  { name: "Group2", year: 2021, n: 19 },
  { name: "Group2", year: 2022, n: 15 },
  { name: "Group3", year: 2020, n: 24 },
  { name: "Group3", year: 2021, n: 28 },
  { name: "Group3", year: 2022, n: 21 },
  { name: "Group4", year: 2020, n: 11 },
  { name: "Group4", year: 2021, n: 3 },
  { name: "Group4", year: 2022, n: 8 },
  { name: "Group5", year: 2020, n: 12 },
  { name: "Group5", year: 2021, n: 30 },
  { name: "Group5", year: 2022, n: 28 },
];

interface DataNode {
  name: string;
  shortName: string;
  size?: number | null;
  children: DataNode[];
}

export const treemapData: DataNode = {
  name: "Treemap Test",
  shortName: "Test",
  size: null,
  children: [
    {
      name: "Category 1",
      shortName: "카테고리1",
      size: 500,
      children: [
        {
          name: "왕밤빠앙",
          shortName: "왕밤빠앙",
          size: 59,
          children: [],
        },
        {
          name: "붕어빠앙",
          shortName: "붕어빠앙",
          size: 248,
          children: [],
        },
      ],
    },
    {
      name: "Category 2",
      shortName: "카테고리2",
      size: 200,
      children: [
        {
          name: "계란빠앙",
          shortName: "계란빠앙",
          size: 92,
          children: [],
        },
        {
          name: "호두과자",
          shortName: "호두과자",
          size: 405,
          children: [],
        },
      ],
    },
  ],
};
