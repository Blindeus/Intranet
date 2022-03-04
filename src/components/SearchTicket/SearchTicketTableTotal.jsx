import React from "react";
import "./SearchTicketTable.scss";
import { formatearNumero } from "../../helpers/FormatNumber";
const SearchTicketTableTotal = ({data}) => {
  const { folios } = data || [];
  const {
    SubTotal = "",
    Total_Descuento = "",
    IVA = "",
    Total_Boleta = "",
  } = folios?.length > 0 ? folios[0] : {};
  
  return (
    <table className="table-total-searchticket">
      <tbody>
        <tr>
          <th className="table-total-th">SUBTOTAL</th>
          <td className="table-total-td">${formatearNumero(Math.trunc(SubTotal))}</td>
        </tr>
        <tr>
          <th className="table-total-th">DESCUENTO</th>
          <td className="table-total-td">${formatearNumero(Math.trunc(Total_Descuento))}</td>
        </tr>
        <tr>
          <th className="table-total-th">IVA</th>
          <td className="table-total-td">${formatearNumero(Math.trunc(IVA))}</td>
        </tr>
        <tr>
          <th className="table-total-th">TOTAL</th>
          <td className="table-total-td">${formatearNumero(Math.trunc(Total_Boleta))}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default SearchTicketTableTotal;
