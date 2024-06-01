import mongoose, { Schema, model, models } from "mongoose";

const JobPostingSchema = new Schema({
  job: {
    type: String,
    required: [true, "Job is required!"],
  },
  desc: {
    type: String,
    required: [true, "Description is required!"],
  },
  firm: {
    type: String,
    required: [true, "Firm is required!"],
  },
  _location: {
    type: String,
    required: [true, "Location is required!"],
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const JobPosting = models.JobPosting || model("JobPosting", JobPostingSchema);
export default JobPosting;
