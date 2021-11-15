export type AmplifyDependentResourcesAttributes = {
    "api": {
        "changyema": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "userPoolGroups": {
            "anyoneGroupRole": "string",
            "adminGroupRole": "string"
        },
        "changyemab6d0d795b6d0d795": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "changyemab6d0d795b6d0d795PostConfirmation": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        }
    },
    "storage": {
        "s310976f2b": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}