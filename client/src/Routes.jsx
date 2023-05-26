import { useContext } from "react"
import Register from "./register"
import { UserContext } from "./UserContext"

export default function Routes() {
    const { username, id } = useContext(UserContext)

    if (username) {
        return "Logged in as " + username
    }

    return (
        <Register />
    )
}