export enum ROUTES {
  // WEB
  HOME = "/",
  LOGIN = "/ingresar",
  REGISTER = "/registrarse",
  TERM = "/terminos",
  PRIVACY = "/privacidad",
  ABOUT = "/acerca",
  CONTACT = "/contactanos",
  // APP
  NOT_FOUND = "*",
  DASHBOARD = "/dashboard",
  SETTINGS = "/configuracion",
  CASES = "/casos",
  CASE = "/casos/:id",
  USERS = "/usuarios",
  USER = "/usuarios/:id",
  LAWYERS = "/abogados",
  LAWYER = "/abogados/:id",
  CREATE_CASE = "/crear-caso",
  QUESTIONS = "/consultas",
  QUESTION = "/consultas/:id",
  CREATE_QUESTION = "/crear-consulta",
}
