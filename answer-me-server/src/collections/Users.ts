import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  labels: {
    plural: "Usuarios",
    singular: "Usuarios",
  },
  auth: {
    maxLoginAttempts: 5,
    lockTime: 600000,
  },
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) {
        if (user.role === "administrador" || user.role === "abogado") {
          return true;
        }
        if (user.role === "usuario") {
          console.log("Es user", user);
          return {
            id: {
              equals: user.id,
            },
          };
        }
      }
      return false;
    },
    update: ({ req: { user } }) => {
      if (user) {
        if (user.role === "administrador") {
          return true;
        }
        return {
          id: user.id,
        };
      }
      return false;
    },
    create: ({ req: { user } }) => {
      if (user && user.role === "administrador") {
        return true;
      }
      return false;
    },
    delete: () => false,
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
      access: {
        create: ({ req: { user } }) => {
          return user?.role === "administrador";
        },
        update: ({ req: { user } }) => {
          return user?.role === "administrador";
        },
        read: () => true,
      },
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
