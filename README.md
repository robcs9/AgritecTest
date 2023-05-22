# AgritecTest
Atividade de WEB-2 do IFPE-JBG

A API escolhida foi a [Agritec](https://www.agroapi.cnptia.embrapa.br/store/apis/info?name=Agritec&version=v1&provider=agroapi), desenvolvida pela Embrapa. Esta API provem dados e modelos úteis para o gerenciamento de culturas agrícolas tais como:

> - Época ideal de plantio para dezenas de culturas, com base no zoneamento agrícola de risco climático;
> - Relação de cultivares mais aptas, para 12 culturas (Arroz, Algodão, Amendoim, Cevada, Feijão, Feijão Caupi, Girassol, Mamona, Milho, Soja, Sorgo e Trigo) diferentes;
> - Indicação de adubação e correção de solo conforme resultado prévio de análise de solo, previsão de produtividade e condições climáticas antes e durante a safra para cinco culturas (Arroz, Feijão, Milho, Soja e Trigo).

A escolha desta API se deu pelo fato desta oferecer dados interessantes e relevantes para o nosso projeto anterior que lidava com a listagem e exibição das culturas agrícolas mais importantes em cada estado da região nordeste do Brasil.

**Parâmetros de busca:**
A requisão específica que foi realizada necessita de diversos parâmetros obrigatórios antes do consumo, porém, o parâmetro principal para nós é idCultura (numeração de identificação obtida através previamente pela API, também), que é usado para selecionar uma das 5 culturas (ARROZ, FEIJÃO, MILHO, SOJA, e TRIGO) disponíveis para consulta de recomendações de como tratar do plantio em determinados tipos de solos e climas segundo os dados reunidos pela Embrapa.

**Resultados esperados:**
Recomendações de adubagem e calagem no cultivo de milho mediante o acesso do recurso em http://127.0.0.1/milho

**Observação:**
A chave token em uso possui limite de 1000 requisições e/ou 30 dias de validade (expiração mediante o limite que for atingido primeiro).
