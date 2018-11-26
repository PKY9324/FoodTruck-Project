const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

const algoliasearch = require('algoliasearch')
const client = algoliasearch(
  functions.config().algolia.app_id,
  functions.config().algolia.api_key
)

const ALGOLIA_POSTS_INDEX_NAME = 'foodtruck'

// // Updates the search index when new blog entries are created or updated.
// exports.indexentry = functions.database.ref('/foodtrucks').onWrite(
//     async (data, context) => {
//       const index = client.initIndex(ALGOLIA_POSTS_INDEX_NAME);
//       const firebaseObject = {
//         text: data.after.val(),
//         objectID: context.params.blogid
//       };

//       await index.saveObject(firebaseObject);
//       return data.after.ref.parent.child('last_index_timestamp').set(Date.parse(context.timestamp));
//     });
