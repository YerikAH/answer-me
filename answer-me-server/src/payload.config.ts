import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Lawyers from "./collections/Lawyers";
import Cases from "./collections/Cases";
import Questions from "./collections/Question";
import Media from "./collections/Media";
import es from "./translations/es.json";
import { CustomLogo, CustomLogoFull } from "./components";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    components: {
      graphics: {
        Logo: CustomLogoFull,
        Icon: CustomLogo,
      },
    },
  },
  i18n: {
    resources: {
      es: {
        translation: es,
      },
    },
    fallbackLng: "en",
    lng: "es",
  },
  editor: slateEditor({}),
  collections: [Users, Lawyers, Cases, Questions, Media],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
