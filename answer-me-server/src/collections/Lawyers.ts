import { CollectionConfig } from "payload/types";

const Lawyers: CollectionConfig = {
  slug: "lawyers",
  admin: {
    useAsTitle: "fullName",
  },
  labels: {
    plural: "Abogados",
    singular: "Abogado",
  },
  access: {
    create: ({ req: { user } }) => {
      if (user && user.role === "administrador") {
        return true;
      }
      return false;
    },
    update: ({ req: { user } }) => {
      if (user) {
        if (user.role === "administrador") {
          return true;
        } else if (user.role === "abogado") {
          console.log(user);
          return {
            id: {
              equals: user.associatedLawyer.id,
            },
          };
        }
      }
      return false;
    },
    delete: ({ req: { user } }) => {
      if (user && user.role === "administrador") {
        return true;
      }
      return false;
    },
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      label: "Nombre completo",
      required: true,
    },
    {
      name: "licenseNumber",
      type: "text",
      label: "Número de colegiatura",
      required: true,
    },
    {
      name: "specialty",
      type: "select",
      label: "Especialidad",
      options: [
        { label: "Penal", value: "penal" },
        { label: "Civil", value: "civil" },
        { label: "Laboral", value: "laboral" },
      ],
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Correo electrónico",
      required: true,
    },
    {
      name: "phoneNumber",
      type: "text",
      label: "Número de teléfono",
      required: true,
    },
    {
      name: "experience",
      type: "number",
      label: "Años de experiencia",
      required: true,
    },
    {
      name: "availability",
      type: "array",
      label: "Horarios disponibles",
      fields: [
        {
          name: "day",
          type: "text",
          label: "Día",
        },
        {
          name: "time",
          type: "text",
          label: "Hora",
        },
      ],
    },
    {
      name: "caseHistory",
      type: "relationship",
      relationTo: "cases",
      hasMany: true,
      label: "Historial de casos atendidos",
    },
    {
      name: "certificates",
      type: "upload",
      relationTo: "media",
      label: "Certificados o documentos profesionales",
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: "Foto",
    },
  ],
};

export default Lawyers;
