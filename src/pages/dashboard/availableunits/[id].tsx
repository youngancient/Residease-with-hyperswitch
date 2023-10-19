import { HouseDetailComp } from "@/components/dashboard/HouseDetails";
import { SimilarHouses } from "@/components/dashboard/SimilarHouses";
import { useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { InnerSection, MiniSection, PadBottomStyles } from "@/styles/PageStyles/SectionStyles";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const HouseDetail = () => {
  const { user } = useAppSelector(userSelector);
  const router = useRouter();
  const id = router.query.id as string;
  useEffect(() => {
    if (user === null) {
      router.push("/auth");
    }
  }, [router,user]);

  return (
    <>
      <Head>
        <title>Dashboard | Available Units</title>
        <meta
          name="description"
          content="Rentease is a platform which makes renting and buying houses seamless"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <PadBottomStyles>
        <HouseDetailComp />
        { id && <SimilarHouses id={id} />}
        </PadBottomStyles>
      </main>
    </>
  );
};

export default HouseDetail;
