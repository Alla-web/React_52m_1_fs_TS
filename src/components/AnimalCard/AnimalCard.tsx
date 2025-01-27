import { AnimalCardStyled, ImageStyled } from "./styles";
import { AnimalCardProps } from "./types";

//children - зарезервированное имя Props
function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalCardProps) {
  return (
    <AnimalCardStyled>
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <ImageStyled src={animalImg} alt="Animal" />
      {/* prop children позволяет добавлять дополнительную структуру (jsx, компоненты в компонент) */}
      {children}
    </AnimalCardStyled>
  );
}

export default AnimalCard;
