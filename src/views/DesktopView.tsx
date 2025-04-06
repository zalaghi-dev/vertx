import Avatar from "@/components/Avatar";
import Logo from "@/components/Logo";
import siteMap from "@/config/siteMap";
import { useCurrentPageData } from "@/hooks/useCurrentPageData";
import classNames from "classnames";
import { Link, NavLink, Outlet } from "react-router";
const DesktopView = () => {
  const { label, children } = useCurrentPageData()!;

  return (
    <main className="h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        {/* NAVBAR */}
        <div className="w-[280px] border-r border-gray-900 flex flex-col h-full">
          <Logo />
          <div className="flex flex-1 overflow-hidden">
            <div className="flex flex-col gap-2">
              {/* User avatars */}
              <div className="flex-1 flex flex-col">
                {[
                  { status: "ONLINE", id: "1" },
                  { status: "OFFLINE", id: "1" },
                  { status: "IDLE", id: "1" },
                ].map(({ status, id }) => (
                  <div key={id} className="border-b border-gray-900">
                    <Avatar
                      status={
                        status as "ONLINE" | "OFFLINE" | "IDLE" /*FOR NOW*/
                      }
                      id="1"
                      src="./images/avatar-sample.png"
                    />
                  </div>
                ))}
                <div className="border-t cursor-pointer text-gray-0 mt-auto text-4xl p-2 flex items-center justify-center border-gray-900">
                  +
                </div>
              </div>
            </div>

            {/* SIDE MENU */}
            <div className="flex gap-7 pt-5 flex-1 flex-col border-l border-gray-900 overflow-y-auto">
              {siteMap.map(({ label, to }) => (
                <NavLink
                  className={({ isActive }) =>
                    classNames("font-bold hover:text-gray-0 ps-10", {
                      "text-gray-0": isActive,
                    })
                  }
                  key={label}
                  to={to}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header bars - fixed height */}
          <div className="flex border-b border-gray-900 items-center shrink-0">
            <div className="text-lg py-4.5 px-8 text-gray-0">{label}</div>
            <div className="ms-auto flex text-gray-0">
              <Link
                to="/activity"
                className="text-lg ms-auto py-4.5 px-8 border-gray-900 border-s"
              >
                Activity
              </Link>
              <Link
                to="/logout"
                className="text-lg ms-auto py-4.5 px-8 border-gray-900 border-s"
              >
                Log out
              </Link>
            </div>
          </div>

          {/* Tabs - fixed height */}
          {children && (
            <div className="flex border-b border-gray-900 items-center shrink-0">
              {children.map(({ label: tabName, to }) => (
                <NavLink
                  className={({ isActive }) =>
                    classNames("text-lg py-4.5 px-8 border-gray-900 border-e", {
                      "text-gray-0": isActive,
                    })
                  }
                  end
                  key={tabName}
                  to={to}
                >
                  {tabName}
                </NavLink>
              ))}
              <div className="text-lg text-gray-0 cursor-pointer ms-auto py-4.5 px-10.5 border-gray-900 border-s">
                More
              </div>
            </div>
          )}
          <div className="flex-1 overflow-auto p-10">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};
export default DesktopView;
