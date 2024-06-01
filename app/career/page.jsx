"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const CareerPage = () => {
  const { data: session } = useSession();
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    const fetchJobPostings = async () => {
      const response = await fetch("api/job-postings");
      const data = await response.json();

      setJobPostings(data);
    };

    fetchJobPostings();
  }, []);
  return (
    <>
      {session?.user && (
        <div className="flex items-center justify-center">
          <Link href="/create-job-posting" className="inline-block black_btn">
            İş İlanı Ekle
          </Link>
        </div>
      )}
      <div className="mt-2 prompt_layout">
        {jobPostings.map((jobPosting) => (
          <div key={jobPosting._id} className="prompt_card">
            <div className="flex flex-col">
              <div className="flex justify-between items-start gap-5">
                <h3 className="font-satoshi font-semibold text-gray-900">
                  {jobPosting.job}
                </h3>
                <p className="font-inter text-sm text-gray-500">
                  {jobPosting.date.substring(0, 10)}
                </p>
              </div>
              <p className="my-4 font-satoshi text-sm text-gray-700">
                {jobPosting.desc}
              </p>
              <p className="flex font-satoshi text-m text-bold">
                {jobPosting.firm}
                <span className="ml-auto">{jobPosting._location}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CareerPage;
