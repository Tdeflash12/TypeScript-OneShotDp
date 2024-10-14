import {config} from 'dotenv'
config()
const envConfig ={
    port : process.env.PORT,
    mongobString : process.env.MONGODB_URL,
    backend_url : process.env.BACKEND_URL,
    environment : process.env.NODE_ENV,
    frontend_url : process.env.FRONTEND_URL

   
}
export default envConfig