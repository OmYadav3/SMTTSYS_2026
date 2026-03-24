import React from 'react'
import PaymentTable from './PaymentTable'
import LaneTable from './LaneTable'
import HLPWTable from './HLPWTable'
import HourlyTable from './HourlyTable'

const Table = () => {
  return (
    <div>

        <PaymentTable/>

        <div className='flex gap-4 items-center justify-center'>
            <HourlyTable/>
            <LaneTable/>
        </div>
        
        <HLPWTable/>
    </div>
  )
}

export default Table