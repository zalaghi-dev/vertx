import Select from "@/components/Select";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import DottedMap from "dotted-map";
import { useState } from "react";
import { Link } from "react-router";
import CountryBar from "@/components/CountryBar";
const metrics = ["Visitors", "Connections", "Interactions", "Impressions"];
const map = new DottedMap({
  height: 50,
  grid: "vertical",
});

map.addPin({
  lat: 48.8534,
  lng: 2.3488,
  data: "India",
  svgOptions: { color: "orange" },
});
map.addPin({
  lat: 63.8534,
  lng: 22.3488,
  data: "United States",
  svgOptions: { color: "blue" },
});
map.addPin({
  lat: 10.8534,
  lng: 1.3488,
  data: "Canada",
  svgOptions: { color: "green" },
});

const points = map.getPoints();

const svgOptions = {
  backgroundColor: "transparent",
  color: "#212121",
  radius: 0.35,
};

const DemographicsOverview = () => {
  const [metric, setMetric] = useState<string>("Visitors");
  const viewBox = `0 0 100 50`;
  return (
    <div className="border p-4 rounded-lg border-gray-900">
      <div className="font-semibold text-xl text-gray-0 pb-4">Demographics</div>
      <Select options={metrics} onChange={setMetric} value={metric} />
      {/* MAP */}
      <div className="grid grid-cols-12 grid-rows-1 gap-5">
        <div className="col-span-12 xl:col-span-6 relative">
          {/* LEGEND */}
          <div className="absolute border p-1 px-2 rounded-full bg-gray-1000 border-gray-900 flex gap-7 bottom-2">
            {points
              .filter((p) => p.data)
              .map(({ data, svgOptions }) => (
                <div className="text-gray-0 text-sm items-center flex gap-2">
                  <span
                    className="size-3 rounded-full"
                    style={{ background: svgOptions?.color }}
                  />
                  {data}
                </div>
              ))}
          </div>
          <svg viewBox={viewBox} className="m-6">
            {/* OTHER POINTS OF MAP */}
            {points
              .filter((p) => !p.data)
              .map((point, index) => {
                return (
                  <g key={index}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={svgOptions.radius}
                      fill={svgOptions.color}
                    >
                      <title>{point.data}</title>
                    </circle>
                  </g>
                );
              })}
            {/* ACTIVE PINS POINTS OF MAP */}

            {points
              .filter((p) => p.data)
              .map((point, index) => {
                return (
                  <g key={index}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r={svgOptions.radius}
                      fill={svgOptions.color}
                      style={{ fill: point.svgOptions?.color }}
                    >
                      <title>{point.data}</title>
                    </circle>
                    {
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={svgOptions.radius * 0.3}
                        fill="none"
                        z={30}
                        stroke={point.svgOptions?.color}
                        strokeWidth="2.5"
                        strokeDasharray="5,3"
                      />
                    }
                  </g>
                );
              })}
          </svg>
        </div>
        <div className="col-span-0 xl:col-span-2" />
        <div className="col-span-12 xl:col-span-4 flex flex-col">
          <div className="w-full flex gap-10 flex-col pb-7.5 text-center mb-3">
            {points
              .filter((p) => p.data)
              .map(({ data, svgOptions, lat }) => (
                <CountryBar
                  value={lat}
                  color={svgOptions?.color || "#fff"}
                  name={data}
                />
              ))}
          </div>
          <Link
            to="#"
            className="flex  border-t border-gray-900 pt-4 items-center mt-auto font-semibold mb-2 hover:text-gray-0 text-sm justify-end gap-3"
          >
            <p>View All Countries</p>
            <ArrowRightIcon className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DemographicsOverview;
