import { AllListing } from '@/components/dashboard/AllListing';
import Head from 'next/head'
import Image from 'next/image'

const Properties =() => {
  return (
    <>
      <Head>
        <title>Properties</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <AllListing />
      </main>
    </>
  )
}

export default Properties;