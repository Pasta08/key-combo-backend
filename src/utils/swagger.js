import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from 'swagger-ui-express'
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "My API",
        version: "1.0.0",
        description: "My API Description",
    },
    servers: [
        {
            url: "http://localhost:3000",
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ["./src/routes/*.js", "./src/models/*.js"], // Path to the API routes in your Node.js application
};
const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    //Swagger page
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

    //Docs in Json format
    app.get("docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json")
        res.sed(swaggerSpec)
    })
    console.info(`Swagger-doc avaible at http://localhost:${port}/api-docs`)
} 


export default swaggerDocs