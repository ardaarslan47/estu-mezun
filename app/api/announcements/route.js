import { connectToDB } from "@utils/database";
import Announcement from "@models/announcement";

export const GET = async (request) => {
  try {
    await connectToDB();

    const announcements = await Announcement.find({});

    return new Response(
      JSON.stringify(announcements),
      { status: 200 },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch (error) {
    return new Response("Failed to fetch all announcements!", { status: 500 });
  }
};
