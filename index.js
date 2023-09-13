import 'dotenv/config'
import app from "./proyect/app.js";

const port = 3000 || process.env.PORT;

app.listen(port, () => console.log(`server RUN ON PORT ${port}`));