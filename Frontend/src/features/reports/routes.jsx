import ReportsDownloads from "@/pages/ReportsDownloads";
import TransactionReport from "@/pages/TransactionReport";
import SummaryReport from "@/pages/SummaryReport";
import DownloadsReport from "@/pages/DownloadsReport";

export const reportsRoutes = {
    path: "reports",
    element: <ReportsDownloads/>,
    children: [
        {index: true, element: <TransactionReport/>},
        {path: "summary", element: <SummaryReport/>},
        {path: "downloads", element: <DownloadsReport/>},
    ]
}