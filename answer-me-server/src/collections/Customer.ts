import { CollectionConfig } from "payload/types";

const Customer: CollectionConfig = {
  slug: "customer",
  admin: {
    useAsTitle: "fullName",
  },
  labels: {
    plural: "Clientes",
    singular: "Cliente",
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
              equals: user.associatedCustomer.id,
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
      name: "fullName",
      label: "Nombre Completo",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "Correo Electrónico",
      type: "email",
      required: true,
    },
    {
      name: "phoneNumber",
      label: "Número de Teléfono",
      type: "text",
      required: true,
    },
    {
      name: "address",
      label: "Dirección",
      type: "text",
      required: false,
    },
    {
      name: "photo",
      type: "upload",
      relationTo: "media",
      label: "Foto",
    },
    {
      name: "payMethod",
      label: "Método de Pago",
      type: "select",
      options: [
        {
          label: "Tarjeta de Crédito/Débito",
          value: "tarjeta",
        },
        {
          label: "PayPal",
          value: "paypal",
        },
        {
          label: "Transferencia Bancaria",
          value: "transferencia",
        },
      ],
      required: true,
    },
    {
      name: "plan",
      label: "Plan",
      type: "select",
      options: [
        {
          label: "Basico",
          value: "basico",
        },
        {
          label: "Premium",
          value: "premium",
        },
      ],
      required: true,
    },
  ],
};

export default Customer;
