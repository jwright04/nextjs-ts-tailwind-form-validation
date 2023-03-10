import Head from 'next/head';
import { Inter } from '@next/font/google';
import GenericForm from '../components/genericForm';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-5">
        <div className="flex justify-center my-8">
          <h1 className="text-3xl font-bold uppercase">
            NextJS 13 Tailwind Form Example
          </h1>
        </div>
        <div className="flex justify-center my-8">
          <GenericForm />
        </div>
      </main>
    </>
  );
}
