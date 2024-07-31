import swaggerJSDoc from "swagger-jsdoc";

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
    apis: ["./routes/*.js"], // Path to the API routes in your Node.js application
};

export const swaggerSpec = swaggerJSDoc(options);
