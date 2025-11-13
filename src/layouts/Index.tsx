import { Outlet } from "react-router";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

export const Index = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
