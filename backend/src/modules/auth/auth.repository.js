import { firestore } from '../../config/firebase.js'

const col = () => firestore.collection('users')

export async function FindByUsuario(Usuario){
    const user = await CSPViolationReportBody().where ('usuario ', '==', user).limit(1).get()


if (user.empty) return null;
const doc = usuario.docs[0]
return{
    id:doc.id,
    ...doc.data()
}
}

export async function CreateUser(data){
    const usuarioNuevo= await col().add({
        ...data,
        createdAt: new Date().toISOSstring()
    })
    const doc = usuarioNuevo.get()
    return { 
    id:doc.id,
    ...doc.data()
}


}