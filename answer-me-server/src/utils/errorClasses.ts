import { APIError } from "payload/errors";

// Definir una clase personalizada que herede de APIError
export class CustomAdminError extends APIError {
  constructor(message: string, statusCode: number) {
    // Asegurarte de pasar los argumentos adecuados al constructor de la clase base
    super(message); // APIError solo toma `message` como argumento principal

    // Definir el código de estado HTTP si es necesario
    this.status = statusCode || 500; // Puedes agregar un código de estado por defecto
  }
}

export default CustomAdminError;
