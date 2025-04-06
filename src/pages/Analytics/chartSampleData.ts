import { ChartData } from "chart.js";

export const chartSampleData: ChartData = {
  labels: ["Mar 1", "Mar 5", "Mar 10", "Mar 15", "Mar 20", "Mar 25", "Mar 30"],
  datasets: [
    {
      label: "Connections",
      data: [233, 333, 849, 323, 442, 1111, 1001],
      borderColor: "#fff",
    },
    {
      label: "Visitors",
      data: [534, 535, 232, 323, 442, 865, 111],
      borderColor: "#629bf5",
    },
    {
      label: "Interactions",
      data: [234, 234, 333, 434, 123, 232, 232],
      borderColor: "#d574f2",
    },
  ],
};
