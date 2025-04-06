//NO EXPORT ACCESS FOR ICONS IN FIGMA

import {
  BellIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  GlobeAmericasIcon,
  Squares2X2Icon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
export default [
  {
    label: "Dashboard",
    to: "/",
    children: [{ label: "Overview", to: "/" }],
    icon: <Squares2X2Icon />,
    mobileNav: true,
  },
  {
    label: "Analytics",
    to: "/analytics",
    icon: <ChartBarIcon />,
    mobileNav: true,
    children: [
      { label: "Overview", to: "/analytics" },
      { label: "Demographics", to: "/analytics/demographics" },
    ],
  },
  {
    label: "Connect",
    to: "/connect",
    icon: <GlobeAmericasIcon />,
    mobileNav: true,
  },
  {
    label: "Activity",
    to: "/activity",
    icon: <BellIcon />,
    mobileNav: true,
  },
  {
    label: "Dealroom",
    to: "/dealroom",
    icon: <UserGroupIcon />,
    mobileNav: true,
  },
  {
    label: "Profile",
    to: "/profile",
    icon: <UserIcon />,
    mobileNav: false,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: <Cog6ToothIcon />,
    mobileNav: false,
  },
];
