import { Schema, model } from "mongoose";

const sectionSchema = new Schema({});
const Section = model("Section", sectionSchema);
export default Section;
