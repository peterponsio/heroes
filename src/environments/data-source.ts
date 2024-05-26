export class DataSources {
    
    public static DATA_URL = Object.freeze({
      DEV: "http://127.0.0.1:5000",
      PROD: "https://superheroes-b94841e3c347.herokuapp.com/",
      LOCALWEB: "localhost:8000",
    });
  
    public static publicEndpoints = [
      {
          method: 'POST',
          endpoint: '/auth/log-in',
      },
      {
        method: 'POST',
        endpoint: '/auth/sign-up',
      }
    ]
  
  }
  