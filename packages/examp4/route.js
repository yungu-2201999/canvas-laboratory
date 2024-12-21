const url = new URL(location.href);

function getScript() {
    const scriptPath = url.searchParams.get('script');
    const dom = document.createElement('script');
    const i = url.searchParams.get('i');
    if(scriptPath){
        dom.src = `./${scriptPath}`;
    }else {
        dom.src = `./index${i}.js`
    }
    document.head.appendChild(dom);
}

getScript();