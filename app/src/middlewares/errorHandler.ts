import { ErrorRequestHandler } from "express";

export const handler: ErrorRequestHandler = async (err, req, res, next) => {
    if(res.headersSent) {
        return next(err)
    }

    console.error(err.stack)

    res.status(400).json({
        error: err.message
    })
}