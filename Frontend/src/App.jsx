import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LaneStatus from "./pages/LaneStatus";
import TransactionValidation from "./pages/TransactionValidation";
import Auditor from "./pages/Auditor";
import VRNValidation from "./pages/VRNValidation";
import ReportsDownloads from "./pages/ReportsDownloads";
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
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
