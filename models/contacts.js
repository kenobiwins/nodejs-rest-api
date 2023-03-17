const { Schema, model } = require("mongoose");
const { mongooseErrorHandler } = require("../helpers");

const contactScheme = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

contactScheme.post("save", mongooseErrorHandler);
const ContactModel = model("contacts", contactScheme);

module.exports = ContactModel;
