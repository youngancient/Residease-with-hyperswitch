import { ComingSoon } from "@/components/Homepage/ComingSoon";
import { PhysicalInspection } from "@/components/dashboard/inspection/physical";
import { PaymentForm } from "@/components/dashboard/payments/Payments";
import { useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { DarkContainerStyle } from "@/styles/ComponentStyles/AuthStyles/AuthStyles";
import { PaymentBg } from "@/styles/ComponentStyles/Dashboard/Payments/Main";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Inspection = () => {
  const { user } = useAppSelector(userSelector);
  const router = useRouter();
  useEffect(() => {
    if (user === null) {
      router.push("/auth");
    }
  }, [router,user]);

  return (
    <>
      <Head>
        <title>Dashboard | Payments</title>
        <meta
          name="description"
          content="Rentease is a platform which makes renting and buying houses seamless"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <PaymentBg>
          <PaymentForm />
        </PaymentBg>
      </main>
    </>
  );
};

export default Inspection;
