const Utils = require('./utils');

function sendPaymentRequestToApi (totalAmount, totalShipping) {
  Utils.calculateNumber('SUM', totalAmount, totalShipping);
}

module.exports = sendPaymentRequestToApi;
