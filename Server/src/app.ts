import express from "express"
import globalErrorHandler from "./middleware/globalHandler"
import noteRoute from "./note/noteRoutes"
import cors from "cors"
import envConfig from "./config/config"
 const app =express()

 //PARSING INCOMING JSON TO HANDLE UNDEFINED ERRORS
 app.use(express.json())

// CORS Configuration
app.use(cors({
    origin:envConfig.frontend_url
})

)

app.use("/api/notes",noteRoute)

// IMAGE uploads here
app.use(express.static("./src/uploads/"))



// Global handler Error
 app.use(globalErrorHandler)
 export default app