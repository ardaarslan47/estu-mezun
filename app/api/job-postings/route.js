import { connectToDB } from "@utils/database";
import JobPosting from "@models/job-posting";

export const GET = async (request) => {
  try {
    await connectToDB();

    const jobPostings = await JobPosting.find({});

    return new Response(
      JSON.stringify(jobPostings),
      { status: 200 },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    return new Response("Failed to fetch all job postings!", { status: 500 });
  }
};
