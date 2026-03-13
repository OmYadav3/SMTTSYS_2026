import Dropdown from '@/components/ui/Dropdown'
import Input from '@/components/ui/Input'
import { DROPDOWN_FIELD, INPUT_FIELD } from '@/utils/constant'
import React from 'react'

const AVCClassAccuracyReportForm = ({filters,  handleInputChange }) => {
  return (
     <div className="mt-4 grid grid-cols-4 gap-2 border-b pb-4 font-bold ">
          {INPUT_FIELD.map((input, index) => (
            <Input
              key={index}
              type={input.type}
              size={input.size}
              color={input.color}
              placeholder={input.placeholder}
              label={input.label}
              value={filters[input.name]}
              onChange={(e) => handleInputChange(input.name, e.target.value)}
            />
          ))}

          {/* DROPDOWN  */}
          {DROPDOWN_FIELD.map((dropdown, index) => (
            <Dropdown
              key={index}
              children={dropdown.label}
              size={dropdown.size}
              optionList={dropdown.optionList}
            />
          ))}
        </div>
  )
}

export default AVCClassAccuracyReportForm