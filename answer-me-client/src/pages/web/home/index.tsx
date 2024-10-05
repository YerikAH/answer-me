import { useEffect } from "react";
import { Main } from "./components/main";
import { useTitle } from "@/hooks";
import { Banner, Footer, Header } from "@/components/web";
import { PrivacyNotice } from "@/components/web/privacy-notice";

export default function Home() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Inicio -  Arxatec");
  }, []);
  return (
    <div>
      <Banner />
      <Header />
      <Main />
      <Footer />
      <PrivacyNotice />
    </div>
  );
}
