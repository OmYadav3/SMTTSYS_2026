import { reportsRoutes } from "@/features/reports/routes";
import DashboardLayout from "@/layout/DashboardLayout";
import Auditor from "@/pages/Auditor";
import Dashboard from "@/pages/Dashboard";
import LaneStatus from "@/pages/LaneStatus";
import TransactionValidation from "@/pages/TransactionValidation";
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