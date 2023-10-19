import {
  ActionBtnContainer,
  BackBtnStyles,
  DetailCompStyles,
  DetailsStyles,
  HouseDetailsStyles,
  LargeTextStyles,
  MapStyles,
  MediumTextStyles,
  PhotoGridStyles,
  PhotoSliderStyles,
  PropertyOverviewStyles,
  SlideImageStyles,
  SliderBtn,
  StatusStyles,
} from "@/styles/ComponentStyles/Dashboard/HouseDetailsStyles";
import {
  ContentSection,
  InnerSection,
  MiniSection,
} from "@/styles/PageStyles/SectionStyles";
import { BackIcon, Dollar, GreaterThan } from "../Icons/DashboardIcons";
import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import { IClick } from "../Icons/HeaderIcons";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { LargeBtn } from "../Header/Header";
import { ComingSoonShort } from "../Homepage/ComingSoon";
import Image from "next/image";
import { IconDicts } from "../../../constants/CourseDetail";
import { dataSelector, setSlideImages } from "@/redux/dataSlice";
import { IHouse } from "../../../types/House";
import { Empty } from "../HouseCards/HouseList";





export const HouseDetailComp = () => {
  const { user } = useAppSelector(userSelector);
  const { allHouses } = useAppSelector(dataSelector);

  // There's a bug here.
  // when the user navigates by typing the url, it shows empty
  const router = useRouter();
  const id = router.query.id as string;
  const [house, setHouse] = useState<IHouse | undefined>();
  useEffect(() => {
    allHouses && setHouse(allHouses.find((ele) => ele.id === id));
  }, [id, allHouses]);

  const [details, setDetails] = useState<IDetails>();
  useEffect(() => {
    setDetails({
      details: [
        { name: "Total Deal for house", id: "price", value: `${house?.price.toLocaleString()}` },
        { name: "Contact details", id: "contact", value: "+234 419 8765 000" },
        { name: "Managing agent", id: "agent", value: "Residease" },
        {
          name: "Amenities",
          id: "amenities",
          value: ["Clean Water", "Heater", "Power supply"],
        },
        { name: "Unit Type", id: "type", value: `${house?.type}` },
      ],
    });
  }, [house?.type,house?.price]);

  const goForInspection = () => {
    // const path = "/dashboard/inspection"
    if (user) {
      router.push(`/dashboard/inspection/digital/${id}`);
    } else {
      router.push(`/auth`);
    }
  };
  const escrowPayment = () => {
    // const path = "/dashboard/inspection"
    if (user) {
      router.push(`/dashboard/payments/${id}`);
    } else {
      router.push(`/auth`);
    }
  };

  return (
    <MiniSection>
      <HouseDetailsStyles>
        <BackBtn
          path={user !== null ? "/dashboard/availableunits" : "/properties"}
        />
        {house ? (
          <>
            <div className="one">
              <LargeTextStyles>{house.name}</LargeTextStyles>
            </div>
            <div className="two">
              <PhotoGrid mainImage={house.imgSrc} />
              <PhotoSlider mainImage={house.imgSrc} />
            </div>
            <ContentSection>
              <div className="three-x">
                <PropertyOverview />
                <MapComponent />
              </div>
              <div className="three-y">
                <Details details={details?.details} />
              </div>
            </ContentSection>
            <ActionBtnContainer>
              <button type="button" className="first" onClick={goForInspection}>
                Inspect now
              </button>
              <button type="button" className="sec" onClick={escrowPayment}>
                Rent now
              </button>
            </ActionBtnContainer>
          </>
        ) : (
          <Empty msg="This Page is under construction" />
        )}
      </HouseDetailsStyles>
    </MiniSection>
  );
};

export interface IPath {
  path: string;
}
export const BackBtn: FunctionComponent<IPath> = ({ path }) => {
  const router = useRouter();
  return (
    <BackBtnStyles onClick={() => router.push(path)}>
      <BackIcon />
      <p>Back</p>
    </BackBtnStyles>
  );
};

export interface IStatus {
  status: "Verified" | "Unverified" | "In Progress";
}
export const Status: FunctionComponent<IStatus> = ({ status }) => {
  return <StatusStyles status={status}>{status}</StatusStyles>;
};

export const PropertyOverview = () => {
  return (
    <PropertyOverviewStyles>
      <div className="flex">
        <MediumTextStyles>Property overview</MediumTextStyles>
        <Status status="Verified" />
      </div>
      <div className="overview">
        <p>
          A beautiful suburban property investment within reach of the top
          Boston universities and bountiful shopping opportunities. The house
          was renovated by John Steeley of McNeely Peeley’s in South Philly.
          Boasting eleventeen bedrooms, fourty bidets and a manscaping room this
          house is set to generate huge interest from the financial capital
          markets. Currently offered for joint investment on a pro rata
          deriviatives equine distribution model through venture capital star
          investments capital limited. Free viewings online or via wetransfer
          download buckets. Contact managing agent for counselling sessions.
        </p>
      </div>
    </PropertyOverviewStyles>
  );
};

export const InspectionOverview = () => {
  return (
    <PropertyOverviewStyles>
      <div className="flex">
        <MediumTextStyles>Property overview</MediumTextStyles>
        <Status status="In Progress" />
      </div>
      <div className="overview">
        <p>
          A beautiful suburban property investment within reach of the top
          Boston universities and bountiful shopping opportunities. The house
          was renovated by John Steeley of McNeely Peeley’s in South Philly.
          Boasting eleventeen bedrooms, fourty bidets and a manscaping room this
          house is set to generate huge interest from the financial capital
          markets. Currently offered for joint investment on a pro rata
          deriviatives equine distribution model through venture capital star
          investments capital limited. Free viewings online or via wetransfer
          download buckets. Contact managing agent for counselling sessions.
        </p>
      </div>
    </PropertyOverviewStyles>
  );
};

export interface IDetails {
  details: IDetail[] | undefined;
}
export const Details: FunctionComponent<IDetails> = ({ details }) => {
  return (
    <DetailsStyles>
      <MediumTextStyles>Details</MediumTextStyles>
      <div className="details-list">
        {details?.map((ele, index) => (
          <DetailComp
            id={ele.id}
            key={index}
            name={ele.name}
            value={ele.value}
          />
        ))}
      </div>
    </DetailsStyles>
  );
};

export interface IDetail {
  id: string;
  name: string;
  value: string | string[] | number;
}

export const DetailComp: FunctionComponent<IDetail> = ({ id, name, value }) => {
  return (
    <DetailCompStyles>
      {IconDicts[id]}
      <div className="first">
        <p>{name}</p>
        <span>
          {typeof value === "number"
            ? value.toLocaleString()
            : value.toString()}
        </span>
      </div>
    </DetailCompStyles>
  );
};

export const MapComponent = () => {
  return (
    <MapStyles>
      <div className="flex">
        <MediumTextStyles>Property location</MediumTextStyles>
        <ComingSoonShort>Coming Soon</ComingSoonShort>
      </div>
      <div className="img">
        <Image
          src="/placeholder-map.png"
          width={0}
          height={0}
          sizes="100vw"
          alt="house map"
        />
      </div>
    </MapStyles>
  );
};

interface IPhotos {
  mainImage: string;
}
export const PhotoGrid: FunctionComponent<IPhotos> = ({ mainImage }) => {
  return (
    <PhotoGridStyles>
      <div className="one">
        <Image
          alt="main image"
          src={mainImage}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="two">
        <Image
          alt="first image"
          src="/room1.jpg"
          width={0}
          height={0}
          sizes="100vw"
        />
        <Image
          alt="second image"
          src="/room2.jpg"
          width={0}
          height={0}
          sizes="100vw"
        />
        <Image
          alt="third image"
          src="/room3.jpg"
          width={0}
          height={0}
          sizes="100vw"
        />
        <Image
          alt="fourth image"
          src="/room4.jpg"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </PhotoGridStyles>
  );
};

export interface ISlideImage {
  src: string;
  alt: string;
  show: boolean;
}

// fix this slider!

export const PhotoSlider: FunctionComponent<IPhotos> = ({ mainImage }) => {
  // const [slideImages, setSlideImages] = useState<ISlideImage[]>();
  const { slideImages } = useAppSelector(dataSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setSlideImages([
        { src: `${mainImage}`, alt: "main", show: true },
        { src: "/room1.jpg", alt: "first image", show: false },
        { src: "/room2.jpg", alt: "second image", show: false },
        { src: "/room3.jpg", alt: "third image", show: false },
        { src: "/room4.jpg", alt: "fourth image", show: false },
      ])
    );
  }, []);

  const [count, setCount] = useState<number>(0);
  const handleSlider = () => {
    if (count === 4) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  useEffect(() => {
    let newSlideImages = null;
    if (slideImages) {
      newSlideImages = slideImages.map((ele, index) => {
        if (count === index) {
          return { ...ele, show: true };
        } else {
          return { ...ele, show: false };
        }
      });
      dispatch(setSlideImages(newSlideImages));
    }
  }, [count]);

  return (
    <PhotoSliderStyles>
      <div className="control">
        <SliderBtn onClick={handleSlider}>
          <GreaterThan />
        </SliderBtn>
      </div>
      {slideImages?.map((ele, index) => (
        <SlideImage key={index} src={ele.src} show={ele.show} alt={ele.alt} />
      ))}
    </PhotoSliderStyles>
  );
};

export const SlideImage: FunctionComponent<ISlideImage> = ({
  show,
  src,
  alt,
}) => {
  return (
    <SlideImageStyles $show={show}>
      <Image alt={alt} src={src} width={0} height={0} sizes="100vw" />
    </SlideImageStyles>
  );
};
