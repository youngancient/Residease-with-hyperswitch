import { dataSelector, toggleShowVideoModal } from "@/redux/dataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  ContentSection,
  InnerSection,
  MiniSection,
  PadBottomStyles,
} from "@/styles/PageStyles/SectionStyles";
import {
  BackBtnStyles,
  HouseDetailsStyles,
  LargeTextStyles,
  MediumTextStyles,
} from "@/styles/ComponentStyles/Dashboard/HouseDetailsStyles";
import {
  BackBtn,
  Details,
  IDetails,
  MapComponent,
  PhotoGrid,
  PhotoSlider,
  PropertyOverview,
  Status,
} from "../HouseDetails";
import { IHouse } from "../../../../types/House";
import { ILargeBtn, LargeBtn } from "@/components/Header/Header";
import { Empty } from "@/components/HouseCards/HouseList";
import {
  DigitalInspectionStyles,
  SatisfiedStyles,
  TransparentBtnStyles,
  VideoModalStyles,
  WatchVideoStyles,
} from "@/styles/ComponentStyles/Dashboard/Inspection/DigitalStyles";
import { BackIcon, ButtonLoader, GreaterThan } from "@/components/Icons/DashboardIcons";
import { FunctionComponent } from "react";
import { ComingSoonShort } from "@/components/Homepage/ComingSoon";
import { Degree, Live } from "@/components/Icons/DigitalInspection";
import Image from "next/image";
import { CloseIcon, IClick } from "@/components/Icons/HeaderIcons";

export const DigitalInspection = () => {
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
          value: ["School", "Hospital", "Power supply"],
        },
        { name: "Unit Type", id: "type", value: `${house?.type}` },
      ],
    });
  }, [house?.type,house?.price]);

  // const goForPhysicalInspection = () => {
  //   router.push(`/dashboard/inspection/physical/${id}`);
  // };

  return (
    <MiniSection>
      <PadBottomStyles>
        <DigitalInspectionStyles>
          <BackBtn path={`/dashboard/availableunits/${id}`} />
          {house ? (
            <>
              <div className="one">
                <LargeTextStyles>{house.name}</LargeTextStyles>
                <div className="one-xx">
                  <MediumTextStyles>Inspection</MediumTextStyles>
                  <Status status="In Progress" />
                </div>
                <p className="desc">
                  Have 360 image live few of the property. Eleventeen bedrooms,
                  fourty bidets and a mainspring room this house is set to
                  generate huge interest from the financial capital markets.
                </p>
              </div>
              <div className="two">
                <WatchVideo id={id} />
              </div>
              <ContentSection>
                <div className="three-x">
                  <PropertyOverview />
                  <Satisfied id={id} />
                </div>
                <div className="three-y">
                  <Details details={details?.details} />
                </div>
              </ContentSection>
            </>
          ) : (
            <Empty msg="This Page is under construction" />
          )}
        </DigitalInspectionStyles>
      </PadBottomStyles>
    </MiniSection>
  );
};

interface ISatisfied {
  id: string;
}
export const Satisfied: FunctionComponent<ISatisfied> = ({ id }) => {
  const router = useRouter();
  return (
    <SatisfiedStyles>
      <MediumTextStyles>Satisfied with Inspection</MediumTextStyles>
      <div className="three">
        <button type="button" className="yes">
          <p>Yes</p>
          <GreaterThan />
        </button>
        <LargeBtn
          text="Rent now"
          clickAction={() => router.push(`/dashboard/payments/${id}`)}
        />
        <TransparentBtn
          text="Physical Inspection"
          clickAction={() =>
            router.push(`/dashboard/inspection/physical/${id}`)
          }
        />
      </div>
    </SatisfiedStyles>
  );
};

export const TransparentBtn: FunctionComponent<ILargeBtn> = ({
  text,
  clickAction,
}) => {
  return (
    <TransparentBtnStyles onClick={clickAction}>{text}</TransparentBtnStyles>
  );
};


interface IGetId{
  id : string;
}
export const WatchVideo:FunctionComponent<IGetId> = ({id}) => {
  const { showVideoModal, allHouses } = useAppSelector(dataSelector);
  const dispatch = useAppDispatch();
  const house = allHouses?.find((ele) => ele.id === id);
  return (
    <WatchVideoStyles>
      <div className="first">
        <div className="live">
          <Live />{" "}
          <div className="fl">
            <p>LIVE </p>
            <div className="deg">
              <Degree /> <span>360</span>
            </div>
          </div>
        </div>
        <p className="explain">
          You will get a 360 view when the live inspection of your space is
          ongoing.
        </p>
      </div>
      <div className="two">
        <Image
          src={house?.imgSrc ? house.imgSrc : "/house10.jpeg"}
          alt="house 306 degree view"
          width={0}
          height={0}
          sizes="100vw"
        />
        <LargeBtn
          text="Inspect now"
          clickAction={() => dispatch(toggleShowVideoModal(true))}
        />
      </div>
      {showVideoModal && house?.link && <VideoModal link={house?.link} />}
    </WatchVideoStyles>
  );
};

interface IVideoModal{
  link : string;
}
export const VideoModal:FunctionComponent<IVideoModal> = ({link}) => {
  const dispatch = useAppDispatch();
  const [isLoading,setIsLoading] = useState(true);
  return (
    <VideoModalStyles>
      <MiniSection>
        <div className="frame">
        <div className="fir">
          <GoBack clickAction={() => dispatch(toggleShowVideoModal(false))} />
        </div>
        {isLoading && <ButtonLoader />}
        <iframe
          src={link}
          width="500"
          height="500"                                          
          allow="fullscreen"
          onLoad={()=> setIsLoading(false)}
          style={{border: 0 }}
        ></iframe>
        </div>
      </MiniSection>
    </VideoModalStyles>
  );
};

export const GoBack: FunctionComponent<IClick> = ({ clickAction }) => {
  return (
    <BackBtnStyles onClick={clickAction}>
      <CloseIcon clickAction={clickAction} />
      <p>Close</p>
    </BackBtnStyles>
  );
};
