import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import moment from "moment";
import "moment/locale/es";
import { formatearNumero } from "../../helpers/FormatNumber";
const TableComparativeSale = ({ data = [], fecha, }) => {
  console.log(data)
  const porcentSale = (anterior, actual) => {
    if (anterior === 0) {
      return "Local Cerrado  ";
    } else {
      const valor = Math.trunc(actual - anterior);
      return Math.trunc((valor / anterior) * 100);
    }
  };
 
  return (
    <Table
      id="tabla-comparativa"
      className="table table-striped table-bordered"
    >
      <Thead>
        <Tr>
          <Th style={{ textAlign: "center" }}>Id</Th>
          <Th style={{ textAlign: "center" }}>Tienda</Th>
          <Th style={{ textAlign: "center" }}>Tipo de Tienda</Th>
          <Th style={{ textAlign: "center" }}>{moment(data[0]?.Fecha_Anterior).format("DD-MM-YYYY")}
          </Th>
          <Th style={{ textAlign: "center" }}> {moment(fecha).format("DD-MM-YYYY")}
          </Th>
          <Th style={{ textAlign: "center" }}>% Crecimiento</Th>
          <Th style={{ textAlign: "center" }}>Estado Crecimiento</Th>
          <Th style={{ textAlign: "center" }}>Visitas</Th>
          <Th style={{ textAlign: "center" }}>Boletas</Th>
          <Th style={{ textAlign: "center" }}>Conversion</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((venta, index) => (
          <Tr key={index}>
            <Td style={{ textAlign: "center" }}>{venta.CodBode}</Td>
            <Td style={{ textAlign: "center" }} scope="row">
              {venta.DesBode}
            </Td>
            <Td style={{ textAlign: "center" }}>{venta.Tienda}</Td>
            <Td style={{ textAlign: "center" }}> ${formatearNumero(Math.trunc(venta.venta_anio_anterior))}
            </Td>
            <Td style={{ textAlign: "center" }}>
              ${formatearNumero(Math.trunc(venta.Venta_Total))}
            </Td>
            <Td style={{ textAlign: "center" }}>
              {porcentSale(venta.venta_anio_anterior, venta.Venta_Total) ===
              "Local Cerrado  "
                ? porcentSale(venta.venta_anio_anterior, venta.Venta_Total)
                : `${porcentSale(
                    venta.venta_anio_anterior,
                    venta.Venta_Total
                  )} %`}
            </Td>
            <Td style={{ textAlign: "center" }}>
              {porcentSale(venta.venta_anio_anterior, venta.Venta_Total) > 0 ||
              porcentSale(venta.venta_anio_anterior, venta.Venta_Total) ===
                "Local Cerrado" ? (
                <i className="fas fa-chevron-up" style={{ color: "green" }}></i>
              ) : (
                <i className="fas fa-chevron-down" style={{ color: "red" }}></i>
              )}
            </Td>
            <Td style={{ textAlign: "center" }}>pendiente</Td>
            <Td style={{ textAlign: "center" }}>{venta.Boletas}</Td>
            <Td style={{ textAlign: "center" }}>pendiente</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableComparativeSale;
