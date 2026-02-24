import { data } from '@/utils/transaciondata'

export default function Table() {
  // const[data, setData] =useState()

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
        {data ? (
          data.map((row) => (
            <tr key={row.id} className="hover:text-white">
              <td className="p-5 border rounded-xl font-bold text-lg">{row.txnId}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.laneId}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.vehicleNo}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.tag}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.passingTime}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.paymentType}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.paymentSubType}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.image}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.agencyApproved}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">{row.systemApproved}</td>
              <td className="p-5 border rounded-xl font-bold text-lg">Take Action</td>
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
