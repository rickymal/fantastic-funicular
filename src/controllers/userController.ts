import { Request, Response } from "express"
import { getAllUsers } from "../services/getAllUsers"


export const getUserContent = (request : Request, response : Response) => {
    const userId = request.params.id
    const user = getAllUsers(userId)
    return response.json(user)
}

