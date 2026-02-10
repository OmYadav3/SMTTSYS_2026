 import Button from '@/components/ui/Button'
import React from 'react'
 
 const TransactionValidation = () => {
   const handleClick = () => {
    // Logic to generate the report based on selected filters
    alert("Report generated!");
  };
   return (
     <>
       <Button
          color={"primary"}
          size={"lg"}
          children={"Search Transactions"}
          onClick={handleClick}
          icon={"search"}
          to="/"
        />
     </>
   )
 }
 
 export default TransactionValidation
 