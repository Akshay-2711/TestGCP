var http=require('http');
var url=require('url');
var fs=require('fs');

var onRequest=function(req,res){
    var pathname=url.parse(req.url).pathname;
    fs.readFile(pathname.substring(1),
                (err,data)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.write(data.toString());
                    }
                    res.end();
                });

}



http.createServer(onRequest).listen(8888);
console.log("Server is listening at port 8888");