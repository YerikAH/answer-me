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
      if (!user) return false;
      return user.role === "usuario";
    },
    read: ({ req: { user } }) => {
      if (user.role === "administrador" || user.role === "abogado") {
        return true;
      }
      return {
        createdBy: {
          equals: user.id,
        },
      };
    },
    update: ({ req: { user }, data }) => {
      if (user.role === "administrador") return true;
      if (user.role === "abogado") {
        return !data.assignedLawyer || data.assignedLawyer === user.id;
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
    },
    {
      name: "createdAt",
      type: "date",
      label: "Fecha de creación del caso",
      required: true,
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
      name: "assignedUser",
      type: "relationship",
      relationTo: "users",
      label: "Usuario asignado",
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
    },
    {
      name: "resolution",
      type: "textarea",
      label: "Resolución",
    },
  ],
};

export default Cases;
