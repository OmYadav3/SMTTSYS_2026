import useFetchAllReports from "@/hooks/useFetchAllReports";
import { REPORT_TYPES } from "@/utils/constant";
import { NavLink, Outlet } from "react-router-dom";

const ReportsDownloads = () => {
  useFetchAllReports()

  return (
    <div className="flex flex-col items-start h-screen py-4 px-4 ">
      {/* Header */}
      <h1 className="text-lg font-bold py-4 ">Reports & Downloads</h1>

      {/* Sub Navigation */}
      <div className="flex items-center gap-10 text-md py-4 w-full font-bold">
        {REPORT_TYPES.map((report) => (
          <NavLink
            key={report.id}
            to={report.to}
            end={report.to === ""}
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 underline underline-offset-20 scale-112 px-4 py-3 rounded-md "
                : " hover:underline hover:underline-offset-20 hover:scale-112"
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
