// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

exports.handler = async (event,context) => {
    let clientId = process.env.ClientId;
    let tokenUrl = process.env.TokenUrl;
    let redirectUrl = process.env.RedirectUrl;
    // let accessToken = event.queryStringParameters.access_token;
    // console.log(`AccessToken: ${accessToken}`)
    console.log(context);
    return event;
};