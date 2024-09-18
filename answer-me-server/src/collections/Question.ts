import { CollectionConfig } from "payload/types";

const Questions: CollectionConfig = {
  slug: "questions",
  admin: {
    useAsTitle: "question",
  },
  labels: {
    plural: "Consultas",
    singular: "Consulta",
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
      name: "question",
      type: "textarea",
      label: "Pregunta o Consulta",
      required: true,
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      label: "Usuario que pregunta",
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
    {
      name: "lawyer",
      type: "relationship",
      relationTo: "lawyers",
      label: "Abogado asignado para responder",
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
      name: "category",
      type: "select",
      label: "Categoría de la pregunta",
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
      label: "Estado de la consulta",
      options: [
        { label: "Pendiente", value: "pendiente" },
        { label: "Respondida", value: "respondida" },
        { label: "Cerrada", value: "cerrada" },
      ],
      required: true,
    },
    {
      name: "createdAt",
      type: "date",
      label: "Fecha de creación de la consulta",
      admin: {
        readOnly: true,
      },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: "response",
      type: "textarea",
      label: "Respuesta del abogado",
      admin: {
        condition: (data) =>
          data.status === "respondida" || data.status === "cerrada",
      },
    },
  ],
};

export default Questions;
