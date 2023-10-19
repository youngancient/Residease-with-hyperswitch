import { dataSelector } from "@/redux/dataSlice";
import { useAppSelector } from "@/redux/hooks/hook";
import {
  SimilarHousesStyles,
  SlidingListHousesStyles,
} from "@/styles/ComponentStyles/Dashboard/SimilarHousesStyles";
import { InnerSection } from "@/styles/PageStyles/SectionStyles";
import { FunctionComponent } from "react";
import { IHouse } from "../../../types/House";
import { IHouseList } from "../HouseCards/HouseList";
import { HouseCard, SliderHouseCard } from "../HouseCards/HouseCard";

interface ISimilarHouses{
    id : string;
}
export const SimilarHouses:FunctionComponent<ISimilarHouses> = ({id}) => {
  const { allHouses } = useAppSelector(dataSelector);
  const houses = allHouses?.slice(0, 6).filter(ele => ele.id !== id);
  return (
    <>
      {houses && houses !== null && (
        <InnerSection>
          <SimilarHousesStyles>
            <h3>Similar properties <strong>({houses.length})</strong></h3>
            <SlidingListHouses houses={houses} />
          </SimilarHousesStyles>
        </InnerSection>
      )}
    </>
  );
};

export const SlidingListHouses: FunctionComponent<IHouseList> = ({
  houses,
}) => {
  return (
    <SlidingListHousesStyles>
      {houses !== null &&
        houses.map((ele, index) => (
          <SliderHouseCard
            key={index}
            name={ele.name}
            area={ele.area}
            location={ele.location}
            id={ele.id}
            imgSrc={ele.imgSrc}
            bedroomNumber={ele.bedroomNumber}
            type={ele.type}
            link={ele.link}
            price={ele.price}
          />
        ))}
    </SlidingListHousesStyles>
  );
};
