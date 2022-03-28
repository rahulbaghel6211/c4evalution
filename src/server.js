const app=require("./index");
const connect=require("./configs/db");
app.listen(5124,async function(){
    try {

        await connect();
        console.log("listening a port 5124")
        
    } catch (err) {
        console.log("err conecting"+err);
    }
})