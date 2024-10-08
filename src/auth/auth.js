export const msalConfig = {
    auth: {
      clientId: "",
      authority: "",
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
