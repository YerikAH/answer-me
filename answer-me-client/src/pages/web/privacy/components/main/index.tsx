import { HeaderSection } from "@/components/web";
import { ContainerSection } from "../container-section";

export const Main = () => {
  return (
    <main>
      <HeaderSection
        image="https://images.pexels.com/photos/8112159/pexels-photo-8112159.jpeg"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacinia libero a commodo porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur pretium eros vehicula consectetur fringilla."
        title="Política de privacidad"
      />
      <ContainerSection />
    </main>
  );
};
