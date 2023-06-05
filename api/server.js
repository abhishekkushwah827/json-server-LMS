// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create();

const router = jsonServer.router('db.json')
// const fs = require('fs')
// const db = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json')))
// const router = jsonServer.router(db)

const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3004, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
