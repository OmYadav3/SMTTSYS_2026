
import Button from "@/components/ui/Button";
import Calender from "@/components/ui/Calender";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import React, { useState } from "react";
import Table from "../components/Table";

const VRNvalidation = () => {
  const [tableOpen, setTableOpen] = useState(false);
  let Filters = ["Pending", "Hold", "Accept"];
  let lanes = ["Lane01", "Lane02", "Lane03", "Lane04", "Lane05 "];

  const TABLEHEARDER = [
    { id: 1, name: "TXN ID" },
    { id: 2, name: "LANE ID" },
    { id: 3, name: "VECHILE NO" },
    { id: 4, name: "TAG" },
    { id: 5, name: "PASSING TIME" },
    { id: 6, name: "PAYMENT TYPE" },
    { id: 7, name: "PAYMENT SUBTYPE" },
    { id: 8, name: "IMAGE" },
    { id: 9, name: "AGENCY APPROVED" },
    { id: 10, name: "SYSTEM INTEGRATOR APPROVED" },
    { id: 11, name: "ACTION" },
  ];

  const tableHandler = () => {
    setTableOpen(true);
  };

  return (
    <div className="m-8  ">
      <h1 className="text-2xl font-bold">VRN Transaction Validation</h1>

      {/*Filter Table */}
      <div className="border mt-10 rounded-lg grid md:grid-cols-3 text-theme gap-4 justify-between px-4 py-6">
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

        <div className=""></div>
        <Button
          icon={"search"}
          children={"Search Transaction"}
          color="success"
          onClick={tableHandler}
        />
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

export default VRNvalidation;
