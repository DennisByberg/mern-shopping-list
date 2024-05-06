import { useState } from "react";
import GroceryList from "../components/GroceryList/GroceryList";
import SearchInput from "../components/SearchInput/SearchInput";
import { ISearchResultItem } from "../interfaces/interfaces";

const HomePage = () => {
  const [searchResultItems, setSearchResultItems] = useState<ISearchResultItem[]>([]);
  return (
    <div>
      <SearchInput searchResultItems={searchResultItems} setSearchResultItems={setSearchResultItems} />
      <GroceryList searchResultItems={searchResultItems} />
    </div>
  );
};

export default HomePage;
