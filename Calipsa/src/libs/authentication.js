'use strict'

const sysConst = require('../utils/constants');

function auth(type, info) {

    const authType = sysConst.AUTH_METHODS[sysConst.datasourceAuth.DATA_SOURCES[type]];

    if (authType == 'BASIC') {
        return basicAuth(info);
    } else if (authType == 'API_KEY') {
        return apiAuth(info);
    }

    return false;
}

function basicAuth(info) {
    if (info.user == sysConst.USER_NAME && info.pass == sysConst.PASS) {
        return true;
    }

    return false;
}

function apiAuth(info) {
    return sysConst.API_KEYS.includes(info['X-API-KEY']);
}


module.exports.auth = auth;