import { formVariants } from "@/animations/dashboard";
import { motion } from "framer-motion";
import { styled } from "styled-components";

export const DarkContainerStyle = styled.div`
  border-radius: 2.25rem;
  background: #19324c;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.31rem;
`;

export const FormContainerStyle = styled.div`
  border-radius: 1.5rem;
  background: #fff;
  padding: 4.0625rem 3.5625rem 5.9375rem 3.5625rem;
  min-height: 50vh;
  @media (max-width: 500px) {
    width: 90%;
    padding: 1.5rem;
    min-height: 60vh;
  }
  @media (min-width: 500px) {
    width: 70%;
    padding: 2rem;
  }
  @media (min-width: 767px) {
    padding: 4.0625rem 3.5625rem 5.9375rem 3.5625rem;
    width: 60%;
  }
  @media (min-width: 998px) {
    width: 35%;
  }
`;

export const FormStyle = styled(motion.div).attrs(() => ({
  variants: formVariants,
  initial: "initial",
  animate: "final",
  exit: "exit",
}))`
  h3 {
    color: #0f3d6d;
    font-size: 2.625rem;
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 3.4125rem */
    letter-spacing: 0.0525rem;
  }
  p {
    color: #40454b;
    font-family: Public Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 1.4625rem */
    letter-spacing: 0.0225rem;
  }
  .head p {
    font-size: 1.125rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .below {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .form-ele {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  input {
    width: 100%;
    border-radius: 0.75rem;
    border: 1px solid #004286;
    background: var(--base-background-white, #fff);
    padding: 0.8125rem 1rem 0.75rem 1.0625rem;
  }
  input::placeholder {
    color: #88868e;
    font-family: verdana;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
  }

  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #88868e;
    font-family: Verdana;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
  }

  input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #88868e;
    font-family: verdana;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 150% */
  }
  input[type="email"] {
    color: var(--gray-700, #373f47);
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 170%; /* 1.59375rem */
    letter-spacing: 0.01875rem;
  }
  input[type="password"] {
    color: var(--gray-700, #373f47);
    font-size: 1.2rem;
  }
  .one {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .remember {
    display: flex;
    gap: 0.625rem;
    align-items: center;
  }
  .button button {
    width: 100%;
    border-radius: 0.9375rem;
    height: 4rem;
    padding: 0.625rem;
    background: var(--primary-color, #000);
    color: var(--white, #fff);
    font-family: Public Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 1rem */
    letter-spacing: 0.02rem;
  }
  .last {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
  }
  @media (max-width: 500px) {
    .remember p {
      font-size: 1rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;
export const FormLinkStyle = styled.p`
  color: #595c60;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 1.4625rem */
  letter-spacing: 0.0225rem;
  text-decoration-line: underline;
  @media (max-width: 500px) {
    font-size: 0.95rem;
  }
`;

export const ErrorStyles = styled.span`
  color: red;
  text-align: left;
  padding-left: 0.25rem;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
`;
