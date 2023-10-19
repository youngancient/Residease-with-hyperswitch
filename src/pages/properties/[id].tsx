import { HouseDetailComp } from "@/components/dashboard/HouseDetails";
import { SimilarHouses } from "@/components/dashboard/SimilarHouses";
import { InnerSection, MiniSection } from "@/styles/PageStyles/SectionStyles";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const HouseDetail = () => {
  const router = useRouter();
  const id = router.query.id as string;
  return (
    <>
      <Head>
        <title>Properties | Details</title>
        <meta
          name="description"
          content="Rentease is a platform which makes renting and buying houses seamless"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <HouseDetailComp />
        { id && <SimilarHouses id={id} />}
      </main>
    </>
  );
};

export default HouseDetail;
