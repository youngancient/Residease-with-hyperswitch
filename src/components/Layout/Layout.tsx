import { FunctionComponent, ReactNode, useEffect } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { DashboardNav } from "../Header/DashboardNav";
import { useRouter } from "next/router";
import { LayoutStyle } from "@/styles/ComponentStyles/Layout";
import { dataSelector } from "@/redux/dataSlice";

export interface ILayout {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  const { isNavOpen } = useAppSelector(dataSelector);
  const router = useRouter();
  const { user } = useAppSelector(userSelector);

  return (
    <LayoutStyle $isNavOpen={isNavOpen}>
      {user === null ? <Header /> : <DashboardNav />}
      <main>{children}</main>
      {user === null &&
        router.pathname !== "/auth" &&
        router.pathname !== "/auth/signup" && <Footer />}
    </LayoutStyle>
  );
};

export default Layout;
