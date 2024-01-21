import { SiteHeader } from "@/components/ui/site-header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <SiteHeader />
      <Outlet />
    </div>
  );
};

export default Main;
