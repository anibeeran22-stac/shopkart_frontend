import axios from "axios";

const api=axios.create(
    {

        baseURL:"https://app-0e1f3fef-f94f-470d-a990-2251d27a9678.cleverapps.io/api"
    }
);
export default api;
