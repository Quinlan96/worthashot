import express, { Request, Response, NextFunction, Application } from 'express'
import createError from 'http-errors'
import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'
import { Model } from 'objection'
import knex from './lib/knex'
import ApiError from './utils/errors/ApiError'

import indexRouter from './routes/index'
import apiRouter from './routes/api'

const app: Application = express()

Model.knex(knex)

app.use(bodyParser.json({limit: '50mb'}))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/', indexRouter)
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404, 'Page not found'))
})

// Error handler
app.use((err: ApiError, req: Request, res: Response, next: NextFunction) => {
	// set locals, only providing error in development
	// res.locals.message = err.message
	// res.locals.error = req.app.get('env') === 'development' ? err : {}

	// return the error
	res.status(err.status || 500)
	res.json({
		status: err.status,
		message: err.message,
		stack: err.stack
	})
})

export default app