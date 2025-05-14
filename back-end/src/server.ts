import fastify from "fastify";
import { taskController } from "./controller/TaskController";
import cors from "@fastify/cors";
import { userController } from "./controller/UserController";
import authJwt from "./middleware/authJwt";
import fastifySwagger from "@fastify/swagger";
import { swaggerConfig } from "./config/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

const app = fastify();

    app.register(cors, {
        origin: true,
        methods: ["GET", "POST", "PATCH", "DELETE"]
    });

app.register(fastifySwagger, swaggerConfig as any)
app.register(fastifySwaggerUi, {routePrefix:'/docs', uiConfig: {docExpansion:'list'}})
app.register(authJwt)
app.register(taskController);
app.register(userController);

//.then espera finalizar
const port = 3333;
app.listen({ port: port }).then(() => {
    console.log(`Backend rodando na ${port}!!`)
})
