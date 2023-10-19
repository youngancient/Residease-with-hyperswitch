import { LoginForm } from "@/components/auth/Auth";
import { useAppSelector } from "@/redux/hooks/hook";
import { userSelector } from "@/redux/userSlice";
import { DarkContainerStyle } from "@/styles/ComponentStyles/AuthStyles/AuthStyles";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect } from "react";

const Login = () => {
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
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <DarkContainerStyle>
          <LoginForm />
        </DarkContainerStyle>
      </main>
    </>
  );
};

export default Login;
