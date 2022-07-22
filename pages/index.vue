<template>
  <div>
      <h1 class="text-center text-lg font-medium text-gray-500">Choose an AI tool from the list:</h1>
      <ul class="text-center text-sm font-medium text-gray-500 mt-6">
        <li><nuxt-link to="/sql" class="hover:text-gray-900">SQL Code Generator</nuxt-link></li>
        <li><nuxt-link to="/regex" class="hover:text-gray-900">Regex Code Generator</nuxt-link></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
