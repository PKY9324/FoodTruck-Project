import admin from 'firebase-admin'

var serviceAccount = require('./serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://foodtruck-223208.firebaseio.com'
})

const db = admin.database()
export const ref = db.ref('foodtrucks')
