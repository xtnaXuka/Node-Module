const https = require('https')
const http = require('http')
const fs = require('fs')
const port = 3000
http.createServer((req, res)=>{
    if(req.url.match(/^\/ghibli=people/)){
        res.writeHead(200,'Content-Type : application/html')
        https.get('https://ghibliapi.herokuapp.com/people', (response)=>{
            let data = []
            function datas(image){
                // console.log(image);
                fs.writeFileSync('film.txt', image);
                console.log('film',fs.readFileSync('films.txt').toString().split(' ').length);
                console.log('data',JSON.parse(Buffer.concat(data).toString()).length);
                if(JSON.parse(Buffer.concat(data).toString()).length > fs.readFileSync('films.txt').toString().split(' ').length){

                    fs.appendFileSync('films.txt', image);
                    console.log('aa');
                }
            }

            response.on('data', (chunk)=>{
                data.push(chunk)
            })
            response.on('end', ()=>{
               setTimeout(()=>{
                   res.write("asd")
               },1000)
                const people = JSON.parse(Buffer.concat(data).toString());
                // console.log(people);
                people.map((p,i)=>{
                    
                    https.get(`${p.films[0]}`, (response)=>{
                        let data1 = []
                        response.on('data', (chunk)=>{
                            data1.push(chunk)
                        })
                        response.on('end',()=>{
                            const films = JSON.parse(Buffer.concat(data1).toString());
                            // console.log('adsas',films.image);
                            datas(`${films.image} `)
                            res.write(
                                `<table> <tr> <td>${p.name}</td> <td>asd</td><td> ${p.age}</td> <td> ${p.gender}</td></td></tr>  </table>`
                              );

                        } )
                        
                    })
                    const lada = fs.readFileSync('film.txt').toString()
                    const lada1 = fs.readFileSync('films.txt').toString()
                    // console.log(lada1.split(' ')[i]);
                    // lata = JSON.parse(Buffer.concat(lada).toString())
                    // console.log('asda',lada.toString());
                    res.write(
                        `<table> <tr> <td>${p.name}</td> <td> ${p.age}</td> <td> ${p.gender}</td> <td> <img src=${lada1.split(' ')[i]} style='width: 100px' alt="" /></td> </tr>  </table>`
                      );
                })
                res.end()
            })
        })
    }
    else{
        res.writeHead(404, 'Content-Type : text/plain')
        res.end('error')
    }
}).listen(3000)
console.log('server is listening on ' ,port);