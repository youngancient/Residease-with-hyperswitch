import { houseVariants } from "@/animations/homepage";
import { motion } from "framer-motion";
import { styled } from "styled-components";

export const FavouriteStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.62rem;
  h3 {
    color: var(--gray-700, #373f47);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 150%; /* 2.25rem */
  }
  width: 100%;
  overflow-x: hidden;
`;

export const ListFavouriteStyles = styled.div`
  width: 100%;
  position: relative;
  .scroll {
    display: flex;
    gap: 1.5rem;
    scroll-behavior: smooth;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const FavouriteItemStyles = styled(motion.div).attrs(() => ({
  variants: houseVariants,
  initial: "initial",
  whileInView: "final",
  viewport: { once: true },
}))`
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0.75rem 11.375rem 0.6875rem 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--gray-200, #eaecee);
  background: var(--base-background-white, #fff);
  img {
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
  }
  display: flex;
  gap: 1rem;
  p {
    color: var(--gray-800, #242d35);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 300;
    line-height: 150%; /* 1.3125rem */
  }
  span {
    color: var(--gray-600, #4f5b67);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 300;
    line-height: 150%; /* 1.125rem */
  }
  .deet {
    white-space: nowrap;
  }
  @media (max-width: 500px) {
    padding: 0.75rem 2.375rem 0.6875rem 1.5rem;
    .deet {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
  }
`;

export const NextBtn = styled.button`
  position: absolute;
  right: 0;
  border-radius: 2rem;
  border: 1px solid var(--gray-200, #eaecee);
  background: var(--base-background-white, #fff);
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  display: flex;
  top: 0.5rem;
`;

