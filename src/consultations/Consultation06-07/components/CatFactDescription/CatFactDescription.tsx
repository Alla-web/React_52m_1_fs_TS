import {
  CatFactDescriptionContainer,
  CatFactTitle,
  Description,
} from "./styled";
import CatFactData from "../CatFactData/CatFactData";

function CatFactDescription() {
  return (
    <CatFactDescriptionContainer>
      <CatFactTitle>Cat Fact</CatFactTitle>
      <Description>
        This is Cat Fact randomizer app. Just click on the "Get Cat Fact" button
        and receive new cat Fact!!!
      </Description>
      <CatFactData/>
    </CatFactDescriptionContainer>
  );
}

export default CatFactDescription;
