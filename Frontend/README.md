# SYTTSYS_20226

## FRONTEND FOLDER STRUCTURE 

```
src/
│
├── app/                  ⭐ application core
│   ├── router.jsx
│   ├── App.jsx
│   ├── store.js
│   ├── providers.jsx
│   └── theme.js
│
├── layouts/              ⭐ layout wrappers
│   └── DashboardLayout.jsx
│
├── features/             ⭐ business features (IMPORTANT)
│   ├── dashboard/
│   ├── reports/
│   ├── lanes/
│   ├── transactions/
│   ├── auditor/
│   └── validation/
│
├── components/           ⭐ reusable UI
│   ├── Button.jsx
│   ├── Input.jsx
│   └── Dropdown.jsx
│
├── services/             ⭐ API layer
├── hooks/                ⭐ reusable hooks
├── utils/                ⭐ constants/helpers
├── styles/
└── main.jsx

```