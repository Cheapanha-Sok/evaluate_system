"use client"
import React from 'react';
import Drop from './dropdown'
import Image from 'next/image';
import Link from 'next/link';
import {useSession} from "next-auth/react"

export default function Navbar() {
 const {data : session} = useSession()
 
  return (
    <div className="sticky top-0 bg-[#014164] z-50">
      <div>

        <div className="Desktop text-white h-20 justify-between items-center hidden md:flex mr-5 ml-5">
          <div>
            <Link href="/">
            <Image src="/logoFE.webp" alt='' width={50} height={50} />
            </Link>
          </div>
          <div className="flex justify-around w-2/2 focus:outline-none focus:ring uppercase">
            <Link className=" hover:bg-white hover:text-black px-5 py-6 transition ease-in-out delay-50 focus:outline-none focus:ring" href="/e-day/1">Evaluation</Link>
            <Link className=" hover:bg-white hover:text-black px-5 py-6 transition ease-in-out delay-50 focus:outline-none focus:ring" href="">Account</Link>
          </div>
        </div>
        <div className="Mobile text-white flex h-20 items-center ml-5 justify-between md:hidden transition duration-200 z-50">
          <Image src="/logoFE.webp" alt='' width={50} height={50} />
          <Drop />
        </div>
      </div>

      <div>

      </div>

    </div>

  );
}
