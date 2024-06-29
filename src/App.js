import React, { useEffect, useState } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig, loginRequest, graphConfig } from './auth/auth';
import axios from 'axios';

const msalInstance = new PublicClientApplication(msalConfig);

const App = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const initializeMsal = async () => {
      try {
        await msalInstance.initialize();
      } catch (error) {
        console.error('Error initializing MSAL:', error);
      }
    };

    initializeMsal();
  }, []);

  const handleLogin = async () => {
    try {
      const loginResponse = await msalInstance.loginPopup(loginRequest);
      const account = loginResponse.account;
      const accessTokenResponse = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account: account
      });

      fetchFiles(accessTokenResponse.accessToken);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const fetchFiles = async (accessToken) => {
    try {
      // const response = await axios.get(graphConfig.graphFilesEndpoint, {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`
      //   }
      // });
      // setFiles(response.data.value);
      setFiles([{name:"hey rajesh"}]);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <ul>
        {files.map(file => (
          <li key={file.id}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
