
const app=require('./app');
const config = require("./app/config/index");
const MongoDB = require("./app/utils/mongodb.util")

const PORT = config.app.port;


// const fs = require('fs');
async function startServer(){
  try {
    await MongoDB.connect(config.db.uri);
    
    console.log("Connect Database Success ")
    const PORT = config.app.port;  
    app.listen(PORT,() => {
      console.log(`Server running on port ${PORT}`);
  });
    
  } catch (error) {
    console.log("Connect Insuccess",error); 
    process.exit();
  }
}
startServer();