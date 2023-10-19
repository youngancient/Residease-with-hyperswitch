import { styled } from "styled-components";

export const HeroSection = styled.section`
  padding: 1.5rem;
  margin-top: 1rem;
  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export const InnerSection = styled.section`
  padding: 2rem;
  margin-top: 3rem;
  @media (max-width: 500px) {
    padding: 1.5rem;
    margin-top: 2rem;
  }
  @media (min-width: 998px) {
    padding: 1rem 6rem 1rem 6rem;
  }
`;

export const MiniSection = styled.section`
  padding: 2rem;
  margin-top: 1rem;
  @media (max-width: 500px) {
    padding: 1.5rem;
  }
  @media (min-width: 998px) {
    padding: 1rem 6rem 1rem 6rem;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  gap: 2.5rem;
  .three-x{
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
  @media (min-width: 767px) {
    flex-direction: row;
    .three-x {
      width: 65%;
    }
    .three-y {
      width: 35%;
    }
  }
  @media (min-width: 998px) {
    gap: 5rem;
    .three-x {
      width: 70%;
    }
    .three-y {
      width: 30%;
    }
  }
`;

export const PadBottomStyles = styled.div`
  padding-bottom: 4.5rem;
  @media (max-width: 500px) {
    padding-bottom: 4rem;
  }
  @media (max-width: 500px) {
    padding-bottom: 5rem;
  }
`;