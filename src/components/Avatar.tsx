import classNames from "classnames";

const Avatar = ({
  status,
  src,
  id,
}: {
  status: "ONLINE" | "OFFLINE" | "IDLE";
  src: string;
  id: string;
}) => {
  console.log("USER ID:", id);
  return (
    <div title={status} className="p-3 relative">
      <img
        className="size-8 cursor-pointer border border-gray-900 rounded-full"
        src={src}
        alt="Logo"
      />
      <span
        className={classNames("size-2 right-3 bottom-3 absolute rounded-full", {
          "bg-green-500": status === "ONLINE",
          "bg-amber-500": status === "IDLE",
          "bg-gray-500": status === "OFFLINE",
        })}
      />
    </div>
  );
};

export default Avatar;
