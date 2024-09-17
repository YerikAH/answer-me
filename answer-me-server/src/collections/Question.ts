import { CollectionConfig } from "payload/types";

const Questions: CollectionConfig = {
  slug: "questions",
  admin: {
    useAsTitle: "question",
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
    },
    {
      name: "lawyer",
      type: "relationship",
      relationTo: "lawyers",
      label: "Abogado asignado para responder",
    },
    {
      name: "category",
      type: "select",
      label: "Categoría de la pregunta",
      options: [
        { label: "Penal", value: "penal" },
        { label: "Civil", value: "civil" },
        { label: "Laboral", value: "laboral" },
        // Otras áreas del derecho
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
