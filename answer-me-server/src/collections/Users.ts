import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "role",
      type: "select",
      label: "Rol",
      options: [
        { label: "Usuario", value: "usuario" },
        { label: "Abogado", value: "abogado" },
        { label: "Administrador", value: "administrador" },
      ],
      required: true,
    },
    {
      name: "associatedLawyer",
      type: "relationship",
      relationTo: "lawyers",
      label: "Abogado asociado",
      admin: {
        condition: (data) => data.role === "abogado",
      },
    },
  ],
};

export default Users;
