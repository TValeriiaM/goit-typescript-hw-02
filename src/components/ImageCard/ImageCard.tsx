import css from "./ImageCard.module.css"
import { Image } from "../App/App.types";

interface ImageCardProps {
    card: Image;
    onClick: (urls: string, description: string) => void;
}

export default function ImageCard({ card, onClick }: ImageCardProps) {
    return (
        <img className={css.img}
        src={card.urls.small}
        alt={card.description}
        onClick={() => onClick(card.urls.regular, card.description)}
        
        />
 )
}