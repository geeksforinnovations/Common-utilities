const helpers = require("../utils/helpers");

test("Lowest tier", () => {
    const storage = 10;
    const cost = 4000;
    const expectedCost = helpers.calculateCost(storage);
    expect(cost).toEqual(expectedCost);
});

test("success response generator", () => {
    const inputData = {
        message: { data: 'a' }
    };
    const expectedData = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(inputData)
    };

    expect(expectedData).toEqual(helpers.success(inputData));
});

test("error response generator", () => {
    const inputData = {
        message: "error"
    };
    const expectedData = {
        statusCode: 500,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(inputData)
    };

    expect(expectedData).toEqual(helpers.failure(inputData));
});