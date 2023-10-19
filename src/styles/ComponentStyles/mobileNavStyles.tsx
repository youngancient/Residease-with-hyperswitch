import { styled } from "styled-components";
import { motion } from "framer-motion";
import { MobilenavVariants } from "@/animations/homepage";

export const MobileNavStyles = styled(motion.div).attrs(() => ({
  initial: "initial",
  animate: "final",
  exit: "exit",
  variants: MobilenavVariants,
}))`
  position: absolute;
  display: flex;
  z-index: 5;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: hsla(0, 0%, 18%, 0.5);
  .main {
    width: 70%;
    background: #fff;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
  }
  .nothing {
    width: 30%;
  }
  .x {
    display: flex;
    justify-content: right;
  }
  .mobile-links {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }
  .reg button {
    display: flex;
    width: 100%;
    height: 3rem;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.9375rem;
    background: var(--primary-color, #000);
    color: var(--white, #fff);
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 1rem */
    letter-spacing: 0.02rem;
  }
  .avatar {
    margin-top: 1rem;
  }
  @media (min-width: 767px) {
    display: none;
  }
  @media (max-width: 300px) {
    .main {
      padding: 1.5rem;
    }
  }
`;
