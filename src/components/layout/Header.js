import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Breadcrumb,
} from "antd";
import { NavLink} from "react-router-dom";
function Header({
  name,
}) {
  useEffect(() => window.scrollTo(0, 0));
  function signout () {
    window.location="/sign-up"
  }
  return (
    <>
      {/* <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">Pages</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {name.replace("/", "")}
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row> */}
    </>
  );
}

export default Header;
