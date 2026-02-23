import Button from '@/components/ui/Button'
import Calender from '@/components/ui/Calender'
import Dropdown from '@/components/ui/Dropdown'
import Input from '@/components/ui/Input'
import { Search } from 'lucide-react'
import React from 'react'

const VRNvalidation = () => {
  let Filters =['Pending', 'Hold', 'Accept']
  let lanes=['Lane01', 'Lane02', 'Lane03', 'Lane04', 'Lane05 ']
  return (
    <div>
      <h1>VRN Validation</h1>
      <div className='border-2 grid grid-cols-6 text-theme items-center justify-center px-4 py-4 mt-4'>
         <Calender label={'From Date:'}/>
         <Calender label={'To Date:'}/>
         <Input
         label={'Plate No: '}
         size={'sm'}
         color={'primary'}
         placeholder={'Enter Vechile Plate No.'}
         /> 
         <Dropdown
         children={'Lane ID:'}
         optionList={lanes}
         />
         <Dropdown
         children={'Search Filter: '}
         optionList={Filters}
         />
         <Button
         
         icon={Search}
         children={'Search Transaction'}
         />
      </div>
    </div>
  )
}

export default VRNvalidation
