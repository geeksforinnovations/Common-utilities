function calculateCost(storage) {
    const rate = storage <= 10
        ? 4
        : storage <= 100
            ? 2
            : 1;

    return rate * storage * 100;
}

function success(body) {
    return buildResponse(200, body);
}

function failure(body, statusCode = 500) {
    return buildResponse(statusCode, body);
}

function buildResponse(statusCode, body) {
    return {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        body: JSON.stringify(body)
    };
}
function isDefined(val) {
    return typeof val !== 'undefined';
  }
  
  function isUndefined(val) {
    return typeof val == 'undefined';
  }
  
  function isNullOrEmpty(val) {
    return val === null || val === '';
  }
  function isArray(val) {
    return Array.isArray(val);
  }

  function isNumber(val) {
      return !isNaN(val)
  }
module.exports = {
    buildResponse: buildResponse,
    failure: failure,
    success: success,
    calculateCost: calculateCost,
    isDefined:isDefined,
    isArray,
    isNullOrEmpty,
    isUndefined,
    isNumber
}
