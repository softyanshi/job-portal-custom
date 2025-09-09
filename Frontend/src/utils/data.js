const API_BASE = import.meta.env.VITE_API_URL;
console.log("API_BASE =", API_BASE);

export const USER_API_ENDPOINT = `${API_BASE}/user` ;
export const JOB_API_ENDPOINT =`${API_BASE}/job`;
export const APPLICATION_API_ENDPOINT =`${API_BASE}/application`;
export const COMPANY_API_ENDPOINT =`${API_BASE}/company`;
