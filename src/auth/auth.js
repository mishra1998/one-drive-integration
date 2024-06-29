export const msalConfig = {
    auth: {
        clientId: "3857dd7c-691a-45ac-b07a-83b0c6d85163",
        authority: "https://login.microsoftonline.com/cc25e7ae-22d3-4e90-a57b-ee5d7d366dc9",
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "localStorage", 
        storeAuthStateInCookie: false,
    }
};

export const loginRequest = {
    scopes: ["User.Read", "Files.Read.All"]
};

export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    graphFilesEndpoint: "https://graph.microsoft.com/v1.0/me/drive/root/children"
};
