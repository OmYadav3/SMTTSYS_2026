import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* SIDEBAR */}
      <aside className="border-r">
        <Sidebar/>
      </aside>

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1">

        {/* NAVBAR */}
        <Navbar/>

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>

        {/* FOOTER */}
        <footer className="h-12 border-t flex items-center justify-center">
          Footer
        </footer>

      </div>
    </div>
  );
}
