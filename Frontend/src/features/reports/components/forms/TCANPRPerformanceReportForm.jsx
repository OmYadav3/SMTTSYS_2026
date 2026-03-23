import Dropdown from '@/components/ui/Dropdown'
import { DROPDOWN_FIELD } from '@/utils/constant'
import React from 'react'

const TCANPRPerformanceReportForm = ({ handleInputChange }) => {
  return (
     <div className="mt-4 grid grid-cols-4 gap-2 border-b pb-4 font-bold ">

          {/* DROPDOWN  */}
          {DROPDOWN_FIELD.slice(0,7).map((dropdown, index) => (
            <Dropdown
              key={index}
              children={dropdown.label}
              size={dropdown.size}
              optionList={dropdown.optionList}
              onChange={(value) => handleInputChange(dropdown.name, value)}
            />
          ))}
        </div>
  )
}


export default TCANPRPerformanceReportForm