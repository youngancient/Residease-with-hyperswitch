import { FunctionComponent } from "react";
import { HouseCard } from "./HouseCard";
import { HouseListCompStyles } from "@/styles/ComponentStyles/HouseCardStyles";
import { IHouse } from "../../../types/House";
import { useAppSelector } from "@/redux/hooks/hook";
import { dataSelector } from "@/redux/dataSlice";
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { formVariants } from "@/animations/dashboard";

export interface IHouseList {
  houses: IHouse[] | null;
}
export const HouseListComp: FunctionComponent<IHouseList> = ({ houses }) => {
  const { query } = useAppSelector(dataSelector);
  return (
    <HouseListCompStyles>
      {houses !== null &&
        houses.map((ele, index) => (
          <HouseCard
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
      {houses?.length == 0 && query && <Empty msg={`No match for '${query}'`} />}
    </HouseListCompStyles>
  );
};

export interface IEmpty {
  msg: string;
}
export const EmptyStyles = styled(motion.div).attrs(()=>({
  variants : formVariants,
  initial : "initial",
  animate : "final",
  exit : "exit"
}))`
  height: 30vh;
  p {
    width: 100%;
    font-size: 1.5rem;
    color: #004286;
    font-weight: 600;
  }
  display: flex;
`;
export const Empty: FunctionComponent<IEmpty> = ({ msg }) => {
  return (
    <EmptyStyles>
      <p> {msg} </p>
    </EmptyStyles>
  );
};
