import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { INPUT_FIELD, BUTTON, DROPDOWN_FIELD, OPTIONS_LIST } from "../../../utils/constant"
import Dropdown from "../../../components/ui/Dropdown";
import Calender from "../../../components/ui/Calender";
import Table from "../components/Table";

const TransactionReport = () => {

  const [tableOpen, setTableOpen] = useState(false);


   const TABLEHEARDER = [
    { id: 1, name: "PLAZE CODE" },
    { id: 2, name: "PLAZA NAME" },
    { id: 3, name: "IMAGE" },
    { id: 4, name: "CCH TRANS ID" },
    { id: 5, name: "LANE TRANS ID" },
    { id: 6, name: "TAG" },
    { id: 7, name: "VEH PLATE" },
    { id: 8, name: "IS ANPR" },
    { id: 9, name: "ANPR PLATE" },
    { id: 10, name: "LANE ID" },
    { id: 11, name: "LANE TYPE" },
    { id: 11, name: "DIRECTION" },
    { id: 11, name: "VEH CLASS" },
    { id: 11, name: "AVC CLASS" },
  ];
  // const handleClick = () => {
  //   // Logic to generate the report based on selected filters
  //   alert("Report generated!");
  // };
  
 const tableHandler = () => {
    setTableOpen(true);
  };

  return (
    <div className="mt-4 p-4 rounded border w-full ">
      <div>
        {/* Reproting type */}
        <div className="grid grid-cols-4 items-center gap-4 p-2 text border-b border-gray-500">
          <div className="">
            <Dropdown 
            children="Report Type:" 
            optionList={OPTIONS_LIST}
            size={'sm'} />
          </div>
          
          {/* From Date */}
          <Calender label={'From Date:'}/>
          <Calender label={'To Date:'}/>
        </div>

        {/* Filtering Table */}
        <div className="mt-4 grid grid-cols-4 gap-2 border-b pb-4 font-bold ">
          {
            INPUT_FIELD.map((input, index) => (
              <Input
                key={index}
                type={input.type}
                size={input.size}
                color={input.color}
                placeholder={input.placeholder}
                label={input.label}
              />
            ))
          }

         { /* DROPDOWN  */}
         {DROPDOWN_FIELD.map((dropdown, index) => (
            <Dropdown
              key={index}
              children={dropdown.label}
              size={dropdown.size}
              optionList={dropdown.optionList}
              
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 justify-center p-4">
        {BUTTON.slice(0, 3).map((button, index) => (
          <Button
            key={index}
            to={button.to}
            color={button.color}
            size={button.size}
            children={button.children}
            icon={button.icon}
            onClick={tableHandler}
          />
        ))}
      </div>


        {/*Table */}
            <div className="border-2 rounded-xl mt-8">
              <div>
                {tableOpen === true ? (
                  <Table />
                ) : (
                  <table>
                    <thead className="rounded-xl">
                      <tr className="rounded-xl">
                        {TABLEHEARDER?.map((items) => {
                          return (
                            <th
                              key={items.id}
                              className="border-r border-b p-8 text-white bg-blue-400/60  "
                            >
                              {items.name}
                            </th>
                          );
                        })}
                      </tr>
                    </thead>
                  </table>
                )}
              </div>
            </div>
    </div>
  );
};

export default TransactionReport;
