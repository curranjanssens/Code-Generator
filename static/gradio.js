function make_script(src) {
    const script = document.createElement('script');
    script.type = 'module';
    script.setAttribute("crossorigin", "");
    script.src = src;
    document.head.appendChild(script);
}
make_script("https://gradio.s3-us-west-2.amazonaws.com/3.1.0/assets/index.73d5e133.js");