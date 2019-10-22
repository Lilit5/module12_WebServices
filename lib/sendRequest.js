const request = require('request-promise');

function sendRestRequestWithHeader(opts) {
    let options = {
        uri: opts.uri,
        method: opts.method,
        headers: opts.header,
        json: true,
        resolveWithFullResponse: true
    };
    return request(options).then((response) => {
        return response;
    });

};

module.exports = sendRestRequestWithHeader;