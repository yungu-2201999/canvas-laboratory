const url = new URL(location.href);

function getScript() {
    const scriptPath = url.searchParams.get('script');
    const dom = document.createElement('script');
    dom.src = `./${scriptPath}`;
    document.head.appendChild(dom);
}

getScript();