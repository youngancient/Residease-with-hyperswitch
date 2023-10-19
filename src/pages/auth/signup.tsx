
import { SignupForm } from '@/components/auth/Auth';
import { DarkContainerStyle } from '@/styles/ComponentStyles/AuthStyles/AuthStyles';
import Head from 'next/head'
import Image from 'next/image'
import { useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect } from "react";


const SignUp =() => {
  const { user } = useAppSelector(userSelector);
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [router,user]);
  
  return (
    <>
      <Head>
        <title>Signup</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <DarkContainerStyle>
          <SignupForm />
        </DarkContainerStyle>
      </main>
    </>
  )
}

export default SignUp;