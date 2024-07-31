// dbLoggerMiddleware.js
export const dbLoggerMiddleware = (schema) => {
    // Apply a hook to all query methods
    ;[
        'find',
        'findOne',
        'findById',
        'findByIdAndUpdate',
        'findByIdAndDelete',
    ].forEach((method) => {
        schema.post(method, function (doc, next) {
            console.log(
                `Data retrieved from ${this.model.modelName} collection:`
            )
            console.log(JSON.stringify(doc, null, 2))
            next()
        })
    })
}
