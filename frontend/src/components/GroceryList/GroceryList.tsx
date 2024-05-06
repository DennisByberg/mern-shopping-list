import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { ISearchResultItem } from "../../interfaces/interfaces";

interface IGroceryListProps {
  searchResultItems: ISearchResultItem[];
}

const GroceryList = ({ searchResultItems }: IGroceryListProps) => {
  console.log("GroceryListLog:", searchResultItems);
  return (
    <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
      {searchResultItems.map((item) => {
        return (
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <FavoriteBorderIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={item.image}
                  src={`https://img.spoonacular.com/ingredients_100x100/${item.image}`}
                />
              </ListItemAvatar>
              <ListItemText id={item.name} primary={item.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GroceryList;
