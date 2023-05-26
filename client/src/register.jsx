import { useContext, useState } from "react";
import axios from "axios"
import { UserContext } from "./UserContext";

export default function register( ) {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repeatPassword, setRepeatPassword ] = useState('')

    const { setUsername:setLoggedInUsername, setId } = useContext(UserContext);


    async function register(event) {
      event.preventDefault();
      if ( password === repeatPassword) {
        const data = await axios.post("/account/register", { username, password })
        setLoggedInUsername(username);
        setId(data.id)
      } else {
        console.log("Passwords not matching")
      }
    }

    return(
       <div className="w-full h-screen flex items-center justify-center bg-indigo-100">
         <form className="w-full md:w-1/3 rounded-lg" onSubmit={register}>
           <div className="flex font-bold justify-center mt-6">
             <img className="h-20 w-20 mb-3" src="https://cdn.discordapp.com/icons/1105513866135351356/fea8584eba69ad21636f9c11cb698fdd.webp" ></img>
           </div>
           <h2 className="text-2xl text-center text-gray-200 mb-8">Login</h2>
           <div className="px-12 pb-10">
             <div className="w-full mb-2">
               <div className="flex items-center">
                 <input
                   type="text"
                   placeholder="Username"
                   value={username}
                   onChange={ ev => setUsername(ev.target.value) }
                   className="
                     w-full
                     border
                     rounded
                     px-3
                     py-2
                     text-gray-700
                     focus:outline-none
                   "
                 />
               </div>
             </div>
             <div className="w-full mb-2">
               <div className="flex items-center">
                 <input
                   type="password"
                   placeholder="Password"
                   value= { password }
                   onChange={ ev => setPassword(ev.target.value) }
                   className="
                     w-full
                     border
                     rounded
                     px-3
                     py-2
                     text-gray-700
                     focus:outline-none
                   "
                 />
               </div>
             </div>
             <div className="w-full mb-2">
               <div className="flex items-center">
                 <input
                   type="password"
                   placeholder="Repeat password"
                   value= { repeatPassword }
                   onChange={ ev => setRepeatPassword(ev.target.value) }
                   className="
                     w-full
                     border
                     rounded
                     px-3
                     py-2
                     text-gray-700
                     focus:outline-none
                   "
                 />
               </div>
             </div>
             <button
               type="submit"
               className="
                 w-full
                 py-2
                 mt-8
                 rounded-full
                 bg-blue-400
                 text-gray-100
                 focus:outline-none
               "
             >
               Register
             </button>
           </div>
         </form>
       </div>
    );
}