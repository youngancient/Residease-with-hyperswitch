import {
  FavouriteItemStyles,
  FavouriteStyles,
  ListFavouriteStyles,
  NextBtn,
} from "@/styles/ComponentStyles/Dashboard/FavoriteStyles";
import { InnerSection } from "@/styles/PageStyles/SectionStyles";
import Image from "next/image";
import { FunctionComponent } from "react";
import { GreaterThan } from "../Icons/DashboardIcons";

export const Favourite: FunctionComponent = () => {
  return (
    <InnerSection>
      <FavouriteStyles>
        <h3>Your favourites</h3>
        <ListFavourite />
      </FavouriteStyles>
    </InnerSection>
  );
};

export const ListFavourite: FunctionComponent = () => {
  return (
    <ListFavouriteStyles>
      <NextBtn>
        <GreaterThan />
      </NextBtn>
      <div className="scroll">
        <FavouriteItem />
        <FavouriteItem />
        <FavouriteItem />
        <FavouriteItem />
        <FavouriteItem />
        <FavouriteItem />
      </div>
    </ListFavouriteStyles>
  );
};

export const FavouriteItem: FunctionComponent = () => {
  return (
    <FavouriteItemStyles>
      <Image src="/house10.jpeg" alt="fav image" width={40} height={40} />
      <div className="deet">
        <p>Shoreditch Apt</p>
        <span>Added 21 Jan</span>
      </div>
    </FavouriteItemStyles>
  );
};
