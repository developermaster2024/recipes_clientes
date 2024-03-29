import logoBlanco from "../assets/logo-blanco.png";
import logoShort from "../assets/logoR.png";

const SystemInfo = {
    name: "Recipes",
    description: "Find your favorites recipes and shared it with your friends.",
    logo: logoShort,
    logoBlanco: logoBlanco,
    logoShort: logoShort,
    host: 'http://localhost::3000',
    api: process.env.REACT_APP_API_URL,
    localStorageVarPrefix: 'recipes_clients_'
}

export default SystemInfo;