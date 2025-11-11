import { Outlet } from "react-router";

export const HomeLayout = () => {
  return (
    <>
      <header>HomeLayoutHeader</header>
      <Outlet />
      <footer>HomeLayoutFooter</footer>
    </>
  );
};
