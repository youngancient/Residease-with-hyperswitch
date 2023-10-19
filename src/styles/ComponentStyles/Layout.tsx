import { css, styled } from "styled-components";

interface IControlBody {
  $isNavOpen?: boolean;
}

export const LayoutStyle = styled.div<IControlBody>`
  ${(props) =>
    props.$isNavOpen &&
    css`
    height: 100vh;
    overflow-y: hidden;
    `}
`;
