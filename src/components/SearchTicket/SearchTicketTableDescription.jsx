import "./SearchTicketTable.scss";
import React from "react";
import { formatearNumero } from "../../helpers/FormatNumber";
const SearchTicketTableDescription = ({ data: { folios = [] } }) => {
  return (
    <table className="table-description-searchticket">
      <thead>
        <tr className="table-description">
          <th>Codigo</th>
          <th>Detalle</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Descuento por Linea</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        {folios.map((folio, index) => (
          <tr key={index}>
            <td style={{ textAlign: "center" }} >{folio.CODPROD}</td>
            <td style={{ textAlign: "center" }} >{folio.DetProd}</td>
            <td style={{ textAlign: "center" }}>{folio.CantFacturada}</td>
            <td style={{ textAlign: "center" }}>{formatearNumero(Math.trunc(folio.PreUniBoleta))}</td>
            <td style={{ textAlign: "center" }}>${formatearNumero(Math.trunc(folio.Total_Descuento))}</td>
            <td style={{ textAlign: "center" }}>${formatearNumero(Math.trunc(folio.PreUniBoleta))}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default SearchTicketTableDescription;
