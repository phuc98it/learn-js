const promiseFunc = (message) => {
  return new Promise((resolve) => {
    // code to collect
    resolve(message);
  });
};

// Get data XML
const getDataXml = async (message) => {
  return promiseFunc(message);
};

// Transfer data XML to Json
const xmlToJson = async (message) => {
  return promiseFunc(message);
};

// Show data Json
const showJsonData = async (message) => {
  return promiseFunc(message);
};

module.exports = {
  getDataXml,
  xmlToJson,
  showJsonData,
};
