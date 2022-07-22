<template>
    <div class="relative bg-white border-b-2 border-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <nuxt-link to="/"><h1 class="text-xl font-bold text-gray-500">AI <small class="text-xs">by CJanssens</small></h1></nuxt-link>
                </div>

                <nuxt-link to="/sql" class="text-base font-medium text-gray-500 hover:text-gray-900">SQL Code Generator</nuxt-link>
                <nuxt-link to="/regex" class="text-base font-medium text-gray-500 hover:text-gray-900">Regex Code Generator</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteHeader"
}
</script>