"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session } = useSession();
  return (
    <div className="mt-8">
      <Image
        src={session?.user.image}
        width={150}
        height={150}
        className="sm:absolute sm:left-10 rounded-full border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-3"
      />
      <section className="py-10 mt-1 sm:absolute left-60">
        <p className="font-bold text-xl">
          İsim:{" "}
          <span className="italic text-gray-600 pl-8">
            {session?.user.name}
          </span>
        </p>
        <p className="font-bold text-xl">
          Email:{" "}
          <span className="italic text-gray-600 pl-5">
            {session?.user.email}
          </span>
        </p>
      </section>
    </div>
  );
};

export default ProfilePage;
