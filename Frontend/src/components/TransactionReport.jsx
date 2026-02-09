import React from 'react'

const TransactionReport = () => {
  return (
    <div className='mt-4 border p-4 rounded bg-gray-800 text-gray-200'>
        <div>
            {/* Reproting type */}
            <div className='flex items-center gap-4 p-4 font-bold text-lg border-b border-gray-500'>
                <div className='flex items-center gap-2 justify-center px-2 py-2'>
                    <label htmlFor="" className='mr-16'>Report Type: </label>
                    <select name="reports" id="report" className='p-2 px-4 bg-gray-800 text-gray-200 text-lg rounded border-2'>
                        <option value="transaction">Toll Transaction Details Report</option>
                        <option value="">ETC Bank Transaction Report</option>
                        <option value="transaction">UPI Transaction Report</option>
                        <option value="transaction">TC-ANPR Performance Report</option>
                        <option value="transaction">Transaction Performance Report</option>
                        <option value="transaction">AVC Class Accuracy Report</option>
                        <option value="transaction">AVC Lanewise Accuracy Report</option>
                        <option value="transaction">Exemption Details Report</option>
                    </select>
                </div>
                <div className=' flex items-center gap-2 p-2 justify-center px-2 py-2  '>
                    <label htmlFor="" className='mr-16'>From Date: </label>
                    <input type="date" className='border-2 p-2 bg-gray-800 text-gray-200 text-lg rounded'/>
                </div>
                <div className=' flex items-center gap-2 p-2 justify-center px-2 py-2 '>
                    <label htmlFor="" className='mr-16'>To Date: </label>
                    <input type="date" className=' p-4 bg-gray-800 text-gray-200 text-lg rounded'/>
                </div>
                
            </div>

            {/* Filtering Table */}
            <div className='mt-4 grid grid-cols-4 gap-4 p-4 font-bold text-lg border-b border-gray-500'>
                <div className='flex items-center gap-2 justify-around px-2 py-2'>
                    <label htmlFor="">CCH Txn ID</label>
                    <input type="text" className='border-2 p-2 bg-gray-800 text-gray-200 text-lg rounded'/>
                </div>
                <div className='flex items-center gap-2 justify-around px-2 py-2'>
                    <label htmlFor="">Vehicle Class: </label>
                     <select name="reports" id="report" className='p-2 px-4 bg-gray-800 text-gray-200 text-lg rounded border-2'>
                        <option value="Vehicle">ALL</option>
                        <option value="Vehicle">1-CAR/JEEP/VAN</option>
                        <option value="Vehicle">2-LCV/MINIBUS</option>
                        <option value="Vehicle">3-BUS2AXLES</option>
                        <option value="Vehicle">4-TRUCK2ALXES</option>
                        <option value="Vehicle">5-MAV3AXLES</option>
                        <option value="Vehicle">6-MAV4to6AXLES</option>
                        <option value="Vehicle">7-Oversized Vehicle</option>
                    </select>
                </div>
                <div className='flex items-center gap-2 justify-around px-2 py-2'>
                    <label htmlFor="">Lane ID</label>
                    <select name="reports" id="report" className=' p-2 px-4 bg-gray-800 text-gray-200 text-lg rounded border-2'>
                        <option value="lanes">ALL</option>
                        <option value="lanes">lane1</option>
                        <option value="lanes">lane2</option>
                        <option value="lanes">lane3</option>
                        <option value="lanes">lane4</option>
                        <option value="lanes">lane5</option>
                        <option value="lanes">lane6</option>
                        <option value="lanes">lane7</option>
                        <option value="lanes">lane8</option>
                        <option value="lanes">lane9</option>
                        <option value="lanes">lane10</option>
                        <option value="lanes">lane11</option>
                        <option value="lanes">lane12</option>
                        <option value="lanes">lane13</option>
                        <option value="lanes">lane14</option>
                        <option value="lanes">lane15</option>
                        <option value="lanes">lane16</option>
                        <option value="lanes">lane17</option>
                        <option value="lanes">lane18</option>
                        <option value="lanes">lane19</option>
                        <option value="lanes">lane20</option>
                        <option value="lanes">lane21</option>
                        <option value="lanes">lane22</option>
                        <option value="lanes">lane23</option>
                    </select>
                </div>
                <div className='flex items-center gap-2 justify-around px-2 py-2'>
                    <label htmlFor="">CCH Txn ID</label>
                    <input type="text" className='border-2 p-2 bg-gray-800 text-gray-200 text-lg rounded'/>
                </div>
                <div className='flex items-center gap-2 justify-around px-2 py-2'>
                    <label htmlFor="">CCH Txn ID</label>
                    <input type="text" className='border-2 p-2 bg-gray-800 text-gray-200 text-lg rounded'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default TransactionReport