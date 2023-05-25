import { useState } from "react";

export default function register( ) {
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repeatPassword ] = useState('')

    return(
       <div class="w-full h-screen flex items-center justify-center bg-indigo-100">
         <form class="w-full md:w-1/3 rounded-lg">
           <div class="flex font-bold justify-center mt-6">
             <img class="h-20 w-20 mb-3" src="https://cdn.discordapp.com/icons/1105513866135351356/fea8584eba69ad21636f9c11cb698fdd.webp" ></img>
           </div>
           <h2 class="text-2xl text-center text-gray-200 mb-8">Login</h2>
           <div class="px-12 pb-10">
             <div class="w-full mb-2">
               <div class="flex items-center">
                 <input
                   type="text"
                   placeholder="Username"
                   value={username}
                   onChange={ ev => setUsername(ev.target.value) }
                   class="
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
             <div class="w-full mb-2">
               <div class="flex items-center">
                 <input
                   type="password"
                   placeholder="Password"
                   value= { password }
                   onChange={ ev => setPassword(ev.target.value) }
                   class="
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
             <div class="w-full mb-2">
               <div class="flex items-center">
                 <input
                   type="password"
                   placeholder="Repeat password"
                   class="
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
               class="
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