import app from './app'
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const PORT = +(process.env.PORT ?? 4000);
app.listen(PORT,'0.0.0.0',()=> console.log(`server in port ${PORT} is running`));


