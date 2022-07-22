<template>
    <gradio-app :space="space"></gradio-app>
    <!-- <iframe :src="'https://hf.space/embed/' + space + '/+'" frameBorder="0" :title="pageTitle" allow="accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"></iframe> -->
</template>

<script>
export default {
    name: "GradioEmbed",
    props: {
        title: {
            type: String,
            required: true
        },
        space: {
            type: String,
            required: true
        }
    },
    computed: {
        pageTitle() {
            return `${this.title} - AI by CJanssen`
        }
    }
}
</script>

<!-- <style scoped>
iframe {
    width: 100%;
    height: 600px;
    background: white;
}
</style> -->