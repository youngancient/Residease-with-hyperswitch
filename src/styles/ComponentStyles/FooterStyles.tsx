import { styled } from "styled-components";

export const FooterStyles = styled.footer`
  background: #f8f8f8;
  margin-top: 2rem;
  .head {
    color: var(--text, #111);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 166.667% */
    letter-spacing: 0.06rem;
    text-transform: uppercase;
  }
  .first,
  .sec {
    display: flex;
    align-item: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .sec {
    justify-content: space-evenly;
  }
  .logo p {
    margin-top: 0.75rem;
    color: rgba(30, 30, 30, 0.6);
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 1.1375rem */
    letter-spacing: 0.01625rem;
  }
  .y {
    border-bottom: 2px solid #edeeef;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .y,
  .third {
    padding: 2rem 1rem 2rem 1rem;
  }
  .third {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .div-fl {
    display: flex;
    gap: 1.5rem;
  }
  .social-links {
    display: flex;
    gap: 1.5rem;
  }
  .one {
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
  }
  .footer-links{
    display : flex;
    flex-direction: column;
    gap : 0.5rem;
  }
  @media (min-width: 500px) {
    .logo,
    .sec {
      width: 50%;
    }
  }
  @media (max-width: 500px) {
    .first{
      gap: 1.5rem;
    }
    .sec{
      gap: 3rem;
    }
    .third{
      flex-direction: column-reverse;
      display: block;
    }
    .third .div-fl{
      margin-top: 1rem;
    }
  }
  @media (min-width: 998px) {
    .y,
    .third {
      padding: 2rem 5rem 2rem 5rem;
    }
  }
`;

export const FooterLinkStyles = styled.p`
  color: var(--text, #111);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 200% */
  letter-spacing: -0.0175rem;
`;
