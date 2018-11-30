import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from './fireabaseConfig'

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.database()
export const foodtruckRef = db.ref('foodtrucks')
