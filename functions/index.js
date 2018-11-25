const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

const algoliasearch = require('algoliasearch')
const algolia = algoliasearch(
  functions.config().algolia.appid,
  functions.config().algolia.adminkey
)

exports.updateIndex = functions.database.ref('foodtrucks').onWrite(event => {
  const index = algolia.initIndex('foodtruck')

  const bookId = event.params.bookId
  const data = event.data.val()

  if (!data) {
    return index.deleteObject(bookId, err => {
      if (err) throw err
      console.log('Removed from Algolia Index', bookId)
    })
  }

  data['objectID'] = bookId

  return index.saveObject(data, (err, content) => {
    if (err) throw err
    console.log('Updated in Algolia Index', data.objectID)
  })
})
