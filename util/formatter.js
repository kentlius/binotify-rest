const Parser = require("./parser");

module.exports = class Formatter {
  static convertJsonToSoapRequest(jsonArguments) {
    let soapBody = Parser.parseJSONBodyToXML(jsonArguments);

    return `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns="http://tempuri.org/">
        <soap:Header>
            <ns2:apiKey xmlns:ns2="http://soap.binotify.com/">3dbec8e7-4c44-4664-b3c8-b69020bf619e</ns2:apiKey>
        </soap:Header>
        <soap:Body>
            ${soapBody}
        </soap:Body>
        </soap:Envelope> `;
  }
};
