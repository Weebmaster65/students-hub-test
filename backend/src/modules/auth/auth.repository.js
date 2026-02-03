import { firestore } from '../../config/firebase.js'

const col = () => firestore.collection('users')

export async function FindByUsuario(usuario){
    const user = await col().where ('usuario', '==', usuario).limit(1).get()
if (user.empty) return null;
const doc = user.docs[0]
return{
    id:doc.id,
    ...doc.data()
}
}

export async function CreateUser(data){
    const usuarioNuevo= await col().add({
        ...data,
        createdAt: new Date().toISOString()
    })
    const doc = await usuarioNuevo.get()
    console.log('@@@ doc =>', doc)
    return { 
    id:doc.id,
    //...doc.data()
    }
}