import { CollectionConfig } from "payload/types";

const Cases: CollectionConfig = {
  slug: "cases",
  admin: {
    useAsTitle: "caseID",
  },
  labels: {
    plural: "Casos",
    singular: "Caso",
  },

  access: {
    create: ({ req: { user } }) => {
      return user.role === "usuario";
    },
    read: ({ req: { user } }) => {
      if (user.role === "administrador" || user.role === "abogado") {
        return true;
      }
      return {
        user: {
          equals: user.id,
        },
      };
    },
    update: ({ req: { user } }) => {
      if (user.role === "abogado" || user.role === "administrador") {
        return true;
      }
      return false;
    },
    delete: () => false,
  },
  fields: [
    {
      name: "caseID",
      type: "text",
      label: "ID del caso",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Descripción del problema legal",
      required: true,
    },
    {
      name: "caseType",
      type: "select",
      label: "Tipo de consulta",
      options: [
        { label: "Penal", value: "penal" },
        { label: "Civil", value: "civil" },
        { label: "Laboral", value: "laboral" },
      ],
      required: true,
    },
    {
      name: "status",
      type: "select",
      label: "Estado del caso",
      options: [
        { label: "Pendiente", value: "pendiente" },
        { label: "En revisión", value: "en_revision" },
        { label: "Resuelto", value: "resuelto" },
      ],
      required: true,
      defaultValue: () => {
        return "pendiente";
      },
      access: {
        read: () => true,
        create: ({ req: { user } }) => {
          return user?.role === "administrador" || user?.role === "abogado";
        },
        update: ({ req: { user } }) => {
          return user?.role === "administrador" || user?.role === "abogado";
        },
      },
    },
    {
      name: "createdAt",
      type: "date",
      label: "Fecha de creación del caso",
      required: true,
      admin: {
        readOnly: true,
      },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: "deadline",
      type: "date",
      label: "Fecha límite de resolución",
    },
    {
      name: "assignedLawyer",
      type: "relationship",
      relationTo: "lawyers",
      label: "Abogado asignado",
      access: {
        create: ({ req: { user } }) => {
          return user?.role === "administrador" || user?.role === "abogado";
        },
        update: ({ req: { user } }) => {
          return user?.role === "administrador" || user?.role === "abogado";
        },
        read: ({ req: { user } }) => {
          return true;
        },
      },
    },
    {
      name: "documents",
      type: "upload",
      relationTo: "media",
      label: "Documentos adjuntos",
      required: false,
    },
    {
      name: "lawyerNotes",
      type: "textarea",
      label: "Notas del abogado",
      access: {
        read: () => true,
        create: ({ req: { user } }) => {
          return user?.role === "administrador" || user?.role === "abogado";
        },
        update: ({ req: { user } }) => {
          return user?.role === "administrador" || user?.role === "abogado";
        },
      },
    },
    {
      name: "resolution",
      type: "textarea",
      label: "Resolución",
      access: {
        read: () => true,
        create: ({ req: { user } }) => {
          return user?.role === "administrador" || user?.role === "abogado";
        },
        update: ({ req: { user } }) => {
          return user?.role === "administrador" || user?.role === "abogado";
        },
      },
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      label: "Usuario que que creo que caso",
      required: true,
      access: {
        create: () => false,
        read: () => true,
        update: () => false,
      },
      defaultValue: ({ user }) => {
        return user?.id;
      },
    },
  ],
};

export default Cases;
