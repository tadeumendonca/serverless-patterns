// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

exports.handler = function (event, context) {
	context.succeed(JSON.stringify(event));
};