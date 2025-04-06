const CountryBar = ({
  name,
  color,
  value,
}: {
  name: string;
  color: string;
  value: number;
}) => {
  return (
    <div className="flex items-center text-gray-0 gap-2">
      <span className="w-[48px] h-[34px] rounded-sm bg-amber-600" />
      <div className="flex w-full items-start flex-col">
        <span className="text-lg  w-full flex justify-between items-center">
          <p>{name}</p>
          7%
        </span>
        <div className="w-full bg-gray-900 rounded-full h-2">
          <div
            style={{ background: color, width: value + "%" }}
            className="h-2 rounded-full"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CountryBar;
