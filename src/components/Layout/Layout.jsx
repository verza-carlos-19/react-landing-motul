import React from "react";
import { LayoutBox } from "./layoutStyles";

function Layout({ children }) {
  return (
    <>
      <LayoutBox>{children}</LayoutBox>
    </>
  );
}

export default Layout;
