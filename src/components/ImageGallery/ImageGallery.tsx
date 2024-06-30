import css from "./ImageGallery.module.css"
import ImageCard from "../ImageCard/ImageCard"
import { Image } from "../App/App.types"

interface GalleryProps {
    images: Image[];
    onClick: (urls:string, description:string) => void
}

export default function ImageGallery({ images, onClick }: GalleryProps) {
    return (
     <ul className={css.galleryList}>
            {images.map(image => (
                <li key={image.id} className={css.galleryItem} >
                    <ImageCard card={image} onClick={onClick} />
                </li>))}
            
     </ul>
 )
}