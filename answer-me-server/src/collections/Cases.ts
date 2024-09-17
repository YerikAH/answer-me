import { CollectionConfig } from "payload/types";

const Cases: CollectionConfig = {
  slug: "cases",
  admin: {
    useAsTitle: "caseID",
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
        // Otras áreas del derecho
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
    },
    {
      name: "assignedUser",
      type: "relationship",
      relationTo: "users",
      label: "Usuario asignado",
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
