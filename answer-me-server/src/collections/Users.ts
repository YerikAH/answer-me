import { CollectionConfig } from "payload/types";
import CustomAdminError from "../utils/errorClasses";

const Users: CollectionConfig = {
  slug: "users",
  labels: {
    plural: "Usuarios",
    singular: "Usuarios",
  },
  auth: {
    maxLoginAttempts: 5,
    lockTime: 1,
  },
  admin: {
    useAsTitle: "email",
  },
  hooks: {
    beforeLogin: [
      async ({ user, req }) => {
        if (!user.active) {
          throw new CustomAdminError(
            `Tu cuenta esta deshabilitada, consulte con el administrador.`,
            403
          );
        }
        return user;
      },
    ],
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
    create: () => true,
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
      required: true,
      admin: {
        condition: (data) => data.role === "abogado",
      },
    },
    {
      name: "associatedCustomer",
      type: "relationship",
      relationTo: "customer",
      label: "Cliente asociado",
      required: false,
      admin: {
        condition: (data) => data.role === "usuario",
      },
    },
    {
      name: "active",
      type: "checkbox",
      defaultValue: true,
      label: "Activo",
      required: true,
    },
  ],
};

export default Users;
