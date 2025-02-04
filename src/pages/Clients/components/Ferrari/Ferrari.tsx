import { FerrariPage, FerrariTitle, AboutFerrari, LogoImg } from "./styles";

function FerrariCompany() {
  return (
    <FerrariPage>
      <LogoImg src="https://upload.wikimedia.org/wikipedia/sco/d/d1/Ferrari-Logo.svg"/>
      <FerrariTitle>Ferrari</FerrariTitle>
      <AboutFerrari>
        Ferrari is an Italian company producing sports and racing cars,
        based in Maranello. Founded in 1939 by Enzo Ferrari, began producing
        sports cars in 1947. Since 1969 it has been part of the FIAT concern,
        since 2016 it has been an independent company registered in the
        Netherlands.
      </AboutFerrari>
    </FerrariPage>
  );
}

export default FerrariCompany;
