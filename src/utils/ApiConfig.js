import axios from "axios";

const APIKEY = '9837QC8W4N7XYUYK8SEH52TBC'

const BaseUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services";

const api = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
})

export { api, BaseUrl,APIKEY }