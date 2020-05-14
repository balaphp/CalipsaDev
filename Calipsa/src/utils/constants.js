module.exports.datasourceAuth = {
    DATA_SOURCES: {
        WS: 1,
        HTTP: 2
    }
}
module.exports.AUTH_METHODS = {
    1: 'API_KEY',
    2: 'BASIC'
}


module.exports.API_KEYS = [
    'X182J-3998C1-511921-T45CD',
    '51182-RT43X1-329881-54G88'
]

module.exports.API_KEY_RIGHTS = {
    'X182J-3998C1-511921-T45CD': {
        SAVE_DATA: 1,
        SEND_USAGE_STATISTICS: 1,
        VALID_SESSION_TIME: 60
    },
    '51182-RT43X1-329881-54G88': {
        SAVE_DATA: 1,
        SEND_USAGE_STATISTICS: 0,
        VALID_SESSION_TIME: 60
    }
}

module.exports.STATUS_CODES = {

    'UNAUTHORIZED': 401,
    'SUCCESS': 200,
}

module.exports.USER_NAME = 'TEST';
module.exports.PASS = 'TEST';
module.exports.Sources = {
    'API': 'API',
    'WS': 'Web Socket'
}
