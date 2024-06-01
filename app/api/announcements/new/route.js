import { connectToDB } from "@utils/database";
import Announcement from "@models/announcement";

export const POST = async (request) => {
  const { header, desc } = await request.json();

  try {
    await connectToDB();

    const newAnnouncement = new Announcement({ header, desc });
    await newAnnouncement.save();

    return new Response(JSON.stringify(newAnnouncement), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new announcement!", {
      status: 500,
    });
  }
};
