import { dataSelector } from "@/redux/dataSlice";
import { useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  BackBtn,
  Details,
  IDetails,
  InspectionOverview,
  MapComponent,
  PhotoGrid,
  PhotoSlider,
  PropertyOverview,
} from "../HouseDetails";
import { ContentSection, MiniSection, PadBottomStyles } from "@/styles/PageStyles/SectionStyles";
import {
  HouseDetailsStyles,
  LargeTextStyles,
  MediumTextStyles,
} from "@/styles/ComponentStyles/Dashboard/HouseDetailsStyles";
import { LargeBtn } from "@/components/Header/Header";
import { Empty } from "@/components/HouseCards/HouseList";
import { IHouse } from "../../../../types/House";
import { CheckAvailabilityStyles } from "@/styles/ComponentStyles/Dashboard/Inspection/Physical";
import { ComingSoonSection, ComingSoonShort } from "@/components/Homepage/ComingSoon";

export const PhysicalInspection = () => {
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

  return (
    <MiniSection>
      <PadBottomStyles>
        <HouseDetailsStyles>
          <BackBtn path={`/dashboard/inspection/digital/${id}`} />
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
                  <InspectionOverview />
                  <CheckAvailability />
                </div>
                <div className="three-y">
                  <Details details={details?.details} />
                </div>
              </ContentSection>
            </>
          ) : (
            <Empty msg="This Page is under construction" />
          )}
        </HouseDetailsStyles>
      </PadBottomStyles>
    </MiniSection>
  );
};

export const CheckAvailability = () => {
  return (
    <CheckAvailabilityStyles>
      <div className="flex">
        <MediumTextStyles>Check Availability</MediumTextStyles>
        {/* <ComingSoonShort>Coming Soon</ComingSoonShort> */}
      </div>
      <ComingSoonSection>
        <p>This section is under construction</p>
        <ComingSoonShort>Coming Soon</ComingSoonShort>
      </ComingSoonSection>
    </CheckAvailabilityStyles>
  );
};
