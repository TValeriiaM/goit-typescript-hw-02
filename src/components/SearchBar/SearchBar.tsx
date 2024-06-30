import css from "./SearchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';
import { IoIosSearch } from "react-icons/io";
import { FormEvent } from "react";

interface SubmitProps {
  onSubmit: (keyWord: string) => void;
}


export default function SearchBar({ onSubmit }: SubmitProps) {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const keyWord = form.keyWord.value;

    if (keyWord.trim() === "") {
      toast("Please, enter some text");
      return;
    }

    onSubmit(keyWord);
    form.reset();
  };

  return (
    <header className={css.searchHeader}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button className={css.searchButton} type="submit">
          <IoIosSearch size={18}/>
        </button>
        <input
          className={css.searchInput}
          type="text"
          name="keyWord"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        
        <Toaster 
        position="top-left" 
        toastOptions={
            {
                style: {
                    color: 'darkviolet',
                    backgroundColor: 'lightgray',
                    borderRadius: '8px',
                },
                duration: 2000,
            }
      }
        />
      </form>
    </header>
  );
}