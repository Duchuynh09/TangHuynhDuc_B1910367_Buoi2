const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        uri:process.env.MONGODB_URI || "mongodb+srv://admin:2KSQKL2JD9AxQjBH@cluster0.dvbx71s.mongodb.net/?retryWrites=true&w=majority"
        // mongodb+srv://admin:2KSQKL2JD9AxQjBH@cluster0.dvbx71s.mongodb.net/test"
    }
    };

module.exports = config; 

    // passw1 :2KSQKL2JD9AxQjBH
    // passw2 :MSElThGzlQRvPni9