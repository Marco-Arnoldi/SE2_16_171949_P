var req = require("request");
var base = "http://localhost:1338/";
var options = {followRedirect:false,
			jar:true};

describe("Test pagina home",function()
{
    it("Get",function(done)
    {
        req.get(base+'home',options,function(error,res,body)
        {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    
});


describe("Test pagina aiuto",function()
{
    it("Get",function(done)
    {
        req.get(base+'aiuto',options,function(error,response,body)
        {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    
});


describe("Test pagina ordina",function()
{
    it("Get",function(done)
    {
        req.get(base+'ordina',options,function(error,res,body)
        {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    
});



describe("Test pagina conferma ordine",function()
{
    it("Get",function(done)
    {
        req.get(base+'conferma_ordine',options,function(error,resp,body)
        {
            expect(resp.statusCode).toBe(200);
            done();
        });
    });
    
});


describe("Test pagina ordine vuoto",function()
{
    it("Get",function(done)
    {
        req.get(base+'ordine_vuoto',options,function(error,res,body)
        {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    
});


describe("Test pagina login",function()
{
    it("Get",function(done)
    {
        req.get(base,options,function(error,res,body)
        {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    
});


describe("Test pagina home ",function()
{
    it("post",function(done)
    {
        req.post(base+'home',options,function(error,res,body)
        {
            expect(res.statusCode).toBe(200);
            done();
        });
    });

});


describe("Test pagina pasti orginati ",function()
{
    it("Get",function(done)
    {
        req.get(base+'home',options,function(error,res,body)
        {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    
});

describe("Test invio ordine ",function()
{
    it("Post",function(done)
    {
        req.post(base+"invio_ordine",options,function(error,res,body)
        {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
    
});
    
 