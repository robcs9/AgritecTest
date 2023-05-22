const https = require('https');
let options = {
    host: 'api.cnptia.embrapa.br',
    path: '/agritec/v1/adubacao/recomendacao?idCultura=56&expectativaProdutividade=1&identificadorMetodoExtracaoFosforo=1&identificadorClasseTexturalSolo=1&capacidadeTrocaCation=0&fosforo=0&potassio=0&materiaOrganica=0&teorArgila=0&saturacaoPorBases=0&prntCalcario=80',
    headers: {
        Authorization: 'Bearer b6228a79-21ca-3697-98d7-9e46ea5b3d8e',
        accept: 'application/json'
    }
};

let data = '';
const req = https.get(options, (res) => {
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', (res) => {

    });
}).on('error', (err) => { console.log("Error: " + err.message) });
req.end();


const port = 8154;
const http = require('http');
http.createServer((req, res) => {
    //res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    const url = req.url;
    switch (url) {
        case '/milho':
            let calagem = JSON.parse(data).data.observacoesCalagem;
            let adubacao = JSON.parse(data).data.observacoesAdubacao;
            res.write('Observações de adubagem para Milho:\n');
            res.write(adubacao);
            res.write('\n\n---\nObservações de calagem para Milho:\n');
            res.write(calagem);
            res.end();
            break;
        case '/trigo':
            let calagem1 = JSON.parse(data).data.observacoesCalagem;
            let adubacao1 = JSON.parse(data).data.observacoesAdubacao;
            res.write('Observações de adubagem para Milho:\n');
            res.write(adubacao1);
            res.write('\n\n---\nObservações de calagem para Milho:\n');
            res.write(calagem1);
            res.end();
            break;
        case '/soja':
            res.end();
            break;
        case '/feijao':
            res.end();
            break;
        case '/arroz':
            res.end();
            break;
        default:
            res.end('Insira na barra de endereço o parâmetro para exibir recomendações de calagem e adubação para a cultura agrícola desejada. Infelizmente, no momento, apenas /milho está funcionando devidamente.');
    }
}).listen(port, () => { console.log(`Server listening on port ${port}`); }).on('error', (err) => {
    console.log("Error: " + err.message)
});