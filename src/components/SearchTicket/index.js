import React from 'react';
import { Card, CardBody, Container } from 'reactstrap';
import SearchTicket from './SearchTicket';

const Dashboard = () => {
  return (
    <>
      <div className="page-content">
        <Container>
          <Card>
            <CardBody>
              <SearchTicket/>
            </CardBody>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
