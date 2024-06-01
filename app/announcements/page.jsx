"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

const AnnouncementsPage = () => {
  const { data: session } = useSession();
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const response = await fetch("api/announcements");
      const data = await response.json();

      setAnnouncements(data);
    };

    fetchAnnouncements();
  }, []);

  return (
    <>
      {session?.user && (
        <div className="flex items-center justify-center">
          <Link href="/create-announcement" className="inline-block black_btn">
            Duyuru Ekle
          </Link>
        </div>
      )}
      <div className="mt-2 prompt_layout">
        {announcements.map((announcement) => (
          <div key={announcement._id} className="prompt_card">
            <div className="flex justify-between items-start gap-5">
              <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                <Image
                  src="/assets/images/logo.svg"
                  alt="estu logo"
                  width={40}
                  height={40}
                />

                <div className="flex flex-col">
                  <h3 className="font-inter font-bold">
                    {announcement.header}
                  </h3>
                  <p className="my-2 font-satoshi text-sm text-gray-700">
                    {announcement.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnnouncementsPage;
