function callAll(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
}
callAll("https://zoras.dssmss.com/web_files/scrollscript.js");
callAll("https://zoras.dssmss.com/web_files/ggsxmlscript.js");
