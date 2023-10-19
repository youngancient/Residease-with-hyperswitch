import { styled } from "styled-components";

export const HeroStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  border-radius: 3rem;
  .h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
  }
  background: url(/hero.png) no-repeat center;
  background-size: cover;
  height: 85vh;
  h1 {
    color: var(--white, #fff);
    text-align: center;
    font-size: 4.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 5.85rem */
    letter-spacing: 0.09rem;
  }
  .hero-text {
    width: 70%;
  }
  .hero-text p {
    color: var(--white, #fff);
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 1.4rem */
    letter-spacing: -0.02rem;
  }
  @media (min-width: 998px) {
    .hero-text {
      width: 50%;
    }
  }
  @media (max-width: 767px) {
    border-radius: 1.5rem;
    h1 {
      font-size: 2.5rem;
    }
    .hero-text {
      width: 95%;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 2rem;
    }
    height: 70vh;
  }
`;

export const SearchStyles = styled.div`
  button {
    display: flex;
    width: 10.75rem;
    height: 3rem;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    color: var(--white, #fff);
    border-radius: 0.9375rem;
    background: #006BB9;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; /* 1rem */
    letter-spacing: 0.02rem;
  }
  input {
    background: #fff;
    width: 100%;
    color: #000;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 1.4rem */
    letter-spacing: -0.02rem;
    //   width: 100%;
  }
  input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #c4c4c4;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 1.4rem */
    letter-spacing: -0.02rem;
  }

  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #c4c4c4;
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 1.4rem */
    letter-spacing: -0.02rem;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap:  1rem;
    width: 80%;
    justify-content: center;
    align-items: center;
    input {
      height: 50px;
      border-radius: 0.9375rem;
      padding: 0.5rem 0.5rem 0.5rem 1rem;
    }
  }
  @media (min-width: 500px) {
    background: #fff;
    width: 80%;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    display: flex;
    border-radius: 0.9375rem;
    gap: 1rem;
  }
  @media (min-width: 998px) {
    width: 50%;
  }
`;

export const ListHousesStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .one {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  h2 {
    color: var(--gray-800, #242d35);
    font-size: 2.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 3.4125rem */
    letter-spacing: 0.0525rem;
  }
  .desc {
    color: var(--primary-color, #000);
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 1.4rem */
    letter-spacing: -0.02rem;
    width: 55%;
  }
  @media (max-width: 998px) {
    .desc {
      width: 80%;
    }
  }
  @media (max-width: 767px) {
    .one {
      justify-content: center;
      align-items: center;
      text-align: center;
    }
    .desc {
      width: 100%;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
`;


