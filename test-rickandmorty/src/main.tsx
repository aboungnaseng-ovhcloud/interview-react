import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/home";

import ImgLogo from "./../public/logo.png";

const { Header, Content } = Layout;

const queryClient = new QueryClient();

const headerStyle: React.CSSProperties = {
  backgroundColor: "#1e2837",
  height: "80px",
  padding: 0,
  paddingBlock: 0,
  margin: 0,
};

const contentStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "1rem 1rem",
};

const imgLogoStyle: React.CSSProperties = {
  width: "200px",
  height: "80px",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Header style={headerStyle}>
          <div style={{ textAlign: "center" }}>
            <img style={imgLogoStyle} src={ImgLogo} alt="rick and morty" />
          </div>
        </Header>
        <Content style={contentStyle}>
          <RouterProvider router={router} />
        </Content>
      </Layout>
    </QueryClientProvider>
  </React.StrictMode>
);
