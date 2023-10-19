import { dataSelector, setIsNavOpen } from "@/redux/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { LogoStyles, MenuStyle } from "@/styles/ComponentStyles/HeaderStyles";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";

export const Menu: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { isNavOpen } = useAppSelector(dataSelector);
  const toggleMenu = () => {
    dispatch(setIsNavOpen(!isNavOpen));
  };
  return (
    <MenuStyle onClick={toggleMenu}>
      <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Menu H">
          <rect id="Top" width="24" height="2" rx="1" fill="#272727" />
          <rect id="Middle" y="8" width="24" height="2" rx="1" fill="#272727" />
          <rect
            id="Bottom"
            y="16"
            width="24"
            height="2"
            rx="1"
            fill="#272727"
          />
        </g>
      </svg>
    </MenuStyle>
  );
};

export const LogoIcon = () => {
  const router = useRouter();
  const {user} = useAppSelector(userSelector);
  const goHome =()=>{
    if(user === null){
      router.push("/");
    }else{
      router.push("/dashboard");
    }
  }
  return (
    <LogoStyles onClick={goHome}>
      Resid<strong>ease</strong>
    </LogoStyles>
  );
};

export const OrdinaryLogoIcon = () => {
  return (
    <LogoStyles>
      Resid<strong>ease</strong>
    </LogoStyles>
  );
};
export const NotificationIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="notifications-none">
        <path
          id="Vector"
          d="M8.00033 14.6667C8.73366 14.6667 9.33366 14.0667 9.33366 13.3334H6.66699C6.66699 14.0667 7.26699 14.6667 8.00033 14.6667ZM12.0003 10.6667V7.33342C12.0003 5.28675 10.9137 3.57341 9.00033 3.12008V2.66675C9.00033 2.11341 8.55366 1.66675 8.00033 1.66675C7.44699 1.66675 7.00033 2.11341 7.00033 2.66675V3.12008C5.09366 3.57341 4.00033 5.28008 4.00033 7.33342V10.6667L2.66699 12.0001V12.6667H13.3337V12.0001L12.0003 10.6667ZM10.667 11.3334H5.33366V7.33342C5.33366 5.68008 6.34033 4.33341 8.00033 4.33341C9.66033 4.33341 10.667 5.68008 10.667 7.33342V11.3334Z"
          fill="#0C1116"
        />
      </g>
    </svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="search">
        <path
          id="Vector"
          d="M10.3333 9.33333H9.80667L9.62 9.15333C10.2733 8.39333 10.6667 7.40667 10.6667 6.33333C10.6667 3.94 8.72667 2 6.33333 2C3.94 2 2 3.94 2 6.33333C2 8.72667 3.94 10.6667 6.33333 10.6667C7.40667 10.6667 8.39333 10.2733 9.15333 9.62L9.33333 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33333ZM6.33333 9.33333C4.67333 9.33333 3.33333 7.99333 3.33333 6.33333C3.33333 4.67333 4.67333 3.33333 6.33333 3.33333C7.99333 3.33333 9.33333 4.67333 9.33333 6.33333C9.33333 7.99333 7.99333 9.33333 6.33333 9.33333Z"
          fill="#0C1116"
        />
      </g>
    </svg>
  );
};

export interface IClick {
  clickAction: () => void;
}

export const CloseIcon: FunctionComponent<IClick> = ({ clickAction }) => {
  return (
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={clickAction}
    >
      <g id="Menu H">
        <rect
          id="Top"
          x="2.80762"
          y="16.7782"
          width="24"
          height="2"
          rx="1"
          transform="rotate(-45 2.80762 16.7782)"
          fill="#272727"
        />
        <rect
          id="Bottom"
          x="4.22168"
          y="-0.192383"
          width="24"
          height="2"
          rx="1"
          transform="rotate(45 4.22168 -0.192383)"
          fill="#272727"
        />
      </g>
    </svg>
  );
};
