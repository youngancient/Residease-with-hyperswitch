import { styled } from "styled-components";
import { motion } from "framer-motion";
import { houseVariants } from "@/animations/homepage";

export const HouseCardStyles = styled(motion.div).attrs(() => ({
  variants: houseVariants,
  initial: "initial",
  whileInView: "final",
  viewport: { once: true },
}))`
  border-radius: 0.75rem;
  border: 1px solid var(--gray-200, #eaecee);
  background: var(--base-background-white, #fff);
  padding: 1.5rem;
  height: fit-content;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  img {
    border-radius: 0.5rem;
    width: 100%;
    object-fit: cover;
    height: 10rem;
  }
  h4 {
    color: var(--gray-800, #242d35);
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 1.6875rem */
    white-space: nowrap;
  }
  p {
    color: var(--gray-600, #4f5b67);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.125rem */
  }
  .two {
    display: flex;
    gap: 1rem;
    // flex-wrap: wrap;
  }
  .head {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }
  .headies {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // flex-wrap: wrap;
  }
  .headies span {
    color: var(--complimentary, #004286);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.125rem */
    border-radius: 0.75rem;
    background: #D3DDE8;
    padding: 0.3125rem 0.8125rem;
  }
  .x {
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }
  .x span {
    color: var(--gray-600, #4f5b67);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.125rem */
    white-space: nowrap;
  }
  button {
    color: var(--gray-900, #0c1116);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 0.875rem */
    border-radius: 2.25rem;
    border: 1px solid var(--gray-200, #eaecee);
    background: var(--base-background-white, #fff);
    padding: 1.1875rem 4.75rem;
    white-space: nowrap;
  }

  @media (max-width: 414px) {
    button {
      padding: 1.1875rem 4rem;
    }
  }
  @media (max-width: 370px) {
    button {
      padding: 1.1875rem 1rem;
      font-size: 0.75rem;
    }
    .headies {
      gap: 1rem;
    }
  }
  @media (max-width: 767px) {
    .desktop,
    .tab {
      display: none;
    }
  }
  @media (min-width: 767px) {
    .mobile,
    .desktop {
      display: none;
    }
  }
  @media (min-width: 998px) {
    .tab {
      display: none;
    }
    .desktop {
      display: block;
    }
  }
`;
export const NormalHouseCardStyles = styled(HouseCardStyles)`
  .headies, .two{
    flex-wrap: wrap;
  }
 @media screen and (min-width: 767px) and (max-width: 998px){
  button{
    white-space: wrap;
    padding: 1.5rem;
  }
 }
`
export const HouseListCompStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 4rem;
  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(164px, 100%), 1fr));
    column-gap: 1rem;
    row-gap: 1.5rem;
  }
  @media (min-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(min(230px, 100%), 1fr));
    column-gap: 1.5rem;
    row-gap: 2rem;
  }
  @media (min-width: 998px) {
    grid-template-columns: repeat(auto-fill, minmax(min(340px, 100%), 1fr));
    column-gap: 2rem;
    row-gap: 2.5rem;
  }
`;
