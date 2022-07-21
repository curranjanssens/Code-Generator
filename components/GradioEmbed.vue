<template>
    <gradio-app :space="space"></gradio-app>
</template>

<script>
export default {
    name: "GradioEmbed",
    props: {
        space: {
            type: String,
            required: true
        }
    }
}
</script>