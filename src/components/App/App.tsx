import { useState, useEffect } from 'react'
import { getImage } from '../../imageGaleryAPI';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import toast from 'react-hot-toast';
import css from "./App.module.css"
import ImageModal from '../ImageModal/ImageModal';
import { Image } from './App.types';


export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [queryImg, setQuery] = useState<string>("");
  const [currentPage, setPage] = useState<number>(1);
  const [isLoader, setLoader] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1)
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>("");

  interface Result {
    results: [];
    total_pages: number;
  }

  useEffect(() => {
    if (!queryImg) {
      return
    }
    
    async function fetchImages() {
      try {
        setLoader(true);
        setError(false);

        const { results, total_pages } = await getImage<Result>(queryImg, currentPage);
      
        setImages((prevState) => [...prevState, ...results]);
        
        if (results.length === 0) {
          toast("Sorry! There are no images for your request");
      return;
        }
        setTotalPages(total_pages);
      } catch {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchImages()
  }, [currentPage, queryImg])

    const searchImages = async (word: string) => {
    setImages([]);
    setQuery(word);
    setPage(1);
    setTotalPages(1);
    };
  
   const handleLoadMore = async () => {
    setPage(currentPage + 1);
   };
  
   function openModalImage(imageLink: string) {
     setModalOpen(true);
     setModalImage(imageLink);
  }

   function closeModalImage() {
     setModalOpen(false);
     setModalImage("")
  }


  return (
    <>
      <SearchBar onSubmit={searchImages} />
      {isError && <ErrorMessage />}
      {images.length !== 0 && <ImageGallery images={images} onClick={openModalImage} />}
      {isLoader && <Loader />}
      {images.length !== 0 && !isLoader && currentPage < totalPages && (<LoadMoreBtn onClick={handleLoadMore} />)}
      {currentPage >= totalPages &&  images.length>0 && <p className={css.finishMessage}>This is all images for your request</p>}
      <ImageModal openModal={modalOpen} closeModal={closeModalImage} modalImage={modalImage} />
    </>
  )
}







