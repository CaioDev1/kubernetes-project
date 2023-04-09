import { NextFunction, Request, Response } from "express"
import Joi from "joi"

export const routeSchemaValidator = (schema: Joi.ObjectSchema, resource?: 'body' | 'query' | 'params') => {
	return (req: Request, res: Response, next: NextFunction) => {
		const payload = (() => {
			if(resource) return req[resource]

			switch(req.method) {
				case 'GET':
				case 'DELETE':
					return req.query
				default:
					return req.body
			}
		})()

		if(!payload) next()

		const {error, value} = schema.validate(payload, {abortEarly: false})

		return error
			? res.status(400).send({...error, apiValidationError: true})
			: next()
	}
}