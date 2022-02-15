// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

exports.handler = async (event,context) => {
    let baseAuthUrl = process.env.AuthUrl;
    let clientId = process.env.ClientId;
    let redirectUrl = process.env.RedirectUrl;
    const response = {
        statusCode: 302,
        headers: {
            Location: `${baseAuthUrl}?response_type=token&client_id=${clientId}&redirect_uri=${redirectUrl}&state=STATE&scope=email`
        }
    };
    return response;
};