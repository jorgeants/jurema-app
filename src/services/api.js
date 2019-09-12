import axios from 'axios';

const locationsBaseUrl = process.env.REACT_APP_LOCATIONS_API_URL;
const socialProgramBaseUrl = process.env.REACT_APP_SOCIAL_PROGRAM_PROXY_API;

export const apiLocation = axios.create({
	baseURL: locationsBaseUrl,
});

export const apiSocialProgram = axios.create({
	baseURL: socialProgramBaseUrl,
});
