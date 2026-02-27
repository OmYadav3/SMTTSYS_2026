import { Tdata } from '@/utils/Validation'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function Table() {
  const[data, setData] =useState()

  const dispatch = useDispatch()


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
        <tr className='rounded-xl'>
          {TABLEHEARDER?.map((items) => {
            return (
              <th key={items.id} className="border-r border-b p-6 text-white bg-blue-400/60  ">
                {items.name}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {Tdata ? (
          Tdata.map((row) => (
            <tr key={row.id} className="hover:text-white">
              <td className="p-5 border rounded-xl font-bold text-lg">{row.plazaCode}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.plazaName}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.image}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.cchTransId}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.laneTransId}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.tag}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.vehPlate}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.isAnpr}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.anprPlate}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.laneId}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.laneType}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.direction}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.vehClass}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.avcClass}</td>
              
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
