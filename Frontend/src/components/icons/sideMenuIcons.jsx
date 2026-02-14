import {
  BookmarkCheck,
  FileCheck,
  LayoutDashboard,
  ClipboardList,
  ShieldCheck,
  CircleCheckBig,
} from "lucide-react";

export const sideMenuIcons = [
    {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: '/'
    },
    {
        name: "Lane Status",
        icon: ClipboardList,
        path: '/lanes'
    },
    {
        name: "Transaction Validation",
        icon: ShieldCheck,
        path: '/transactions'
    },
    {
        name: "Auditor",
        icon: CircleCheckBig,
        path: '/auditor'
    },
    {
        name: "VRN Validation",
        icon: BookmarkCheck,
        path: '/validation'
    },
    {
        name: "TMS Reports",
        icon: FileCheck,
        path: '/reports'
    },

]
