import Dropdown from '@/components/ui/Dropdown'
import Input from '@/components/ui/Input'
import {INPUT_FIELD } from '@/utils/constant'
import React from 'react'

const allOptionList = {
  optionListsOfClass: [
      { value: "1-CAR/JEEP/VAN", label: "1-CAR/JEEP/VAN" },
      { value: "2-LCV/MINIBUS", label: "2-LCV/MINIBUS" },
      { value: "3-BUS2AXLES", label: "3-BUS2AXLES" },
      { value: "4-TRUCK2AXLES", label: "4-TRUCK2AXLES" },
      { value: "5-MAV3AXLES", label: "5-MAV3AXLES" },
      { value: "6-MAV4to6AXLES", label: "6-MAV4to6AXLES" },
      { value: "7-Oversized Vehicle", label: "7-Oversized Vehicle" },
    ],
    optionListsOfLaneType: [
      {value: 'EN', label: 'EN'},
      {value: 'EX', label: 'EX'},
    ]
} 


const ETCReportForm = ({filters, handleInputChange}) => {
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
          <Dropdown 
            children="Vehicle Class"
            size='sm'
            color='primary'
            optionList={allOptionList.optionListsOfClass}/>
          <Dropdown 
            children="Lane Type"
            size='sm'
            color='primary'
            optionList={allOptionList.optionListsOfLaneType}/>
        </div>
  )
}

export default ETCReportForm