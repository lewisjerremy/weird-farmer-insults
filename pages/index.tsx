import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSWR("/api/insult", fetcher);

  async function onGenerateClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    return;
  }

  async function onSaveClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    return;
  }

  async function onShareClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    return;
  }

  return (
    <div>
      <Head>
        <title>Weird Farmer Insults</title>
        <meta name="description" content="Generate weird farmer insults" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" bg-green-600">
        <div className="container mx-auto flex flex-row justify-between py-4">
          <p className="text-2xl font-bold text-white">Weird Farmer Insults</p>

          <div className="flex flex-row gap-8 items-center text-xl">
            <Link href="/dictionary">
              <a className="font-bold text-white">Dictionary</a>
            </Link>
            <Link href="/dictionary">
              <a className="font-bold text-white">Generators</a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-16 items-center text-xl justify-center py-32">
          <h1 className="text-white text-5xl">{`"${data.insult}"`}</h1>
          <div className="flex flex-row gap-8 items-center text-xl">
            <button
              className="text-green-600 bg-white font-bold py-2 px-8 rounded"
              onClick={(e) => onGenerateClick(e)}
            >
              Generate
            </button>
            <button
              className="text-green-600 bg-white font-bold py-2 px-8 rounded"
              onClick={(e) => onSaveClick(e)}
            >
              Favourite
            </button>
            <button
              className="text-green-600 bg-white font-bold py-2 px-8 rounded"
              onClick={(e) => onShareClick(e)}
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
