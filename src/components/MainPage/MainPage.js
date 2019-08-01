import React from "react";
import { Breadcrumb, BreadcrumbItem } from "carbon-components-react";

const MainPage = () => {
  return (
    <Breadcrumb className="some-class" noTrailingSlash={true}>
      <BreadcrumbItem>
        <a href="/#">Breadcrumb 1</a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 3</BreadcrumbItem>
    </Breadcrumb>
  );
};

export default MainPage;
