import mongoose, { Schema, model, models } from "mongoose";

const AnnouncementSchema = new Schema({
  header: {
    type: String,
    required: [true, "Header is required!"],
  },
  desc: {
    type: String,
    required: [true, "Description is required!"],
  },
});

const Announcement =
  models.Announcement || model("Announcement", AnnouncementSchema);
export default Announcement;
