// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
const axios = require('axios');
const qs = require('qs');

exports.handler = async (event) => {
    let clientId = process.env.ClientId;
    let tokenUrl = process.env.TokenUrl;
    let redirectUrl = process.env.RedirectUrl;
    let authorizationCode = event.queryStringParameters.code;
    
    // Get Token with Auth Code
    axios({
        method: 'POST',
        url: tokenUrl,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({
            grant_type: 'authorization_code',
            client_id: clientId,
            redirect_uri: redirectUrl
        })
    })
    .then(function (response) {
        response.data
    });
    return event;
};