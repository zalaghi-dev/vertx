import siteMap from "@/config/siteMap";
import { useLocation } from "react-router";
export const useCurrentPageData = () => {
  const { pathname } = useLocation();
  const currentRoute = siteMap.find(({ to }) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to)
  );

  return currentRoute;
};
