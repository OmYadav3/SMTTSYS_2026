import ReportsDownloads from "../reports/pages/ReportsDownloads";
import TransactionReport from "../reports/pages/TransactionReports";
import SummaryReport from "../reports/pages/SummaryReports";
import DownloadsReport from "../reports/pages/DownloadReports";

export const reportsRoutes = {
    path: "reports",
    element: <ReportsDownloads/>,
    children: [
        {index: true, element: <TransactionReport/>},
        {path: "summary", element: <SummaryReport/>},
        {path: "downloads", element: <DownloadsReport/>},
    ]
}