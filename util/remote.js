const Formatter = require("./formatter");
// const ApiClient = require("./api-client"); // Any API Client implementation. Can be axios
const Parser = require("./parser");

const url = `http://localhost:8000/subscription?wsdl`;

module.exports = class Remote {
  static async getStatus(creator_id, subscriber_id) {
    try {
      let payload = {
        getStatus: {
          creator_id: creator_id,
          subscriber_id: subscriber_id,
        },
      };

      const headers = {
        headers: {
          "Content-Type": "text/xml; charset=utf-8",
          "soapAction": "http://soap.binotify.com/getStatus",
          "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.151 Safari/535.19"
        },
      };

      let args = Formatter.convertJsonToSoapRequest(payload);
      //   let remoteResponse = await ApiClient.post(url, args, headers);
      let remoteResponse = await fetch(url, {
        method: "POST",
        body: args,
        headers: headers,
      });
      remoteResponse = await Parser.convertXMLToJSON(remoteResponse);

      console.log(remoteResponse);
    } catch (err) {
      throw new Error(
        `Oops something went wrong. Please try again later ${JSON.stringify(
          err
        )}`
      );
    }
  }
};
