import { BmwPage, BmwTitle, AboutBmw, LogoImg } from "./styles";

function BmwCompany() {
  return (
    <BmwPage>
      <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg"/>
      <BmwTitle>BMW Group</BmwTitle>
      <AboutBmw>
        Die BMW Group ist mit ihren Marken BMW, MINI, Rolls-Royce und BMW
        Motorrad der weltweit führende Premium-Hersteller von Automobilen und
        Motorrädern und Anbieter von Premium-Finanz- und
        Mobilitätsdienstleistungen. Dabei beschäftigt das Unternehmen weltweit
        rund 155.000 Mitarbeiterinnen und Mitarbeiter.
      </AboutBmw>
    </BmwPage>
  );
}

export default BmwCompany;
