import React from "react";
import Nav from "components/layout/nav";
import { Layout } from "antd";
import Sidebar from "./sidebar";

const { Header, Content } = Layout;

function PrimaryLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="fixed w-full z-10 bg-white shadow-md flex items-center">
        <Nav />
      </Header>
      <Layout style={{ marginTop: 64 }}>
        <Sidebar />
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
            }}
          >
            <div style={{ padding: 24, minHeight: "100vh" }}>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default PrimaryLayout;
