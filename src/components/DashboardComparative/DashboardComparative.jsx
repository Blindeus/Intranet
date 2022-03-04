import React, { useState, useEffect } from "react";
import TableComparativeSale from "./TableComparativeSale";
import "./DashboardComparative.scss";
import {
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import { useForm } from "../../hooks/useForm";

import moment from "moment";
import "moment/locale/es";
import { ExportToExcel } from "../../helpers/ExportToExcel";

moment.locale("es");

const DashboardComparative = () => {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [values, onChange] = useForm({
    filtroFecha: moment(new Date()).format("YYYY-MM-DD"),
  });

  const [tienda, setTienda] = useState("todos");

  const { filtroFecha } = values;

  useEffect(() => {
    filtroTienda();
  }, [tienda]);

  useEffect(() => {
    datosTabla(filtroFecha);
  }, [filtroFecha]);

  useEffect(() => {
    setDataFiltered(data);
  }, [data]);

  const buscador = (text) => {
    const textToLower = text.toLowerCase();
    if (textToLower.length > 0) {
      const array = dataFiltered.filter((d) => {
        return (
          d.DesBode.toLowerCase().indexOf(textToLower) !== -1 ||
          d.CodBode.toLowerCase().indexOf(textToLower) !== -1
        );
      });
      setDataFiltered(array);
    } else {
      setDataFiltered(data);
    }
  };


  const filtroTienda = () => {
    if (tienda === "todas") {
      setDataFiltered(data);
    } else {
      const array = data.filter((d) => d.Tienda === tienda);
      setDataFiltered(array);
    }
  };

  const datosTabla = async (filtroFecha) => {
    const response = await fetch("http://localhost:4000/sale/table", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fecha: filtroFecha }),
    });
    const data = await response.json();
    setData(data.recordset);
    console.log(data.recordset)
  };

  return (
    <>
      <div>
        <Col lg={12}>
          <Card>
            <CardBody>
              <Row>
                <Col lg={3} md={6}>
                  <FormGroup>
                    <Label for="buscador">Buscador</Label>
                    <Input
                      type="text"
                      defaultValue=""
                      name="buscador"
                      placeholder="Buscador"
                      onChange={(e) => buscador(e.target.value)}
                    />
                  </FormGroup>
                </Col>

                <Col lg={3} md={6}>
                  <FormGroup>
                    <Label for="filtroFecha">Fecha</Label>
                    <Input
                      type="date"
                      name="filtroFecha"
                      id="filtroFecha"
                      onChange={onChange}
                      value={filtroFecha}
                    />
                  </FormGroup>
                </Col>
                <Col lg={3} md={6}>
                  <FormGroup>
                    <Label for="selectTienda">Tiendas</Label>
                    <Input
                      type="select"
                      name="selectTienda"
                      id="selectTienda"
                      onChange={(e) => setTienda(e.target.value)}
                    >
                      <option value="todas">Todas</option>
                      <option value="SEI">Sei</option>
                      <option value="BEAUTY">Beauty</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row style={{ marginBottom: "20px" }}>
                <Col lg={6}></Col>
                <FormGroup>
                  <ExportToExcel
                    apiData={dataFiltered}
                    fileName={"comparativa_diaria_comcait"}
                  />
                </FormGroup>
              </Row>

              <TabContent
                activeTab={activeTab}
                className="p-3 text-muted"
                style={{ borderTop: "1px solid black", marginTop: "20px" }}
              >
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <TableComparativeSale
                        data={dataFiltered}
                        fecha={filtroFecha}
                      />
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
};
export default DashboardComparative;
