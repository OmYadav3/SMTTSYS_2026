import DownloadReports from "@/components/DownloadReports";
import SummaryReport from "@/components/SummaryReport";
import TransactionReport from "@/components/TransactionReport";
import { reportsRoutes } from "@/features/reports/routes";
import DashboardLayout from "@/layout/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import LaneStatus from "@/pages/LaneStatus";
import ReportsDownloads from "@/pages/ReportsDownloads";
import TransactionValidation from "@/pages/TransactionValidation";
import VRNValidation from "@/pages/VRNValidation";
import { createBrowserRouter } from "react-router-dom";

export const router  = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout/>,
        children: [
            {index: true, element: <Dashboard/>},
            {path: "lanes", element: <LaneStatus/>},
            {path: "transactions", element: <TransactionValidation/>},
            {path: "auditor", element: <Auditor/>},
            {path: "validation", element: <VRNValidation/>},


             reportsRoutes,  
        ]
    }
]) 