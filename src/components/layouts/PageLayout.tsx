import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";
import Header from "./header";
import PhotoSlider from "../locationDetail/PhotoSlider";
type Props = {
  _site: any;
  children?: React.ReactNode;
  global?: any;
  templateData?: React.ReactNode;
};

const PageLayout = ({ _site, children }: Props) => {
  return (
    <>
      {/* <PhotoSlider /> */}
      {children}

    </>
  );
};

export default PageLayout;

