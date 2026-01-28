import admin from 'firebase-admin'
import { env } from './env.js'

console.log(process.env.FIREBASE_PROJECT_ID);

if(!admin.apps.lenght){
    admin.initializeApp({

        credential: admin.credential.cert({
            projectId: env.FIREBASE_PROJECT_ID,
            clientEmail: env.FIREBASE_CLIENT_EMAIL,
            privateKey: env.FIREBASE_PRIVATE_KEY
            
        })
    });
}
export const firestore = admin.firestore()
export const FieldValue = admin.firestore.FieldValue
