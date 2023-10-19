import { ComingSoon } from '@/components/Homepage/ComingSoon';
import Head from 'next/head'
import Image from 'next/image'

const HowItWorks =() => {
  return (
    <>
      <Head>
        <title>How it Works</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ComingSoon />
      </main>
    </>
  )
}

export default HowItWorks;