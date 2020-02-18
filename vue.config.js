module.exports = {
    devServer:{
        open:false,
        port:8083,
        proxy:{
            "/structr":{
                target:"http://localhost:8082",
                changeOrigin:true,
            }
        }
    }
}