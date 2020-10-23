

const requestHandler = (req,res) => {
    const {url,method,headers} = req;

  
    
    if(url === '/create-user' && method === 'POST')
    {
            const body = [];
            req.on('data',(chunk)=>{
                body.push(chunk);
            });

            return req.on('end',()=>{

                const parseBody  = Buffer.concat(body).toString();
                console.log(parseBody);
            });
            res.writeHead(302,{'Location':'/'});
             res.end();
    }


    if(url === '/')
    {
         res.setHeader('Content-Type','text/html');
        res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
                <form action="/create-user" method="post">
                    <input type="text" name="username">
                    <button>Submit</button>
                </form>
        </body>
        </html>`);
        return res.end();
    }

    

    if(url === '/users')
    {
            res.setHeader('Content-Type','text/html');
            res.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Document</title>
            </head>
            <body>
                    <ul>
                        <li>User1</li>
                        <li>User2</li>
                        <li>User3</li>
                    </ul>
            </body>
            </html>`);
            return res.end();
    }

         res.setHeader('Content-Type','text/html');
        res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Document</title>
        </head>
        <body>
               <h1>Hello</h1>
        </body>
        </html>`)
        res.end();



}

module.exports = requestHandler;
