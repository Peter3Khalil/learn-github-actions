import app from './app'
import { Request, Response, NextFunction } from 'express'
const auth = async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.username === 'admin' && req.body.password === 'admin') {
        next()
    } else {
        return res.status(401).send('Unauthorized')
    }
}

app.get('/user', (req: Request, res: Response) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    res.json(`Welcome user ip:${ip}`)
})
app.post('/login', (req: Request, res: Response) => {
    res.json('Login successful')
})
app.use(auth)
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to my API')
})
