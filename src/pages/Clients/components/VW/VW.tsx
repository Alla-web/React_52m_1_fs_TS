import { VwPage, VwTitle, AboutVw, LogoImg } from "./styles";

function VwCompany() {
  return (
    <VwPage>
      <LogoImg src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg"/>
      <VwTitle>Volkswagen Group</VwTitle>
      <AboutVw>
        Die sieben Volkswagen Konzerngrundsätze (Volkswagen Group Essentials)
        sind das Wertefundament des Konzerns und Grundlage unserer gemeinsamen
        Unternehmenskultur.
      </AboutVw>
    </VwPage>
  );
}

export default VwCompany;
