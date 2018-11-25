<template>
    <p>{{ foo }}</p>
</template>

<script>
import { db } from '../../../config/firebaseInit.js'
const query = db
  .ref('foodtrucks/')
  .orderByValue()
  .on('value', data => {
    data.forEach(data => {
      console.log(data.key + ' ' + data.val())
    })
  })

export default {
  firebase: () => {
    return {
      foo: query
    }
  },
  created() {}
}
</script>

<style>
</style>
