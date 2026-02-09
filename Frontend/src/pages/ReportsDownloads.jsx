import TransactionReport from '@/components/TransactionReport';
import React from 'react'
import { NavLink } from "react-router-dom";

const ReportsDownloads = () => {
  return (
    <div className='border bg-gray-900 h-screen p-8'>

      <div>
        <h1 className='text-2xl font-bold p-4 border-b border-gray-500'>Reports & Downloads</h1>
      </div>

      {/* Sub Navigation */}
     <div className='flex items-center gap-4 font-bold text-lg p-4 border-b border-gray-500'>
        <NavLink
        to="/transactions-reports" 
        end="/transactions-reports" 
        className={({ isActive }) => `hover:underline ${isActive ? "text-gray-400" : "" }`}
        >
        Transaction Reports
        </NavLink>
        <NavLink 
        to="/summary-reports"
        end="/summary-reports"
        className='hover:text-blue-500'
        >
        Summary Reports
        </NavLink>
        <NavLink 
        to="/downloads-reports"
        end="/downloads-reports"
        className='hover:text-blue-500'
        >
        Downloads Reports</NavLink>
     </div>

      {/* Content And Filters*/}
      
    <div>
      <TransactionReport/>
    </div>

    </div>
  )
}

export default ReportsDownloads
