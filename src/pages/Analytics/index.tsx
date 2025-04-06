import DemographicsOverview from "./sections/DemographicsOverview";
import Chart from "./sections/Chart";
import Insights from "./sections/Insights";
const Analytics = () => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-1 gap-5">
        <div className="col-span-12 xl:col-span-8">
          <Chart />
        </div>
        <div className="col-span-12 xl:col-span-4">
          <Insights />
        </div>
        <div className="col-span-12">
          <DemographicsOverview />
        </div>
      </div>
    </>
  );
};

export default Analytics;
