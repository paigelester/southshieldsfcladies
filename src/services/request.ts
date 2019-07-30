import Config from 'assets/data/config';

const Promise = require('promise');

class RequestService {
    protected getServiceUrl = (urlLink: string, scriptName: string) => {
        const pathJoin = '/';
        const extension = '.php';

        return pathJoin + urlLink + pathJoin + scriptName + extension;
    };

    protected get = (url: string) => {
        return new Promise(function(accept: any, reject: any) {
            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                try {
                    if (xhttp.readyState === 4) {
                        if (xhttp.status >= 200 && xhttp.status < 300) {
                            accept(JSON.parse(this.responseText));
                        } else {
                            try {
                                reject(JSON.parse(this.responseText));
                            } catch (e) {
                                reject('Error coverting to JSON');
                            }
                        }
                    }
                } catch (err) {
                    reject(err);
                }
            };

            xhttp.open('GET', Config.urlStart + url, true);
            xhttp.send();
        });
    }

    protected post = (url: string, data: any) => {
        return new Promise(function(accept: any, reject: any) {
            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                try {
                    if (xhttp.readyState === 4) {
                        try {
                            accept(JSON.parse(this.responseText));
                        } catch (e) {
                            reject({ message: 'There was a problem dealing with your request. ' + this.responseText});
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }

            xhttp.open('POST', Config.urlStart + url, true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(data));
        });
    }
};

export default RequestService;