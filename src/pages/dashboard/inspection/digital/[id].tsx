
import { ComingSoon } from '@/components/Homepage/ComingSoon';
import { DigitalInspection } from '@/components/dashboard/inspection/digital';
import { useAppSelector } from '@/redux/hooks/hook';
import { userSelector } from '@/redux/userSlice';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Inspection =() => {
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
        <title>Dashboard | Digital Inspection</title>
        <meta name="description" content="Rentease is a platform which makes renting and buying houses seamless" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <DigitalInspection />
      </main>
    </>
  )
}

export default Inspection;