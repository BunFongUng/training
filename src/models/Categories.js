import mongoose, { Schema } from 'mongoose';

// no need to define schema for this collection
// coz we do no need touched exists collection.
const CategoriesSchema = new Schema({}, { strict: false });

export default mongoose.model('Categories', CategoriesSchema);
