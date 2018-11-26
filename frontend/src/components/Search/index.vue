<template>
  <ais-index
    app-id="GN5E22XFPN"
    api-key="2dd47b9aa13c9ebf4bb356688c7d91b8"
    index-name="foodtruck_location"
  >
    <ais-search-box></ais-search-box>
    <ais-results>
      <template slot-scope="{ result }">
        <ais-highlight :result="result" attribute-name="local" />
      </template>
    </ais-results>
  </ais-index>
</template>

<script>
</script>

<style>
</style>
