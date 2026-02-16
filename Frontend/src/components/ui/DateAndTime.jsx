import React, {useState} from 'react'
import Input from './Input'
import Button from './Button'
import Calender from './Calender'


const DateAndTime = ({label}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const openCalenderHandler = () => {
        setIsOpen(true);
        // Logic to open the date and time picker UI
        console.log("Open Date and Time Picker");
    }
    const closeCalenderHandler = () => {
        setIsOpen(false);
        // Logic to close the date and time picker UI
        console.log("Close Date and Time Picker");
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
        // Logic to handle date change
        console.log("Selected Date:", date);
    }

  return (
    <div className="">
        <Input 
        label={label}
        type="" 
        size="sm" 
        color="primary" 
        placeholder="Select Date and Time" 
        className="w-full" 
        onClick={openCalenderHandler}
        />

        {/* Date and Time Picker UI */}
        {(isOpen === true) ? (
            <div className='z-150 flex flex-col items-center border border-gray-500 rounded p-2 '>
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

            <div className=' mt-2 text-sm text-gray-400 pb-2 border-b border-gray-500'>
               <Calender selectedDate={selectedDate} handleDateChange={handleDateChange} />
            </div>
            <div className="flex items-center justify-end w-full gap-2">
                {/* Action Buttons */}
                <Button 
                size="xs" 
                color="dark" 
                onClick={closeCalenderHandler}
                >
                Now
                </Button>
                <Button 
                size="xs" 
                color="dark" 
                onClick={closeCalenderHandler}
                >
                OK
                </Button>
                
            </div>
        </div> ) : ""}
        
    </div>
  )
}

export default DateAndTime