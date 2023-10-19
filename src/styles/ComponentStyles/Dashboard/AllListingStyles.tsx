import { styled } from "styled-components";

export const AllListingStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h2 {
    color: var(--gray-700, #373f47);
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 800;
    line-height: 140%; /* 2.45rem */
    letter-spacing: 0.035rem;
  }
  .filters {
    display: flex;
    gap: 0.75rem;
  }
  .filter-btns {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
  .one-y {
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
  }
  @media (max-width: 500px) {
    .filters {
      flex-direction: column;
    }
    .filter-btns {
      gap: 0;
      justify-content: space-between;
    }
  }
`;

export const FilterStyle = styled.div`
  position: relative;
  button {
    cursor: pointer;
    display: flex;
    padding: 0.75rem 0.75rem 0.75rem 1.25rem;
    align-items: center;
    white-space: nowrap;
    width: fit-content;
    gap: 0.5rem;
    border: 2px solid #000;
    border-radius: 2rem;
    border: 1px solid var(--gray-200, #eaecee);
    background: var(--base-background-white, #fff);
    color: var(--gray-900, #0c1116);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 0.875rem */
  }
  .dropdown {
    position: absolute;
    background: #fff;
    display: flex;
    flex-direction: column;
    z-index: 5;
    margin-top: 0.5rem;
    left: 0.5rem;
  }
`;

export const SearchInputStyle = styled.div`
  border-radius: 2rem;
  position: relative;
  border: 1px solid var(--gray-200, #eaecee);
  padding: 0.75rem 0rem;
  padding-left: 2rem;
  padding-right: 2.5rem;
  background: var(--base-background-white, #fff);
  width: 100%;
  input {
    width: 100%;
    text-align: center;
    color: var(--gray-900, #0c1116);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 0.875rem */
  }
  input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--gray-300, #d6dade);
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 170%; /* 1.38125rem */
    letter-spacing: 0.01625rem;
  }

  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: var(--gray-300, #d6dade);
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 170%; /* 1.38125rem */
    letter-spacing: 0.01625rem;
  }

  input::-ms-input-placeholder {
    /* Microsoft Edge */
    color: var(--gray-300, #d6dade);
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 170%; /* 1.38125rem */
    letter-spacing: 0.01625rem;
  }
  .svg-x,
  .svg-y {
    position: absolute;
  }
  .svg-x {
    left: 0.75rem;
    top: 0.9rem;
  }
  .svg-y {
    right: 0.75rem;
    top: 0.6rem;
  }
`;
