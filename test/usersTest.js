const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('../lib/sendRequest');
const getUser = require('../data/getUser');
const getUsers = require('../data/getUsers');
const env = require('../endpoint/test');

describe('Verify users request status code and responce header', () => {

    getUser.map((data) => {
        let response;
        let id = parseInt(data.uri.split('/')[2]);

        before(async () => {
            data.uri = env.uri + data.uri;
            response = await sendRequest(data);
        });

        it('Verifying status code', () => {
            expect(response.statusCode).to.eql(200);
        });

        it('Verifying header for user with id ' + id, () => {
            expect(response.headers["content-type"]).to.exist;
        });

        it('Verifying header value for user with id ' + id, () => {
            expect(response.headers["content-type"]).to.be.equal("application/json; charset=utf-8");
        });
    })

});

describe("Verify users requests rsponce body", () => {

        let response;
        let data = getUsers;

        before(async () => {
            data.uri = env.uri + data.uri;
            response = await sendRequest(data);
        });

        it("Verifying responce body of 10 Users", () => {
            let usersArray = response.body;
            expect(usersArray.length).to.be.equal(10);
        });
});