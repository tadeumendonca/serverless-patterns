// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

exports.handler = async (event) => {
    let redirectUrl = process.env.RedirectUrl;
    // const response = {
    //     statusCode: 302,
    //     headers: {
    //         Location: redirectUrl
    //     }
    // };
    // return response;
    return event;
};