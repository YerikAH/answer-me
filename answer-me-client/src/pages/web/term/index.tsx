import { Banner, Footer, Header } from "@/components/web";
import { useTitle } from "@/hooks";
import { useEffect } from "react";
import { Main } from "./components/main";

export default function Term() {
  const { changeTitle } = useTitle();
  useEffect(() => {
    changeTitle("Terminos -  Arxatec");
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
