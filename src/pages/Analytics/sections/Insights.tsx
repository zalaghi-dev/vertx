import DiffRenderer from "@/components/DiffRenderer";
import Select from "@/components/Select";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router";
const metrics = ["Visitors", "Connections", "Interactions", "Impressions"];

const Insights = () => {
  const [metric, setMetric] = useState<string>("Visitors");

  return (
    <div className="border p-4 rounded-lg border-gray-900">
      <div className="flex justify-between">
        <div className="font-semibold text-xl text-gray-0 pb-4">Insights</div>
        <Select options={metrics} onChange={setMetric} value={metric} />
      </div>
      <div className="w-full flex justify-between xl:flex-col flex-row m-auto border-b border-gray-900 pb-7.5 text-center mb-3">
        <DiffRenderer
          label="Founders"
          difference={343}
          differencePercentage={-434}
          number={7400}
        />
        <DiffRenderer
          label="Investors"
          difference={343}
          differencePercentage={+134}
          number={6091}
        />
      </div>
      <Link
        to="#"
        className="flex items-center mt-4 font-semibold hover:text-gray-0 text-sm justify-end gap-3"
      >
        <p>View detailed insights</p>
        <ArrowRightIcon className="size-5" />
      </Link>
    </div>
  );
};

export default Insights;
