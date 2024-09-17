import { CollectionConfig } from "payload/types";
import { CollectionBeforeChangeHook } from "payload/types";
import mongoose from "mongoose";

const beforeChangeHook: CollectionBeforeChangeHook = async ({
  data, // incoming data to update or create with
  req, // full express request
  operation, // name of the operation ie. 'create', 'update'
  originalDoc, // original document
}) => {
  const Media = mongoose.models.media;
  return data;
};

const Media: CollectionConfig = {
  labels: {
    plural: "Biblioteca",
    singular: "Archivo",
  },
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    disableLocalStorage: true,
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/*", "video/*", "application/pdf"],
  },
  fields: [
    {
      label: "Ruta del archivo",
      name: "fullPath",
      type: "text",
    },
  ],
};

export default Media;
