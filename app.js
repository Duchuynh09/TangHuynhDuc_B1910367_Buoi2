const express = require("express");
const contactsRouter = require("./app/routes/contact.route");
const cors = require("cors");
const ApiError = require("./app/api-error");
const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false, }));
app.use("/api/contacts",contactsRouter);

// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
// handller 404
// req = request     res = respone

app.use((req,res,next)=>{
    /*
    CODE ở đây sẽ chạy khi không co route được định nghĩa nào
    Khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
    */
    return next(new ApiError(404,"Resorce not found"));
});
// define error-handling middleware last, after other app.use() and routes calls
app.use((err,req,res,next) => {
    // Middleware xử lý lỗi tập trung.
// Trong các đoạn code xử lý ở các route, gọi next(error)
// sẽ chuyển về middleware xử lý lỗi này

return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
    });
});
// express

app.get("/",(req,res) =>{
    res.json({
        message: "trang chu"
    });
} )
module.exports = app;