import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()
const PORT = process.env.PORT || 4001
app.use(
    cors({
        origin: '*',
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
export default app
