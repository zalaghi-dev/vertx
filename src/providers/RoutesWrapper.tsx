import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import {
  Dashboard,
  Analytics,
  Connect,
  Dealroom,
  Profile,
  Settings,
  Demographics,
  Page404,
} from "@/pages";
const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Dashboard />} index />
          <Route path="analytics">
            <Route element={<Analytics />} index />
            <Route element={<Demographics />} path="demographics" />
          </Route>
          <Route element={<Connect />} path="connect" />
          <Route element={<Dealroom />} path="dealroom" />
          <Route element={<Profile />} path="profile" />
          <Route element={<Settings />} path="settings" />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesWrapper;
