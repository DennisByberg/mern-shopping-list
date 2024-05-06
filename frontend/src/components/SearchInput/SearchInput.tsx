import { Box, CircularProgress, TextField } from "@mui/material";
import { useSearch } from "../../hooks/useSearch";
import { ISearchResultItem } from "../../interfaces/interfaces";

interface SearchInputProps {
  setSearchResultItems: React.Dispatch<React.SetStateAction<ISearchResultItem[]>>;
}

const SearchInput = ({ setSearchResultItems }: SearchInputProps) => {
  const { handleUserSearchInputChange, isLoading } = useSearch(setSearchResultItems);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        sx={{ width: "100%" }}
        id="standard-basic"
        label="Search grocery item here"
        variant="outlined"
        onChange={handleUserSearchInputChange}
      />
      {isLoading && <CircularProgress sx={{ marginLeft: -6 }} />}
    </Box>
  );
};

export default SearchInput;
