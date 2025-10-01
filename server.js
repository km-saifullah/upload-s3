import app from "./app.js";
import { serverPort } from "./config/index.js";

app.listen(serverPort, () => console.log(`http://localhost:${serverPort}`));
