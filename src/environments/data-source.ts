export class DataSources {
    
    public static DATA_URL = Object.freeze({
      DEV: "https://superheroes-b94841e3c347.herokuapp.com/",
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
  