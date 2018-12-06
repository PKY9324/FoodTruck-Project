const Storage = require('@google-cloud/storage');

const storage = Storage({
  projectId: firebaseProjectId,
  credentials: serviceAccountCredentials
});

const bucketName = 'someFirebaseBucket';

const uploadFile = (filename) => {
  return storage
    .bucket(bucketName)
    .upload(filename)
};

const uploadMultipleFiles = (fileList) => {
  const uploads = fileList.map(uploadFile)
  Promise.all(uploads)
    .then(results => {
      // handle results
    })
    .catch(error => {
      // handle error
    })
};