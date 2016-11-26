function PloteusTRClient(username, password) {
    this.username = username;
    this.password = password;
    this.getUri = function (path) {
        return "https://ploteus.iskur.gov.tr/api/Ploteus/" + path;
    };
    this.getHeaders = function () {
        return { 'user-agent': 'ploteus-tr-nodejs/0.0.1', 'Accept': 'application/xml' };
    };
    this.postXml = function (methodName, xmlData, callback) {
        let request = require('request');
        let headers = this.getHeaders();
        headers["content-type"] = "application/xml";
        request({
            method: 'POST',
            uri: this.getUri(methodName),
            headers: headers,
            body: xmlData,
            encoding: "utf8",
            auth: {
                'user': this.username,
                'pass': this.password,
            }},
            function (error, response, body) {
                if (typeof callback === "function") {
                    callback(error, response, body);
                }
            });
    };
}

PloteusTRClient.prototype.uploadLearningOpportunitiesXml = function (xmlData, callback) {
    this.postXml('uploadLearningOpportunitiesXml', xmlData, callback);
};

PloteusTRClient.prototype.uploadQualificationsXml = function (xmlData, callback) {
    this.postXml('uploadQualificationsXml', xmlData, callback);
};

PloteusTRClient.prototype.getXmlStatus = function (requestId, callback) {
    let request = require('request');
    let headers = this.getHeaders();
    request({
        method: 'GET',
        uri: this.getUri('getXmlStatus?requestId=' + requestId),
        headers: headers,
        auth: {
            'user': this.username,
            'pass': this.password,
        }},
        function (error, response, body) {
            if (typeof callback === "function") {
                callback(error, response, body);
            }
        });
};