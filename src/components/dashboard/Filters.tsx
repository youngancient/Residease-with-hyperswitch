import {
  FilterStyle,
  SearchInputStyle,
} from "@/styles/ComponentStyles/Dashboard/AllListingStyles";
import { CircleX, FilterIcon, SortIcon } from "../Icons/DashboardIcons";
import { SearchIcon } from "../Icons/HeaderIcons";
import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { dataSelector, setFilterHouses, setQuery } from "@/redux/dataSlice";
import { ComingSoonShort } from "../Homepage/ComingSoon";


export const Filter = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <FilterStyle>
      <button type="button" onClick={() => setShowDropdown(!showDropdown)}>
        <p>Filter by</p>
        <FilterIcon />
      </button>
      {showDropdown && (
        <div className="dropdown">
          <ComingSoonShort>Coming soon</ComingSoonShort>
        </div>
      )}
    </FilterStyle>
  );
};

export const Sort = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  return (
    <FilterStyle>
      <button type="button" onClick={() => setShowDropdown(!showDropdown)}>
        <p>Sort by</p>
        <SortIcon />
      </button>
      {showDropdown && (
        <div className="dropdown">
          <ComingSoonShort>Coming soon</ComingSoonShort>
        </div>
      )}
    </FilterStyle>
  );
};

export const SearchInput = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const { allHouses, query } = useAppSelector(dataSelector);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
    setSearch(e.target.value);
    if (allHouses && query !== null && query !== "") {
      const filtered = allHouses.filter((ele) => {
        return ele.name.toLowerCase().includes(query.toLowerCase());
      });
      dispatch(setFilterHouses(filtered));
    }
    if (query == "" || e.target.value == "") {
      const filtered = allHouses;
      dispatch(setFilterHouses(filtered));
    }
  };
  const clearQuery = () => {
    setSearch("");
    dispatch(setQuery(null));
    dispatch(setFilterHouses(allHouses));
  };
  return (
    <SearchInputStyle>
      <label htmlFor="search" className="svg-x">
        <SearchIcon />
      </label>
      <input
        type="text"
        name="search"
        placeholder="search by name"
        id=""
        value={search}
        onChange={handleChange}
      />
      <div className="svg-y">
        <CircleX handleCancel={clearQuery} />
      </div>
    </SearchInputStyle>
  );
};


