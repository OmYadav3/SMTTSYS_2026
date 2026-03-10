import { reportsRoutes } from "@/features/reports/routes";
import DashboardLayout from "@/layout/DashboardLayout";
import Auditor from "@/features/auditor/Auditor";
import Dashboard from "@/features/dashboard/Dashboard";
import LaneStatus from "@/features/lanes/LaneStatus";
import TransactionValidation from "@/features/transactions/TransactionValidation";
import VRNValidation from "@/features/validation/pages/VRNValidation";
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