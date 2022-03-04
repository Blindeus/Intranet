import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import React, { useEffect, useState } from "react";
import SearchTicketModal from "./SearchTicketModal";
import SearchTicketTableTotal from "./SearchTicketTableTotal";
import SearchTicketTableInfo from "./SearchTicketTableInfo";
import SearchTicketTableDescription from "./SearchTicketTableDescription";
import "./SearchTicket.scss";

const SearchTicket = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [openTicketModal, setOpenTicketModal] = useState(false);
  const [data, setData] = useState({});
  const [isDataFetched, setIsDataFetched] = useState(true);

  const openModalTicket = () => {
    setOpenTicketModal(!openTicketModal);
  };

  const fetchFolio = (folio) => {
    fetch("http://localhost:4000/ticket/searchfolio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ folio }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
    openModalTicket();
    if (!data) {
      // TDOO: mostrar mensjae que no encontro folio
    }
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
                    <SearchTicketModal
                      key={"modal-" + openTicketModal}
                      openModalTicket={openModalTicket}
                      openTicketModal={openTicketModal}
                      fetchFolio={fetchFolio}
                    />
                    <Button
                      color="primary"
                      onClick={() => {
                        openModalTicket();
                      }}
                    >
                      Buscar Boleta <i className="fas fa-search"></i>
                    </Button>
                  </FormGroup>
                </Col>
              </Row>
              {isDataFetched ? (
                <TabContent
                  activeTab={activeTab}
                  className="p-3 text-muted"
                  style={{ borderTop: "1px solid black", marginTop: "20px" }}
                >
                  <TabPane tabId="1">
                    <div className="search-ticket-container-main">
                      <div className="search-ticket-table-info">
                        <SearchTicketTableInfo
                          key={"table-info-" + isDataFetched}
                          data={data}
                        />
                      </div>
                      <div className="search-ticket-table-description">
                        <SearchTicketTableDescription
                          key={"table-description-" + isDataFetched}
                          data={data}
                        />
                      </div>
                      <div className="search-ticket-table-total">
                        <SearchTicketTableTotal
                          key={"table-total-" + isDataFetched}
                          data={data}
                        />
                      </div>
                    </div>
                  </TabPane>
                </TabContent>
              ) : (
                <div>
                  <h2>Cargando...</h2>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </div>
    </>
  );
};
export default SearchTicket;
