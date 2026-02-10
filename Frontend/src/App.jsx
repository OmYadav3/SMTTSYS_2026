import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LaneStatus from "./pages/LaneStatus";
import TransactionValidation from "./pages/TransactionValidation";
import Auditor from "./pages/Auditor";
import VRNValidation from "./pages/VRNValidation";
import ReportsDownloads from "./pages/ReportsDownloads";
import transactionsFilteredReports from "./pages/transactions-reports";
import summaryFilteredReports from "./pages/summary-reports";
import downloadsFilteredReports from "./pages/downloads-reports";
import Layout from "./layout/Layout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "lanes",
        element: <LaneStatus />,
      },
      {
        path: "transactions",
        element: <TransactionValidation />,
      },
      {
        path: "auditor",
        element: <Auditor />,
      },
      {
        path: "validation",
        element: <VRNValidation />,
      },
      {
        path: "/transaction-reports",
        element: <ReportsDownloads />,
      },
      {
        path: "/transactions-filtered-reports",
        element: <transactionsFilteredReports/>,
      },
      {
        path: "/summary-filtered-reports",
        element: <summaryFilteredReports />,
      },
      {
        path: "/downloads-filtered-reports",
        element: <downloadsFilteredReports />,
      },
      {
        path: "/transaction-reports",
        element: <ReportsDownloads />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
