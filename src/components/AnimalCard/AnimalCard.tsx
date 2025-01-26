import "./styles.css";
import { AnimalProps } from "./types";

//children - зарезервированное имя Props
function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalProps) {
  return (
    <div className="animalCard-container">
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <img src={animalImg} alt="Animal" className="animal-img" />
      {/* prop children позволяет добавлять дополнительную структуру (jsx, компоненты в компонент) */}
      {children}
    </div>
  );
}

export default AnimalCard;
