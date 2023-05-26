import axios from "axios"
import config from "../config"
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = config.baseURL;
  axios.defaults.withCredentials = true;
  console.log(config.baseURL)
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
