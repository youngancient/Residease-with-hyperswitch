import {
  HeroStyles,
  ListHousesStyles,
  SearchStyles,
} from "@/styles/ComponentStyles/Herostyles";
import { SearchIcon } from "../Icons/HeaderIcons";
import { WideSearch } from "../Icons/HeroIcons";
import { FunctionComponent } from "react";
import { HouseListComp } from "../HouseCards/HouseList";
import { motion } from "framer-motion";
import {
  h1Variants,
  heroPVariants,
  secH1Variants,
} from "@/animations/homepage";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { dataSelector,setQuery } from "@/redux/dataSlice";
import { ChangeEvent, useState } from "react";



export const Hero = () => {
  return (
    <HeroStyles>
      <div className="h1">
        <div className="head">
          <motion.h1
            variants={h1Variants}
            initial="initial"
            whileInView="final"
          >
            “Experience The Value
          </motion.h1>
          <motion.h1
            variants={secH1Variants}
            initial="initial"
            whileInView="final"
          >
            Of Stress-Free Renting.
          </motion.h1>
        </div>
        <div className="hero-text">
          <motion.p
            variants={heroPVariants}
            initial="initial"
            whileInView="final"
          >
            Say goodbye to endless searching, stressful Processes, and piles of
            paperwork.
          </motion.p>
        </div>
      </div>
      <SearchComponent />
    </HeroStyles>
  );
};

export const SearchComponent = () => {
  // work on search function here
  // this search leads them to the property page
  const [query, setQuery] = useState();;
  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    // handle change
  };
  return (
    <SearchStyles>
      <input
        type="text"
        name="query"
        placeholder="Want to start your search?  Enter an address, neighbourhood, city or ZIP Code"
        id=""
        onChange={handleChange}
      />
      <button type="submit">
        <p>Find Comfort</p>
        <WideSearch />
      </button>
    </SearchStyles>
  );
};

export const ListHouses = () => {
  const { allHouses } = useAppSelector(dataSelector);
  return (
    <ListHousesStyles>
      <div className="one">
        <h2>Your choice, your pick!</h2>
        <p className="desc">
          Yes! you heard right Readiease is a platform that finds the best
          suitable home stress free with a click. We make you smile! Entrust
          your smile to us.
        </p>
      </div>
      {allHouses !== null && <HouseListComp houses={allHouses.slice(0, 6)} />}
    </ListHousesStyles>
  );
};
