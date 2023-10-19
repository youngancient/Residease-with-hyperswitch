import { ComingSoon } from '@/components/Homepage/ComingSoon';
import Head from 'next/head'
import Image from 'next/image'

const AboutUs =() => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ComingSoon />
      </main>
    </>
  )
}

export default AboutUs;