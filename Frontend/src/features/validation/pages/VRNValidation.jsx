import AgGridTable from "@/components/common/AgGridTable";
import Button from "@/components/ui/Button";
import Calender from "@/components/ui/Calender";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import React from "react";

const VRNvalidation = () => {
  let Filters = ["Pending", "Hold", "Accept"];
  let lanes = ["Lane01", "Lane02", "Lane03", "Lane04", "Lane05 "];

    const dataOfRow = [
    { id: 1, name: "Om", email: "om@gmail.com" },
    { id: 2, name: "Rahul", email: "rahul@gmail.com" },
    { id: 3, name: "Aman", email: "aman@gmail.com" },
    ]
  return (
    <div className="m-8 ">
      <h1 className="text-2xl font-bold">VRN Transaction Validation</h1>

      {/*Filter Table */}
      <div className="border rounded-lg grid md:grid-cols-3 text-theme gap-4 justify-between px-4 py-4 mt-4">
        <div className="">
          <Calender label={"From Date:"} />
          <Calender label={"To Date:"} />
        </div>
        <div className="">
          <Input
            label={"Plate No: "}
            size={"sm"}
            color={"primary"}
            placeholder={"Enter Vechile Plate No."}
          />{" "}
          <Dropdown children={"Lane ID:"} optionList={lanes} />
        </div>
        <div>
          <Dropdown children={"Search Filter: "} optionList={Filters} />
        </div>

        <div className="">
        </div>
          <Button icon={'search'} children={"Search Transaction"} color="success" />
      </div>

      {/*Table */}
      <div className="border-2">
      <AgGridTable rowData={dataOfRow} />

      </div>
    </div>
  );
};

export default VRNvalidation;
