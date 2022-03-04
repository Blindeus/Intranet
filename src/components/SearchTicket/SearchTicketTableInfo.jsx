import React from "react";
import "./SearchTicketTable.scss";
import moment from "moment";
import "moment/locale/es";


const SearchTicketTableInfo = ({ data }) => {
  const { folios } = data || [];
  const {
    Fecha_emitida = "",
    CodVendedor = "",
    DesBode = "",
    TiPago = "",
    Nombre_Vendedor = "",
  } = folios?.length > 0 ? folios[0] : {};
  return (
    <table className="table-info-searchticket">
      <tbody>
        <tr>
          <th className="table-info-th">Fecha Emisión</th>
          <td className="table-info-td">
            {moment(Fecha_emitida).format("DD-MM-YYYY")}
          </td>
        </tr>
        <tr>
          <th className="table-info-th">Vendedor</th>
          <td className="table-info-td">
            {CodVendedor} {Nombre_Vendedor}
          </td>
        </tr>
        <tr>
          <th className="table-info-th">Tienda</th>
          <td className="table-info-td">{DesBode}</td>
        </tr>
        <tr>
          <th className="table-info-th">Forma de Pago</th>
          <td className="table-info-td">{TiPago}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default SearchTicketTableInfo;
