import { environment } from "../../../environments/environment";


const API_URL = environment.BioticsApiUrl;

export const appSetting = {
  GRID: {
    PAGE_SIZE: 5,
    TOTAL_PAGES: 10,
    END_PAGE: 10,
  },
  API_ENDPOINT: {
    LOGIN: API_URL + 'api/users/authenticate',
    REGISTER: API_URL + 'api/users/register'
  },
  SESSION: {
    INACTIVITY_SESSION_TIMEOUT: 900,
    TIMEOUT_IN_SECONDS_TIME: 15
  },
};
