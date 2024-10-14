import app from "../Server/src/app"
import envConfig from "./src/config/config";
import connectTODatabase from "./src/config/db";

const startServer = async()=>{
    await connectTODatabase()
    const port =envConfig.port || 4000
    app.listen(port,()=>{
        console.log(`Server Started started at port ${port}`)
    })
}
startServer()