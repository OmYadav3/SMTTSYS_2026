import Dropdown from '@/components/ui/Dropdown'
import Input from '@/components/ui/Input'
import React from 'react'

const UPITransactionReportForm = ({filters, handleInputChange }) => {
  return (
     <div className="mt-4 grid grid-cols-4 gap-2 border-b pb-4 font-bold ">
          <Input
            type='text'
            name='plateNumber'
            value={filters.name}
            label={'Plate Number'}
            color='primary'
            size='sm'
            onChange={(e) => handleInputChange(name, e.target.value)}
            placeholder={'Enter the Vehicle number'}
            />

            <Dropdown
              name={'name'}
              size='sm'
              value={filters.name}
              optionList={[{ value: "Approved", label: "APPROVED" },{ value: "Pending", label: "PENDING" }]}
              children={'UPI Status'}
              onChange={(value) => handleInputChange(name, value)}
              />
        </div>
  )
}

export default UPITransactionReportForm



