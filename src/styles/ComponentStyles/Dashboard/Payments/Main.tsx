import { styled } from "styled-components";
import { DarkContainerStyle } from "../../AuthStyles/AuthStyles";
import { formVariants } from "@/animations/dashboard";
import { motion } from "framer-motion";

export const PaymentBg = styled(DarkContainerStyle)`
  border: 2px solid #fff;
  margin-top: 3rem;
  margin-bottom: 3rem;
  height: fit-content;
  min-height: 180vh;
  @media (max-width: 500px) {
    min-height: 120vh;
  }
`;

export const PaymentFormStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 50vh;
  .one {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.65rem;
  }
  .one h4 {
    color: var(--gray-800, #242d35);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 2.25rem */
  }
  .two {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .three {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .fl p {
    color: var(--gray-700, #373f47);
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 170%; /* 1.38125rem */
    letter-spacing: 0.01625rem;
    text-align: center;
    margin-top: 0.75rem;
  }
  .btn-cont {
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }
  .paystack-button {
    color: var(--white, #fff);
    border-radius: 0.9375rem;
    background: var(--primary-color, #000);
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 1rem */
    letter-spacing: 0.02rem;
    display: flex;
    width: fit-content;
    height: 4rem;
    padding: 0.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    whitespace: nowrap;
    margin: 0 auto;
  }
`;

export const PaymentOptionsStyles = styled.div`
  border: 2px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 0.75rem;
  border: 1px solid var(--gray-200, #eaecee);
  padding: 1rem;
  background: var(--base-background-white, #fff);
  .pair {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
  .flex {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    p {
      color: var(--gray-700, #373f47);
      font-size: 0.8125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 170%; /* 1.38125rem */
      letter-spacing: 0.01625rem;
    }
    span {
      color: #878d93;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 1.4rem */
      letter-spacing: -0.02rem;
    }
  }
  svg {
    scale: 1.2;
  }
  @media (max-width: 767px) {
    .hide {
      display: none;
    }
  }
`;

export const InspectionPassStyles = styled.div`
  border: 2px solid #000;
  position: relative;
  height: 200px;
  border-radius: 0.75rem;
  border: 1px solid #646464;
  background: #1e1e1e;
  padding: 1.19rem;
  display: flex;
  .xx {
    z-index: 3;
    display: flex;
    positon: relative;
    flex-direction: column;
    justify-content: space-between;
  }
  .abs {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  h4 {
    color: #f7f7f7;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 1.5rem */
    font-size: 0.875rem;
  }
  .i-one h4 {
    font-size: 1rem;
    font-weight: 700;
  }
  .i-one .name {
    color: #eee;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 1.125rem */
    margin-top: 0.5rem;
  }
  .i-one span {
    color: #bebebe;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 100;
    line-height: 150%; /* 0.9375rem */
  }
`;

export const LoadingScreenStyle = styled(motion.div).attrs(() => ({
  variants: formVariants,
  initial: "initial",
  animate: "final",
  exit: "exit",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  p {
    color: #4d565f;
    text-align: center;
    font-family: Public Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 1.5rem */
  }
`;

export const PaymentSuccessStyle = styled(motion.div).attrs(() => ({
  variants: formVariants,
  initial: "initial",
  animate: "final",
  exit: "exit",
}))`
  h4 {
    color: var(--gray-800, #242d35);
    font-family: Public Sans;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 3rem */
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    p {
      color: #4d565f;
      text-align: center;
      font-family: Public Sans;
      font-size: 1rem;
      font-style: normal;
      font-weight: 500;
      line-height: 150%; /* 1.5rem */
    }
  }
  gap: 3rem;
  display: flex;
  flex-direction: column;
  .btn button {
    margin: 0 auto;
  }
`;
