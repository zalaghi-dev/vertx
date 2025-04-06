import siteMap from "@/config/siteMap";
import { useCurrentPageData } from "@/hooks/useCurrentPageData";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { NavLink, Outlet } from "react-router";
const MobileView = () => {
  const { children } = useCurrentPageData()!;

  const mobileMenu = siteMap.filter(({ mobileNav }) => mobileNav);
  return (
    <main>
      {/* TOB SECTION */}
      <div className="fixed z-50 bg-gray-1000 top-0 w-dvw border-b border-gray-900">
        <div className="flex mx-0 my-4 justify-between items-center">
          <img
            className="size-8 ms-3 rounded-full"
            src="./images/avatar-sample.png"
            alt="Avatar"
          />
          <img
            className="size-8 rounded-full"
            src="./images/avatar-sample.png"
            alt="Logo"
          />
          <div className="size-8 ms-3 hover:cursor-pointer hover:text-gray-0">
            <EllipsisVerticalIcon />
          </div>
        </div>
        {children && (
          <div className="flex mx-6 mt-10 justify-between items-center">
            {children.map(({ label: tabName, to }) => (
              <NavLink
                className={({ isActive }) =>
                  classNames("text-sm pb-2 px-5", {
                    "text-gray-0 border-b-2 border-gray-0": isActive,
                    "text-gray-0 border-b-2 border-transparent": !isActive,
                  })
                }
                end
                key={tabName}
                to={to}
              >
                {tabName}
              </NavLink>
            ))}
          </div>
        )}
      </div>
      {/* PAGE SECTION */}
      <div className="mt-36 mb-24 px-6">
        <Outlet />
      </div>
      {/* NAVBAR DOWN SECTION */}
      <div className="fixed bg-gray-1000 flex pb-8 pt-4 px-5 w-dvw justify-between bottom-0 border-t border-gray-900">
        {mobileMenu.map(({ icon, label, to }) => (
          <NavLink
            to={to}
            key={label}
            className={({ isActive }) =>
              classNames("size-7 relative", {
                "text-gray-0 font-bold": isActive,
              })
            }
          >
            {icon}
            <p className="text-[8px] -bottom-4 font-semibold absolute start-1/2 pt-1 -translate-x-1/2">
              {label}
            </p>
          </NavLink>
        ))}
      </div>
    </main>
  );
};

export default MobileView;
