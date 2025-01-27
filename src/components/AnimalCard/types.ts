import { ReactNode } from "react";

export type AnimalCardProps = {
    animalName: string,
    animalSpecies: string,
    animalImg: string,
    children?: ReactNode; 
}