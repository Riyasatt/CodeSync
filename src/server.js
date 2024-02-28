import Express  from 'express'
import http from 'http'
import {Server} from 'socket.io'

const app = Express()
const server = http.createServer(app)

const io = new Server(server)

const PORT = process.env.PORT || 3000



server.listen(PORT, () =>{
    console.log(`listening on port http://localhost:${PORT}`)
})


