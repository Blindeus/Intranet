import React, { useEffect } from "react";
import { Card, CardBody, Container } from "reactstrap";
import DashboardComparative from "./DashboardComparative";

const Dashboard = () => {
  return (
    <>
      <div className="page-content">
        <Container>
          <Card>
            <CardBody>
              <DashboardComparative />
            </CardBody>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
