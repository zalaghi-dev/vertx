import { useState } from "react";
import { chartSampleData } from "../chartSampleData";
import numberSuffix from "@/utils/numberSuffix";
import Select from "@/components/Select";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Title,
  Tooltip,
  ChartOptions,
} from "chart.js";
import { Chart as CoreChart } from "react-chartjs-2";
import "chart.js/auto";
import DiffRenderer from "@/components/DiffRenderer";

ChartJS.register(
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Title,
  Tooltip
);

const metrics = ["Visitors", "Connections", "Interactions", "Impressions"];
const periods = [
  "Today",
  "Yesterday",
  "This week",
  "Last week",
  "Last 7 days",
  "Last 30 days",
];

// SAMPLE CHART
const options: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },

    tooltip: {
      usePointStyle: true,
      titleFont: {
        family: "manrope",
      },
      bodyFont: {
        family: "manrope",
      },
      callbacks: {
        labelPointStyle: () => ({
          pointStyle: "circle",
          rotation: 0,
        }),
      },
    },
  },
  scales: {
    x: {
      ticks: {
        font: { family: "manrope" },
        color: "#9e9e9e",
        crossAlign: "near",
      },

      border: { color: "#212121" },
    },
    y: {
      ticks: {
        count: 6,
        autoSkip: true,
        font: { family: "manrope", size: 12 },
        color: "#9e9e9e",
        crossAlign: "far",
        callback: ((value: number) =>
          numberSuffix(Number(value.toFixed(0)))) as any,
      },
      border: {
        color: "transparent",
      },
    },
  },
  datasets: {
    line: {
      pointStyle: false,
      fill: false,
      borderWidth: 3,
    },
  },
};

const Chart = () => {
  // FILTERS
  const [metric, setMetric] = useState<string>("Visitors");
  const [period, setPeriod] = useState<string>("Last 30 days");

  return (
    <div className="border p-4 rounded-lg border-gray-900">
      <div className="flex gap-2">
        <Select options={metrics} onChange={setMetric} value={metric} />
        <Select options={periods} onChange={setPeriod} value={period} />
      </div>
      <div className="w-full m-2 text-center">
        <DiffRenderer
          difference={897}
          differencePercentage={469}
          number={13490}
        />
        <div className=" h-[169px] px-3">
          <CoreChart type="line" data={chartSampleData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
