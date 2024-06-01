import { connectToDB } from "@utils/database";
import JobPosting from "@models/job-posting";

export const POST = async (request) => {
  const { job, desc, firm, _location } = await request.json();

  try {
    await connectToDB();

    const newJobPosting = new JobPosting({ job, desc, firm, _location });
    await newJobPosting.save();

    return new Response(JSON.stringify(newJobPosting), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new job posting!", {
      status: 500,
    });
  }
};
