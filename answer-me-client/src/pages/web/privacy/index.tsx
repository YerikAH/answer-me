import { Banner, Footer, Header } from "@/components/web";
import { Main } from "./components/main";
import { useEffect } from "react";
import { useTitle } from "@/hooks";

export default function Privacy() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Privacidad -  Arxatec");
  }, []);
  return (
    <>
      <Banner />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
