import React from 'react';
import { Container, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function BreadCrumb() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem active>Dashboard</BreadcrumbItem>
      </Breadcrumb>
    </Container>
  );
}

export default BreadCrumb;
