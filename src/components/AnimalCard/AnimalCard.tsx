import { AnimalCardStyled, AnimalNameStyled, AnimalSpeciesStyled, ImageStyled } from "./styles";
import { AnimalCardProps } from "./types";

//children - зарезервированное имя Props
function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalCardProps) {
  return (
    <AnimalCardStyled>
      <AnimalNameStyled>{animalName}</AnimalNameStyled>
      <AnimalSpeciesStyled>{animalSpecies}</AnimalSpeciesStyled>
      <ImageStyled src={animalImg} alt="Animal" />
      {/* prop children позволяет добавлять дополнительную структуру (jsx, компоненты в компонент) */}
      {children}
    </AnimalCardStyled>
  );
}

export default AnimalCard;
