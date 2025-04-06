import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";
const Select = ({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <Menu>
        <MenuButton className="cursor-pointer data-[open]:border-b-0 data-[open]:rounded-lg data-[open]:rounded-b-none text-sm flex items-center justify-between border py-1 px-2 w-30 rounded-full border-gray-900 font-semibold text-gray-0">
          {value}
          <ChevronDownIcon className="size-4" />
        </MenuButton>
        <MenuItems
          anchor="bottom"
          className="border bg-gray-1000 border-t border-gray-900 rounded-b-lg"
        >
          {options.map((name) => (
            <MenuItem key={name}>
              <button
                onClick={() => onChange(name)}
                className={classNames(
                  "text-sm cursor-pointer hover:bg-gray-900 hover:text-gray-0 flex items-center justify-between py-2 px-3 w-29.5",
                  {
                    "bg-gray-900 text-gray-0": value === name,
                  }
                )}
              >
                {name}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};

export default Select;
