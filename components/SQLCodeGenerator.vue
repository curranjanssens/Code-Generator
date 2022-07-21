<template>
    <gradio-app :space="space"></gradio-app>
</template>

<script>
export default {
    name: "SQLCodeGenerator",
    data() {
        return {
            space: "Gradio-Blocks/Words_To_SQL"
        }
    }
}
</script>