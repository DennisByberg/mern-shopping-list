// useSearch.ts
import axios from "axios";
import { useState } from "react";
import { ISearchResultItem } from "../interfaces/interfaces";

export const useSearch = (
  setSearchResultItems: React.Dispatch<React.SetStateAction<ISearchResultItem[]>>
) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleUserSearchInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value === "" && setSearchResultItems([]);

    try {
      setIsLoading(true);
      const resp = await axios.get(
        `https://api.spoonacular.com/food/ingredients/search?query=${e.target.value}&apiKey=${
          import.meta.env.VITE_SPOONACULAR_API_KEY
        }`
      );
      setSearchResultItems(resp.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleUserSearchInputChange, isLoading };
};
