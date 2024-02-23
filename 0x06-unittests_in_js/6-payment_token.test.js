const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('resolves with an object', (done) => {
    const expected = { data: 'Successful response from the API' };
    const unexpected = { data2: 'Successful response from the API' };
    expect(getPaymentTokenFromAPI(true)).to.be.a('promise').that.include(Promise.resolve(expected));
    expect(getPaymentTokenFromAPI(true)).to.be.a('promise').that.does.not.include(Promise.resolve(unexpected));
    done();
  });

  it('it does nothing', (done) => {
    expect(getPaymentTokenFromAPI(false)).to.be.an('undefined');
    done();
  });
});
