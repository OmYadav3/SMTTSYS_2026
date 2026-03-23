import React from 'react'
import PaymentWiseTransactionTable from './PaymentWiseTransactionTable'
import LaneWiseTransactionTable from './LaneWiseTransactionTable'
import HourlyLanePaymentWiseTransactionTable from './HourlyLanePaymentWiseTransactionTable'
import HourlyWiseTransactionTable from './HourlyWiseTransactionTable'

const Table = () => {
  return (
    <div>

        <PaymentWiseTransactionTable/>

        <div className='flex gap-4 items-center justify-center'>
            <HourlyWiseTransactionTable/>
            <LaneWiseTransactionTable/>
        </div>
        
        <HourlyLanePaymentWiseTransactionTable/>
    </div>
  )
}

export default Table