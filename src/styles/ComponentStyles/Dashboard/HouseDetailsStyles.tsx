import { houseVariants } from "@/animations/homepage";
import { ComingSoonShort } from "@/components/Homepage/ComingSoon";
import { IStatus } from "@/components/dashboard/HouseDetails";
import { motion } from "framer-motion";
import { css, styled } from "styled-components";
import { NextBtn } from "./FavoriteStyles";

export const BackBtnStyles = styled.button`
  border: 2px solid #000;
  color: var(--gray-900, #0c1116);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 0.875rem */
  display: flex;
  border-radius: 2rem;
  padding: 0.75rem 1.25rem 0.75rem 0.75rem;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--gray-200, #eaecee);
  background: var(--base-background-white, #fff);
  width: fit-content;
`;

export const LargeTextStyles = styled.h3`
  display: flex;
  color: var(--gray-800, #242d35);
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 3.4125rem */
  letter-spacing: 0.0525rem;
  @media (max-width: 375px) {
    font-size: 1.5rem;
  }
  @media (min-width: 375px) {
    font-size: 1.75rem;
  }
  @media (min-width: 767px) {
    font-size: 2rem;
  }
  @media (min-width: 998px) {
    font-size: 2.625rem;
  }
`;
export const MediumTextStyles = styled.h4`
  color: var(--gray-800, #242d35);
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 2.25rem */
`;
export const HouseDetailsStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  .one {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 500px) {
    .one {
      display: block;
      button {
        margin-top: 1rem;
      }
    }
  }
`;

export const StatusStyles = styled(ComingSoonShort)<IStatus>`
  ${(props) =>
    props.status == "Unverified" &&
    css`
      color: var(--green-50, #f6fff0);
      background: #eee159;
    `}
  ${(props) =>
    props.status == "In Progress" &&
    css`
      color: var(--primary-color, #000);
      background: #eee159;
    `}
`;

export const SubsectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
export const PropertyOverviewStyles = styled(SubsectionStyles)`
  .flex {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
  .overview p {
    color: var(--gray-700, #373f47);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.5rem */
  }
`;

export const DetailsStyles = styled(SubsectionStyles)`
  .details-list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const DetailCompStyles = styled(motion.div).attrs(() => ({
  variants: houseVariants,
  initial: "initial",
  whileInView: "final",
  viewport: { once: true },
}))`
  display: flex;
  border-radius: 0.75rem;
  gap: 1.5rem;
  align-items: center;
  border: 1px solid var(--gray-200, #eaecee);
  background: var(--base-background-white, #fff);
  span {
    color: var(--gray-600, #4f5b67);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 1.4rem */
    letter-spacing: -0.02rem;
  }
  p {
    color: var(--gray-700, #373f47);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 0.875rem */
  }
  .first {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  @media (max-width: 998px) {
    padding: 1rem;
  }
  @media (min-width: 998px) {
    padding: 1.5rem;
  }
`;

export const MapStyles = styled(SubsectionStyles)`
  .flex {
    display: flex;
    align-items: center;
    gap: 0.625rem;
  }
  .img {
    img {
      width: 100%;
      object-fit: cover;
      height: 335px;
    }
  }
`;

export const PhotoGridStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  img {
    border-radius: 0.75rem;
  }
  .one img {
    width: 100%;
    height: 100%;
  }
  .two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 185px 180px;
    grid-gap: 1rem;
  }
  .two img {
    width: 100%;
    height: 100%;
  }
  .one,
  .two {
    height: 380px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const PhotoSliderStyles = styled.div`
  position: relative;
  display: flex;
  @media (min-width: 767px) {
    display: none;
  }
`;

interface ISliderImageStyle {
  $show: boolean;
}
export const SlideImageStyles = styled.div<ISliderImageStyle>`
  width: 100%;
  img {
    width: 100%;
    height: 380px;
    border-radius: 0.75rem;
  }
  ${(props) =>
    !props.$show &&
    css`
      display: none;
    `}
`;

export const SliderBtn = styled(NextBtn)`
  top: 50%;
`;

export const ActionBtnContainer = styled.div`
  display: flex;
  gap: 2rem;
  .first,
  .sec {
    width: 50%;
  }
  .first {
    background: #ecedf7;
    color: var(--primary-color, #000);
  }
  .sec {
    background: var(--complimentary, #004286);
    color: var(--white, #fff);
  }
  button {
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 1rem */
    letter-spacing: 0.02rem;
    padding: 0.625rem;
    border-radius: 0.9375rem;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 1.5rem;
    .first,
    .sec {
      width: 100%;
    }
  }
`;
