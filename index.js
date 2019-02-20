var admin = require('firebase-admin')

var serviceAccount = require('./serviceAccountKey.json')

const data = require('./file.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://spoof-my-text.firebaseio.com'
})

data.forEach((element, index) => {
  try {
    delete element._id
    return admin.firestore().collection('users')
      .doc(element.accountName)
      .set(element)
  } catch (err) {
    console.error(err)
  }
})
