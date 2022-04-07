function handler(event){
    var request = event.request
    // var host = request.headers.host
    //

    if(! request.uri.startsWith('/#')){
        request.uri = '/#' + request.uri
    }
    // if(request.uri === '/' || request.uri === ''){
    //     request.uri = '/#'
    // }

    // if(request.uri !== '' && request.uri !== '/' && request.uri !== '/index.html'){
    //     if(host !== undefined){
    //         host = host.value
    //     }
    //     return {
    //         statusCode: 302,
    //         statusDescription: 'Found',
    //         headers: {'location': `https://${host}/index.html`}
    //     }
    // }

    return request
}
