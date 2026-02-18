# SYTTSYS_20226

## FRONTEND FOLDER STRUCTURE 

```

src/
│
├── app/                     # app bootstrap
│   ├── router.jsx
│   └── providers.jsx
│
├── layouts/                 # layout shells
│   ├── DashboardLayout.jsx
│   └── AuthLayout.jsx
│
├── pages/                   # route-level pages
│   ├── Dashboard.jsx
│   ├── ReportsDownloads.jsx
│   └── Auditor.jsx
│
├── features/                # business features
│   └── reports/
│       ├── components/
│       │   ├── ReportFilters.jsx
│       │   ├── TransactionReport.jsx
│       │   └── ReportTable.jsx
│       │
│       ├── hooks/
│       │   └── useReportFilters.js
│       │
│       ├── services/
│       │   └── report.api.js
│       │
│       └── constants.js
│
├── components/
│   └── ui/                  # reusable UI primitives
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Dropdown.jsx
│       ├── Calendar.jsx
│       ├── Modal.jsx
│       └── Card.jsx
│
├── hooks/                   # global reusable hooks
│   ├── useTheme.js
│   └── useClickOutside.js
│
├── utils/                   # helpers
│   ├── formatDate.js
│   └── cn.js
│
├── constants/               # global constants
│   ├── routes.js
│   └── config.js
│
├── styles/                  # styling system
│   ├── globals.css
│   ├── themes.css
│   └── tailwind.css
│
├── assets/
│   ├── icons/
│   └── images/
│
└── main.jsx
```