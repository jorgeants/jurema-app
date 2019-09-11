import axios from 'axios';

const locationsBaseUrl = process.env.LOCATIONS_API_URL;
const socialProgramBaseUrl = process.env.SOCIAL_PROGRAM_API_URL;
const baseUrl = process.env.REACT_APP_API_URL;

console.log(locationsBaseUrl);
console.log(socialProgramBaseUrl);
console.log(baseUrl);

export const apiLocation = axios.create({
	baseURL: locationsBaseUrl,
});

export const apiSocialProgram = axios.create({
	baseURL: socialProgramBaseUrl,
});
