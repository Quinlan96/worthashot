import app from '../app'
import debug from 'debug'
import http from 'http'

/**
 * Event listener for HTTP server "error" event.
 */

const onError = (error: NodeJS.ErrnoException) => {
	if (error.syscall !== 'listen') {
		throw error
	}

	const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges')
			process.exit(1)
			break
		case 'EADDRINUSE':
			console.error(bind + ' is already in use')
			process.exit(1)
			break
		default:
			throw error
	}
}

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
	const addr = server.address()
	const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
	debug('Listening on ' + bind)
}

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '8081'

app.set('port', port)

debug('server:server')

/**
 * Create HTTP server.
 */

const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

console.log('Server running on port', port)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

