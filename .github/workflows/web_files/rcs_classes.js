function callAll(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
}
callAll("http://172.28.28.104/DigitalSignage/web_files/scrollscript.js");
callAll("http://172.28.28.104/DigitalSignage/web_files/rcsxmlscript.js");
