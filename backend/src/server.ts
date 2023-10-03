//import config from "config";
import app from "./providers/App";
import connectDB from "./providers/Database";

//const port = config.get('port');

connectDB();
app.listen(8080, () => console.log(`Listening on port 8080.`));