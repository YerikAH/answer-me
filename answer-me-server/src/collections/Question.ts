import payload from "payload";
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
    create: async ({ req: { user } }) => {
      if (user.associatedCustomer?.plan === "basico") {
        const existingQuestions = await payload.find({
          collection: "questions",
        });
        const questionUser = existingQuestions.docs.filter(
          (item) => item.user.id === user.id
        )?.length;
        if (questionUser >= 4) return false;
      }

      return (
        user.role === "usuario" && user.associatedCustomer.plan !== "basico"
      );
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
      name: "title",
      type: "textarea",
      label: "Pregunta o Consulta",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Descripción de la pregunta o consulta",
      required: true,
    },
    {
      name: "public",
      type: "checkbox",
      label: "¿Esta consulta será pública?",
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
        { label: "Derecho de Familia", value: "familia" },
        { label: "Derecho Civil", value: "civil" },
        { label: "Derecho Penal", value: "penal" },
        { label: "Derecho Laboral", value: "laboral" },
        { label: "Derecho Mercantil", value: "mercantil" },
        { label: "Derecho Fiscal o Tributario", value: "fiscal" },
        { label: "Derecho Inmobiliario", value: "inmobiliario" },
        { label: "Derecho Administrativo", value: "administrativo" },
        { label: "Derecho Internacional", value: "internacional" },
        { label: "Derecho Migratorio", value: "migratorio" },
        { label: "Derecho de Sucesiones", value: "sucesiones" },
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
      defaultValue: () => {
        return "pendiente";
      },
      required: true,
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
  ],
};

export default Questions;
