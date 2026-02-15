import React from 'react'
import Input from './Input'
import Button from './Button'


const DateAndTime = ({label}) => {
  return (
    <div className="">
        <Input 
        label={label}
        type="" 
        size="sm" 
        color="primary" 
        placeholder="Select Date and Time" 
        className="w-full" 
        // onClick={}
        />

        <div className=' border border-gray-500 rounded p-2'>
            {/* Date and Time Picker Inputs */}
            <div className='flex items-center border-b border-gray-500 w-full py-2 gap-2'>
                <input 
                type="text"
                placeholder='Select Date' 
                className="text-sm p-2 w-full focus:ring-blue-500 focus:border-blue-500 outline-none rounded border border-gray-600"/>
                <input 
                type="text"
                placeholder='Select Time' 
                className="text-sm p-2 w-full focus:ring-blue-500 focus:border-blue-500 outline-none rounded border border-gray-600"/>
            </div>

            <div className='flex items-center justify-start gap-2 mt-2 text-sm text-gray-400  border-b border-gray-500'>
                Calander
            </div>
            <div className="flex justify-end gap-2 mt-2">
                {/* Action Buttons */}
                <Button size="sm" color="primary" className="ml-2">Now</Button>
                <Button size="sm" color="primary" className="ml-2">OK</Button>
                
            </div>
        </div>
    </div>
  )
}

export default DateAndTime