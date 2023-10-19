import { AllListingStyles } from "@/styles/ComponentStyles/Dashboard/AllListingStyles";
import { InnerSection } from "@/styles/PageStyles/SectionStyles";
import { FunctionComponent } from "react";
import { HouseListComp } from "../HouseCards/HouseList";
import { useSelector } from "react-redux";
import { dataSelector } from "@/redux/dataSlice";
import { Filter, SearchInput, Sort } from "./Filters";

export const AllListing: FunctionComponent = () => {
  const { allHouses, filterHouses } = useSelector(dataSelector);
  return (
    <InnerSection>
      <AllListingStyles>
        <div className="one-y">
          <h2>All listings</h2>
          <div className="filters">
            <div className="filter-btns">
              <Filter />
              <Sort />
            </div>
            <SearchInput />
          </div>
        </div>
        <HouseListComp houses={filterHouses} />
      </AllListingStyles>
    </InnerSection>
  );
};
