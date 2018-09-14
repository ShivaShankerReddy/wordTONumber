'use strict'
let fs = require('fs'),
    expect  = require("chai").expect,
    req = require("../index");


describe("Query test", function() {
    let testCases = JSON.parse(fs.readFileSync("./test/testcases.json"));
    testCases.forEach(element => {
        let query = element.Query,
            expected = element.expected

        it(`returns true or false for ${query}`, function(done) {
            expect(req.wordToNumbers(query)).to.equal(expected);
            done();
        });
    });
});
