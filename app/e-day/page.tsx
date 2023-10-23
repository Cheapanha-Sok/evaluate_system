import DepartmentsForm from "@/components/deparments-form";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
export default async function page() {
  const { data : session} = useSession()
  console.log({session})
  return (
    <div>
      <div>
        <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl text-center my-10">
          Engineering's Day
        </h1>
        <div className="flex justify-center ">
          <Link href="/e-day/create" className="bg-blue-600 px-5 py-4 flex items-center text-white rounded-md">
            Add New
            <Image
              className="ml-2"
              src="/add.svg"
              alt=""
              width={22}
              height={22}
            />
          </Link>
        </div>
        <DepartmentsForm />
      </div>
    </div>
  );
}
