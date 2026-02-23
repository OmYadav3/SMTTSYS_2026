import { REPORT_TYPES } from "@/utils/constant";
import { Outlet } from "react-router-dom";

const ReportsDownloads = () => {
  return (
    <div className="flex flex-col items-start bg-color h-screen py-4 px-8 ">
      {/* Header */}
      <h1 className="text-lg font-bold py-4 ">Reports & Downloads</h1>

      {/* Sub Navigation */}
      <div className="flex items-center gap-8 text-md p-4 w-full font-bold">
        {REPORT_TYPES.map((report) => (
          <NavLink
            key={report.id}
            to={report.to}
            end={report.to === ""}
            className={({ isActive }) =>
              isActive
                ? "text-color-lg bg-component-dr underline underline-offset-20 scale-112 px-4 py-3 rounded-md "
                : "text-color hover:underline hover:underline-offset-20 hover:scale-112"
            }
          >
            {report.name}
          </NavLink>
        ))}
      </div>

      {/* Content And Filters*/}
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default ReportsDownloads;
