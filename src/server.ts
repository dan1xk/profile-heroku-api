import Application from "./app";

const app = new Application();
const port = process.env.PORT ? Number(process.env.PORT) : 8080;

app.init();
app.start(port);