import { Request, Response } from 'express'
import { User, users } from './users'
import { apiConfig } from './api-config'

import * as jwt from 'jsonwebtoken'

export const handleAuthentication = (rep: Request, resp: Response) => {
  const user: User = rep.body

  if(isValid(user)){
    const dbUser = users[user.email]
    const token = jwt.sign({sub: dbUser.email, iss: 'meat-api'}, apiConfig.secret)
    resp.json({name: dbUser.name, email: dbUser.email, accessToken: token})
  }else{
    resp.status(403).json({message: 'Dados inválidos.'})
  }

  function isValid(user: User): boolean {
    if(!user){
      return false
    }
    const dbUser = users[user.email]
    return dbUser !== undefined && dbUser.matches(user)
  }
}
