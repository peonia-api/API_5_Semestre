<br id="topo">

<h1 align="center"> Documentação das rotas</br> Entendendo a lógica da API desenvolvida neste projeto. </h1>

<h2> :dart: Objetivo</h2>

<p align="justify"> Este documento tem por objetivo estabeler a documentação das rotas (requisições) constantes dentro deste projeto. Dessa forma, torna-se possível e mais fácil o entendimento do funcionamento da API criada no Back para consumo no Front, estabelecendo a lógica de funcionamento do aplicativo e os parâmetros necessários para cada método utilizado.</p>
<br>


<h2> 📔 MÉTODO: POST (EQUIPMENT)</h2>

<p align="justify"> Requisição, via JSON, para a criação de um registro de um Equipamento no Banco de Dados.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3001/equipment/createEquipment**

<p align="justify"> Exemplo:</p>

```json
{
    "type":"Poste",
    "numero":"7774",
    "serial":"145AE1236",
    "latitude":"12.4578",
    "longitude":"-12.7853",
    "observations":"Necessita de Manutenção",
    "url":["https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/imagens/Linux.jpeg"],
    "status":true
}
```

<p align="justify"> Parâmetros do Método:</p>

| PARAMS | Value | Description |
| --- | --- | --- |
| `type` | **Poste** | String - Tipo do Equipamento (vai pelo body da requisição)
| `numero` | **7774** | String (varchar) - Número de identificação do Equipamento (vai pelo body da requisição)
| `serial` | **145AE1236** | String (varchar) - Número identificador do Equipamento (vai pelo body da requisição)
| `latitude` | **12.4578** | Number (double precision) - Posição Global do Equipamento em relação à Latitude (vai pelo body da requisição)
| `longitude` | **-12.7853** | Number (double precision) - Posição Global do Equipamento em relação à Longitude (vai pelo body da requisição)
| `observations` | **Necessita de Manutenção** | String - Observações geral do Equipamento (vai pelo body da requisição)
| `url` | **https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/imagens/Linux.jpeg** | String - Url relativa a imagem do Equipamento (assume null caso não tenha imagem). Vai pelo body da requisição)
| `status` | **true** | Boolean - Status do Equipamento (true para Ativo e false para Desativado). Vai pelo body da requisição
<br>


<h2> 📔 MÉTODO: POST (USER)</h2>

<p align="justify"> Requisição, via JSON, para a criação de um registro de um Usuário no Banco de Dados.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3000/user/createUser**

<p align="justify"> Exemplo:</p>

```json
{
    "userName": "Renan Vitor",
    "userEmail": "renan.mendonca@fatec.sp.gov.br",
    "userPassword": "$2b$10$XQ0088QjDfKG25asB2.Jbugiqwzgl1DS7HJJDp2JyYP8hPIGh/MP6",
    "userType": 2,
    "icone": "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/icone/012345678900.18060346807565758.jpeg",
    "userCpf": "41317681874",
    "userMatricula": "012345",
    "userTelefone": "12997647560",
    "id": 34
}
```

<p align="justify"> Parâmetros do Método:</p>

| PARAMS | Value | Description |
| --- | --- | --- |
| `userName` | **Renan Vitor** | String - Nome do usuário
| `userEmail` | **renan.mendonca@fatec.sp.gov.br** | String - E-mail do usuário
| `userPassword` | **$2b$10$XQ0088QjDfKG25asB2.Jbugiqwzgl1DS7HJJDp2JyYP8hPIGh/MP6** | String - Senha criptografada
| `userType` | **2** | Number - Tipo do usuário (1 para Admin / 2 para Usuário comum)
| `icone` | **https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/icone/012345678900.18060346807565758.jpeg** | String - URL da foto do usuário
| `userCpf` | **41317681874** | String - CPF do usuário
| `userMatricula` | **012345** | String - Número de Matrícula do usuário
| `userTelefone` | **12997647560** | String - Número de telefone do usuário
| `id` | **34** | Number - Número de registro do usuário no banco de dados
<br>


<h2> 📔 MÉTODO: POST (LOGIN - USER)</h2>

<p align="justify"> Requisição, via JSON, para o login do usuário no aplicativo</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3000/user/login**

<p align="justify"> Exemplo:</p>

```json
{
    "userEmail": "renan.mendonca@fatec.sp.gov.br",
    "userPassword": "$2b$10$XQ0088QjDfKG25asB2.Jbugiqwzgl1DS7HJJDp2JyYP8hPIGh/MP6",
}
```
<p align="justify"> Parâmetros do Método:</p>

| PARAMS | Value | Description |
| --- | --- | --- |
| `userName` | **Renan Vitor** | String - Nome do usuário
| `userEmail` | **renan.mendonca@fatec.sp.gov.br** | String - E-mail do usuário
<br>


<h2> 📔 MÉTODO: GET (EQUIPMENT)</h2>

<p align="justify"> Requisição para a listagem de todos os Equipamentos cadastrados no aplicativo, retornando os resultados no formado JSON.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3001/equipment/listEquipment**

<p align="justify"> Exemplo:</p>

```json
{
        "_id": "650daa56a3c4ce65afb9b862",
        "type": "Poste",
        "numero": "628",
        "serial": "D-KYEUGG2877",
        "latitude": "12.4569",
        "longitude": "10.4578",
        "observations": "Necessita de manutenção",
        "url": [
            "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/imagens/D-KYEUGG28770.19592657284536147.jpeg"
        ],
        "status": true
    },
    {
        "_id": "650dbc41d5aaa656af0e6b95",
        "type": "Transformador",
        "numero": "897",
        "serial": "T-PDS4565464654",
        "latitude": "-23.253956",
        "longitude": "-45.906574",
        "observations": "Transformador",
        "url": [
            "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/imagens/T-PDS4565464654.jpeg"
        ],
        "status": false
    },
    {
        "_id": "650dbdcba3c4ce65afb9b863",
        "type": "Poste",
        "numero": "567",
        "serial": "P-tygdjgmmm",
        "latitude": "-55.82368",
        "longitude": "-86.646985",
        "observations": "Teste",
        "url": [
            "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/imagens/P-tygdjgmmm.jpeg"
        ],
        "status": false
    }
```

<p align="justify"> Parâmetro do Método:</p>

<p align="justify"> Não exige nenhum parâmetro, tendo em vista que retorna em JSON todos os registros já feitos no banco de dados.</p>
<br>


<h2> 📔 MÉTODO: GET pelo ID (EQUIPMENT)</h2>

<p align="justify"> Requisição para busca e exibição de um Equipamento identificado pelo seu ID no Banco de Dados, retornando o resultado no formado JSON.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3001/equipment/listOne/650daa56a3c4ce65afb9b862**

<p align="justify"> Exemplo:</p>

```json
{
        "_id": "650daa56a3c4ce65afb9b862",
        "type": "Poste",
        "numero": "628",
        "serial": "D-KYEUGG2877",
        "latitude": "12.4569",
        "longitude": "10.4578",
        "observations": "Necessita de manutenção",
        "url": [
            "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/imagens/D-KYEUGG28770.19592657284536147.jpeg"
        ],
        "status": true
    }
```

<p align="justify"> Parâmetro do Método:</p>

| PARAM | Value | Description |
| --- | --- | --- |
| `_id` | **650daa56a3c4ce65afb9b862** | ID de identificação do registro do Equipamento no Banco de Dados. Vai pela URL da requisição.
<br>


<h2> 📔 MÉTODO: GET (USER)</h2>

<p align="justify"> Requisição para a listagem de todos os Usuários cadastrados no aplicativo, retornando os resultados no formado JSON.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3000/user/historicUser**

<p align="justify"> Exemplo:</p>

```json
{
        "id": 32,
        "userCpf": "01234567890",
        "userMatricula": "012345",
        "userTelefone": "99999999999",
        "userName": "Larissa Silva",
        "userEmail": "larissa.silva179@fatec.sp.gov.br",
        "userType": 2,
        "icone": "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/icone/012345678900.18060346807565758.jpeg"
    },
    {
        "id": 28,
        "userCpf": "12345678900",
        "userMatricula": "a1b2c3",
        "userTelefone": "12999999",
        "userName": "Ana",
        "userEmail": "ana@gmail.com",
        "userType": 2,
        "icone": "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/icone/8648364840.3938095478661176.jpeg6d827d6d-651b-4eb8-9427-0216ecca4f7b.jpeg0.4829035627709067.jpeg"
    },
    {
        "id": 4,
        "userCpf": "123786789123",
        "userMatricula": "TDX-3213S8",
        "userTelefone": "125673649736452",
        "userName": "Renan",
        "userEmail": "renan@gmail.com",
        "userType": 1,
        "icone": "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/icone/avatar.png"
    }
```

<p align="justify"> Parâmetro do Método:</p>

<p align="justify"> Não exige nenhum parâmetro, tendo em vista que retorna em JSON todos os registros já feitos no banco de dados.</p>
<br>


<h2> 📔 MÉTODO: GET (VERIFICA E-MAIL - USER)</h2>

<p align="justify"> Requisição para a verificação de existência de um e-mail no banco de dados, retornando o resultado em JSON.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3000/user/especificoUser/renan.mendonca@fatec.sp.gov.br**

<p align="justify"> Exemplo:</p>

```json
{
    "Existe": true
}
```
<p align="justify"> Parâmetro do Método:</p>

| PARAM | Value | Description |
| --- | --- | --- |
| `e-mail` | **renan.mendonca@fatec.sp.gov.br** | Endereço de e-mail a ser verificado. Vai pela URL.
<br>


<h2> 📔 MÉTODO: GET pelo ID (USER)</h2>

<p align="justify"> Requisição para busca e exibição de um Usuário identificado pelo seu ID no Banco de Dados, retornando o resultado no formado JSON.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3000/user/especificoUser/32**

<p align="justify"> Exemplo:</p>

```json
{
    "id": 32,
    "userCpf": "01234567890",
    "userMatricula": "012345",
    "userTelefone": "99999999999",
    "userName": "Larissa Silva",
    "userEmail": "larissa.silva179@fatec.sp.gov.br",
    "userType": 2,
    "icone": "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/icone/012345678900.18060346807565758.jpeg"
}
```

<p align="justify"> Parâmetro do Método:</p>

| PARAM | Value | Description |
| --- | --- | --- |
| `id` | **32** | ID de identificação do registro do Equipamento no Banco de Dados. Vai pela URL da requisição.
<br>


<h2> 📔 MÉTODO: GET pelo E-mail (AUTENTICA E-MAIL - USER)</h2>

<p align="justify"> Requisição para autenticação do e-mail digitado. Se autenticação correta, token de 6 dígitos é gerado para ser enviado em disparo de e-mail ao usuário para fins de autenticação.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3000/auth2fa_email/renan.mendonca@fatec.sp.gov.br**

| PARAM | Value | Description |
| --- | --- | --- |
| `e-mail` | **renan.mendonca@fatec.sp.gov.br** | Endereço de e-mail a ser verificado. Vai pela URL.
<br>


<h2> 📔 MÉTODO: GET (VERIFICA TOKEN)</h2>

<p align="justify"> Requisição para verificação do Token que foi gerado, enviado para o e-mail e está sendo inserido pelo usuário para a redefinição de senha.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3000/auth2fa/getEmail/renanv.f.m@hotmail.com/456TH7**

| PARAM | Value | Description |
| --- | --- | --- |
| `e-mail` | **renan.mendonca@fatec.sp.gov.br** | Endereço de e-mail a ser verificado. Vai pela URL.
| `token` | **456TH7** | Token gerado para a validação de 2 fatores do usuário.
<br>


<h2> 📔 MÉTODO: PUT pelo ID (EQUIPMENT)</h2>

<p align="justify"> Requisição para alterar os dados de um Equipamento específico, identificado pelo seu ID no Banco de Dados.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3001/equipment/updateEquipment/650daa56a3c4ce65afb9b862**

<p align="justify"> Exemplo:</p>

```json
{
    "_id": "650daa56a3c4ce65afb9b862",
    "type": "Poste",
    "numero": "777",
    "serial": "145AE63", <-----
    "latitude": "12.4569",
    "longitude": "10.4578",
    "observations": "Necessita de manutenção",
    "url": [
        "null"
    ],
    "status": false
}
```

<p align="justify"> Parâmetros do Método:</p>

| PARAMS | Value | Description |
| --- | --- | --- |
| `_id` | **650daa56a3c4ce65afb9b862** | ID de identificação do registro do Equipamento no Banco de Dados. Vai pela URL da requisição.
| `type` | **Poste** | String - Tipo do Equipamento (vai pelo body da requisição)
| `numero` | **7774** | String (varchar) - Número de identificação do Equipamento (vai pelo body da requisição)
| `serial` | **145AE1236** | String (varchar) - Número identificador do Equipamento (vai pelo body da requisição)
| `latitude` | **12.4578** | Number (double precision) - Posição Global do Equipamento em relação à Latitude (vai pelo body da requisição)
| `longitude` | **-12.7853** | Number (double precision) - Posição Global do Equipamento em relação à Longitude (vai pelo body da requisição)
| `observations` | **Necessita de Manutenção** | String - Observações geral do Equipamento (vai pelo body da requisição)
| `url` | **https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/imagens/Linux.jpeg** | String - Url relativa a imagem do Equipamento (assume null caso não tenha imagem). Vai pelo body da requisição
| `status` | **true** | Boolean - Status do Equipamento (true para Ativo e false para Desativado). Vai pelo body da requisição
<br>


<h2> 📔 MÉTODO: PUT pelo ID (USER)</h2>

<p align="justify"> Requisição para alterar os dados de um usuário específico, identificado pelo seu ID no Banco de Dados.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3000/user/modifyUser/32**

<p align="justify"> Exemplo:</p>

```json
{
    "id": 32,
    "userCpf": "01234567890",
    "userMatricula": "012345",
    "userTelefone": "99999999999",
    "userName": "Larissa Diniz da Silva",
    "userEmail": "larissa.silva179@fatec.sp.gov.br",
    "userType": 2,
    "icone": "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/icone/012345678900.18060346807565758.jpeg"
}
```

<p align="justify"> Parâmetros do Método:</p>

| PARAMS | Value | Description |
| --- | --- | --- |
| `id` | **32** | Number - Número de registro do usuário no banco de dados
| `userCpf` | **01234567890** | String - CPF do usuário
| `userMatricula` | **012345** | String - Número de Matrícula do usuário
| `userTelefone` | **99999999999** | String - Número de telefone do usuário
| `userName` | **Larissa Diniz da Silva** | String - Nome do usuário
| `userEmail` | **larissa.silva179@fatec.sp.gov.br** | String - E-mail do usuário
| `userType` | **2** | Number - Tipo do usuário (1 para Admin / 2 para Usuário comum)
| `icone` | **https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/icone/012345678900.18060346807565758.jpeg** | String - URL da foto do usuário
<br>


<h2> 📔 MÉTODO: PUT pelo ID (MEU PERFIL)</h2>

<p align="justify"> Requisição para alterar os dados de um usuário específico quando da modificação feita pela Tela - Meu Perfil, indo através do local storage inserido na tela.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3000/user/perfil/32**

<p align="justify"> Exemplo:</p>

```json
{
    "id": 32,
    "userCpf": "01234567890",
    "userMatricula": "012345",
    "userTelefone": "99999999999",
    "userName": "Larissa Diniz da Silva",
    "userEmail": "larissa.silva179@fatec.sp.gov.br",
    "icone": "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/icone/012345678900.18060346807565758.jpeg"
}
```

<p align="justify"> Parâmetros do Método:</p>

| PARAMS | Value | Description |
| --- | --- | --- |
| `id` | **32** | Number - Número de registro do usuário no banco de dados
| `userCpf` | **01234567890** | String - CPF do usuário
| `userMatricula` | **012345** | String - Número de Matrícula do usuário
| `userTelefone` | **99999999999** | String - Número de telefone do usuário
| `userName` | **Larissa Diniz da Silva** | String - Nome do usuário
| `userEmail` | **larissa.silva179@fatec.sp.gov.br** | String - E-mail do usuário
| `icone` | **https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/icone/012345678900.18060346807565758.jpeg** | String - URL da foto do usuário
<br>


<h2> 📔 MÉTODO: PATCH pelo ID (EQUIPMENT)</h2>

<p align="justify"> Requisição exclusiva para a alteração do Status de um Equipamento quando da Ativação e Desativação dele para manobra.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3001/equipment/alterStatusEquipment/650daa56a3c4ce65afb9b862**

<p align="justify"> Exemplo:</p>

```json
{
    "status": false
}
```
<p align="justify"> Parâmetros do Método:</p>

| PARAMS | Value | Description |
| --- | --- | --- |
| `_id` | **650daa56a3c4ce65afb9b862** | ID de identificação do registro do Equipamento no Banco de Dados. Vai pela URL da requisição.
| `status` | **false** | Boolean - Status do Equipamento (true para Ativo e false para Desativado). Vai pelo body da requisição.
<br>


<h2> 📔 MÉTODO: PATCH pelo BODY (PASSWORD)</h2>

<p align="justify"> Requisição exclusiva para a alteração do Password de um Usuário quando da redefinição de senha solicitada por ele.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:3000/user/redefinirSenha**

<p align="justify"> Parâmetros do Método:</p>

| PARAMS | Value | Description |
| --- | --- | --- |
| `id` | **32** | ID de identificação do registro do Usuário no Banco de Dados.
| `userPassword` | **Senha!123489** | Senha que será criptografada e sobreposta a anteriormente cadastrada. Vai através do local storage inserido na tela de Redefinição de senha.
<br>


→ [Voltar ao topo](#topo)


<br>

<h1 align="center"> <img src = "https://user-images.githubusercontent.com/71477357/161321048-dc637b2e-0314-4e07-b2f9-8cda9f653356.png" height="70"  align="auto">
<h5 align="center"> Aprendizagem por Projetos Integrados - Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal </h5>
