<template>
  <ais-index :search-store="searchStore">
    <ais-input></ais-input>
    <ais-results v-show="searchStore.query.length > 0">
      <template slot-scope="{ result }">
        <div>
          <ais-highlight :result="result" attribute-name="local"></ais-highlight>
        </div>
      </template>
    </ais-results>
  </ais-index>
</template>

<script>
import { createFromAlgoliaCredentials } from 'vue-instantsearch'

const searchStore = createFromAlgoliaCredentials(
  'GN5E22XFPN',
  '2dd47b9aa13c9ebf4bb356688c7d91b8'
)

searchStore.indexName = 'foodtruck_location'

export default {
  data() {
    return { searchStore }
  }
}
</script>

<style lang="scss">
</style>
