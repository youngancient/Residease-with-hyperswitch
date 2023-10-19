import { styled } from "styled-components";

export const SimilarHousesStyles = styled.div`
  h3 {
    color: var(--gray-800, #242d35);
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 2.25rem */
    display: flex;
    aign-items: center;
    gap: 0.25rem;
  }
  h3 strong{
    color: var(--complimentary, #004286);
    font-size: 1rem;
  }
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;

export const SlidingListHousesStyles = styled.div`
  display: flex;
  width: 100%;
  scroll-behavior: smooth;
  overflow-x: scroll;
  gap: 1.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
