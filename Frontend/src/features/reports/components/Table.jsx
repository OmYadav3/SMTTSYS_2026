import React from "react";
import { useSelector } from "react-redux";

export default function Table() {
  const reportsData = useSelector((state) => state.reports.allReports);
  console.log(reportsData);

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

  return (
    <table className="w-full bg-theme text-theme border rounded-xl">
      <thead className="rounded-xl">
        <tr className="rounded-xl">
          {TABLEHEARDER?.map((items) => {
            return (
              <th
                key={items.id}
                className="border-r border-b p-5 text-white bg-blue-400/60  "
              >
                {items.name}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {reportsData ? (
          reportsData.map((row) => (
            <tr key={row.id} className="hover:text-white">
              <td className="p-3 text-center">{row.PLAZA_CODE}</td>
              <td className="p-3 text-center">{row.plazaName}</td>
              <td className="p-3 text-center">{row.image}</td>
              <td className="p-3 tracking-wider text-center">
                {row.CCH_TRANS_ID}
              </td>
              <td className="p-3 tracking-wider text-center">
                {row.LANE_TRANS_ID}
              </td>
              <td className="p-3 tracking-wider text-center">{row.TAG}</td>
              <td className="p-3 text-center">{row.VEH_PLATE}</td>
              <td className="p-3 text-center">{row.isAnpr}</td>
              <td className="p-3 text-center">{row.anprPlate}</td>
              <td className="p-3 text-center">{row.LANE_ID}</td>
              <td className="p-3 text-center">{row.LANE_TYPE}</td>
              <td className="p-3 text-center">{row.DIRECTION}</td>
              <td className="p-3 text-center">{row.VEH_CLASS}</td>
              <td className="p-3 text-center">{row.AVC_CLASS}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td
              className="bg-theme text-theme p-10 text-3xl font-bold "
              colSpan={TABLEHEARDER.length}
            >
              Data Not Found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
