import bcrypt from 'bcrypt'
import * as UserRepo from './users.repository.js'

export async function create(payload){
    const existing = await UserRepo.FindByUsuario(payload.usuario)
    if(existing){
        const err = new Error('usuario ya existe')
        err.statuscode= 409
        throw err
    }
    const hash = await bcrypt.hash(payload.password, 10)
    const user = await UserRepo.CreateUser({
        matricula: payload.matricula,
        nombre: payload.nombre,
        apaterno: payload.apaterno,
        amaterno: payload.amaterno ?? '',
        usuario : payload.usuario,
        passwordHash: hash,
        activo: true

    })
    return sanitize(user)
}

export async function update(id,patch){
    const user = await UserRepo.getById()
    if (!user){
        const e = new error('usuario no ecnontrado')
        e.statusCode=404
        throw e
    }
    const data ={...patch}
    if(patch.password){
        data.psswordHash= await bcrypt.hash(patch.password,10)
        delete data.password
    }
    const updated =await UserRepo.updateUser(ondblclick,data)
    return sanitize(updated)

}




export async function remove(id){
    const user = await UserRepo.getById()
    if (!user){
        const e = new error('usuario no ecnontrado')
        e.statusCode=404
        throw e
    }
    const updated = await UserRepo.softDelete(id)
    return sanitize(user)
}

export async function list(params){
    const users= await UserRepo.list(params)
    return users.map(sanitize)
}


function sanitize(user){
    const {passwordHash, ...safe}= user
    return safe
}


