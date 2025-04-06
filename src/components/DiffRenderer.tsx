import numberSuffix from "@/utils/numberSuffix";
import classNames from "classnames";

const DiffRenderer = ({
  label,
  difference,
  differencePercentage,
  number,
}: {
  label?: string;
  number: number;
  difference: number;
  differencePercentage: number;
}) => {
  return (
    <div className="text-start">
      <div className="font-semibold text-base text-gray-0 pb-2">{label}</div>
      <div className="pb-2 flex items-center gap-4">
        <span className="font-extrabold text-gray-0 text-4xl">
          {numberSuffix(number)}
        </span>
        <span className="flex text-sm font-semibold flex-col items-center">
          <span
            className={classNames("", {
              "text-green-800": differencePercentage > 0,
              "text-red-800": differencePercentage < 0,
            })}
          >
            {`${differencePercentage > 0 ? "+" : "-"}${differencePercentage}%`}
          </span>
          <span>({difference})</span>
        </span>
      </div>
    </div>
  );
};

export default DiffRenderer;
