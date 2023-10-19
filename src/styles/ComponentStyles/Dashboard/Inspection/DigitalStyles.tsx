import { styled } from "styled-components";
import { HouseDetailsStyles, SubsectionStyles } from "../HouseDetailsStyles";
import { LargeBtnStyles } from "../../HeaderStyles";

export const SatisfiedStyles = styled(SubsectionStyles)`
  .three {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }
  .yes {
    display: flex;
    height: 5.375rem;
    padding: 0rem 0.6875rem 0rem 1.625rem;
    justify-content: flex-end;
    align-items: center;
    border-radius: 0.75rem;
    border: 1px solid var(--gray-200, #eaecee);
    background: var(--base-background-white, #fff);
  }
  @media (max-width: 500px) {
    .yes {
      display: none;
    }
  }
  @media (max-width: 375px) {
    .three {
      flex-direction: column;
      justify-content: flex-end;
    }
    h4 {
      text-align: center;
    }
  }
`;

export const TransparentBtnStyles = styled(LargeBtnStyles)`
  border: 1px solid var(--primary-color, #000);
  background: transparent;
  color: var(--primary-color, #000);
`;

export const WatchVideoStyles = styled.div`
  border-radius: 1.25rem;
  padding: 1.5rem;
  gap: 1.5rem;
  background: #ecedf7;
  height: 350px;
  width: 100%;
  display: flex;
  .first,.two{
    width: 50%;
  }
  .two{
    display: flex;
    flex-direction: column;
    gap : 1.5rem;
  }
  .two button{margin: 0 auto;}
  .two img{
    width: 100%;
    height: 200px;
    border-radius: 0.5rem;
  }
  .fl{
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
  }
  .first .live{
    display: flex;
    flex-direction: row;
    .deg{
      margin-top: 0.5rem;
      display: flex;
    }
    p{
      color: #1F1F1F;
font-family: Montserrat;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: 140.625%; /* 1.40625rem */
    }
    .deg svg{
      scale: 1.5;
    }
    .deg span{
      color: #0149A4;
font-family: Montserrat;
font-size: 0.75rem;
font-style: normal;
font-weight: 600;
line-height: 140.625%; /* 1.05469rem */
    }
  }
  .first{
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .explain{
    color: #1F1F1F;
font-family: Montserrat;
font-size: 1.5rem;
font-style: normal;
font-weight: 600;
line-height: 140.625%; /* 2.10938rem */
  }
  @media (max-width: 500px){
    height: fit-content;
    flex-direction: column;
    .first, .two{
      width: 100%;
    }
    .two{
      gap : 1.8rem;
    }
  }
  @media (min-width: 998px){
    .explain{
      width: 80%;
    }
  }
}
`;

export const DigitalInspectionStyles = styled(HouseDetailsStyles)`
  .one {
    display: flex;
    flex-direction: column;
    display: block;
  }
  .one-xx {
    gap: 0.625rem;
    display: flex;
    margin-top: 1rem;
    align-items: center;
  }
  .desc {
    color: var(--gray-700, #373f47);
    margin-top: 1rem;
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
    .desc {
      width: 100%;
    }
  }
`;

export const VideoModalStyles = styled.div`
  background: hsla(0, 0%, 4%, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  .fir{
    margin-bottom: 1rem;
  }
  @media (max-width: 500px) {
    .fir button{
      margin: 0 auto;
    }
  }
`