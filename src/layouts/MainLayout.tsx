import { useCurrentPageData } from "@/hooks/useCurrentPageData";
import DesktopView from "@/views/DesktopView";
import MobileView from "@/views/MobileView";

const MainLayout = () => {
  const { label } = useCurrentPageData()!;

  return (
    <>
      <title>{`Vertx | ${label}`}</title>
      <section className="hidden xl:block">
        <DesktopView />
      </section>
      <section className="block xl:hidden">
        <MobileView />
      </section>
    </>
  );
};

export default MainLayout;
