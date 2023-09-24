<br id="topo">

<h1 align="center"> Documentação das rotas</br> Documentação da API desenvolvida nesta API. </h1>
<p align="center">
    <a href="#objetivo">Objetivo</a> | 
    <a href="#post">Método POST</a> |
    <a href="#get">Método GET</a> |
    <a href="#getespecifico">Método GET pelo ID</a> |
    <a href="#update">Método PUT pelo ID</a> |
    <a href="#status">Método PATCH pelo ID</a> |
</p>

<span id="objetivo">

<h2> :dart: Objetivo</h2>

<p align="justify"> Este documento tem por objetivo estabeler a documentação das rotas (requisições) constantes dentro deste projeto. Dessa forma, torna-se possível e mais fácil o entendimento do funcionamento da API criada no Back para consumo no Front, estabelecendo a lógica de funcionamento do aplicativo e os parâmetros necessários para cada método utilizado.</p>
<br>


<span id="post">

<h2> 📔 MÉTODO POST</h2>

<p align="justify"> Requisição, via JSON, para a criação de um registro de um Equipamento no Banco de Dados.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:27017/equipment/createEquipment**

<p align="justify"> Exemplo:</p>

```json
{   "type":"Poste",
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
| `type` | **Poste** | String - Tipo do Equipamento
| `numero` | **7774** | String (varchar) - Número de identificação do Equipamento
| `serial` | **145AE1236** | String (varchar) - Número identificador do Equipamento
| `latitude` | **12.4578** | Number (double precision) - Posição Global do Equipamento em relação à Latitude
| `longitude` | **-12.7853** | Number (double precision) - Posição Global do Equipamento em relação à Longitude
| `observations` | **Necessita de Manutenção** | String - Observações geral do Equipamento
| `url` | **https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/imagens/Linux.jpeg** | String - Url relativa a imagem do Equipamento (assume null caso não tenha imagem)
| `status` | **true** | Boolean - Status do Equipamento (true para Ativo e false para Desativado)
<br>


<span id="get">

<h2> 📔 MÉTODO GET</h2>

<p align="justify"> Requisição para a listagem de todos os Equipamentos cadastrados no aplicativo, retornando os resultados no formado JSON.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:27017/equipment/listEquipment**

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
        "observations": "Transformador ",
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
        "observations": "Teste dasdsadasdasdasd",
        "url": [
            "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/imagens/P-tygdjgmmm.jpeg"
        ],
        "status": false
    }
```

<p align="justify"> Parâmetros do Método:</p>

<p align="justify"> Não exige parâmetros, tendo em vista que retorna em JSON todos os registros já feitos no banco de dados.</p>
<br>


<span id="getespecific">

<h2> 📔 MÉTODO GET pelo ID</h2>

<p align="justify"> Requisição para busca e exibição de um Equipamento identificado pelo seu ID no Banco de Dados, retornando o resultado no formado JSON.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:27017/equipment/listEquipment/650daa56a3c4ce65afb9b862**

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
<p align="justify"> Parâmetros do Método:</p>

| PARAMS | Value | Description |
| --- | --- | --- |
| `_id` | **650daa56a3c4ce65afb9b862** | ID de identificação do registro do Equipamento no Banco de Dados. Vai pela URL da requisição.
<br>


<span id="update">

<h2> 📔 MÉTODO PUT pelo ID</h2>

<p align="justify"> Requisição para alterar os dados de um Equipamento específico, identificado pelo seu ID no Banco de Dados.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:27017/equipment/updateEquipment/650daa56a3c4ce65afb9b862**

<p align="justify"> Exemplo:</p>

```json
{
    "_id": "650daa56a3c4ce65afb9b862",
    "type": "Poste",
    "numero": "777",
    "serial": "145AE63",
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
| `type` | **Poste** | String - Tipo do Equipamento
| `numero` | **7774** | String (varchar) - Número de identificação do Equipamento
| `serial` | **145AE1236** | String (varchar) - Número identificador do Equipamento
| `latitude` | **12.4578** | Number (double precision) - Posição Global do Equipamento em relação à Latitude
| `longitude` | **-12.7853** | Number (double precision) - Posição Global do Equipamento em relação à Longitude
| `observations` | **Necessita de Manutenção** | String - Observações geral do Equipamento
| `url` | **https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/imagens/Linux.jpeg** | String - Url relativa a imagem do Equipamento (assume null caso não tenha imagem)
| `status` | **true** | Boolean - Status do Equipamento (true para Ativo e false para Desativado)
<br>


<span id="status">

<h2> 📔 MÉTODO PATCH pelo ID</h2>

<p align="justify"> Requisição exclusiva para a alteração do Status de um Equipamento quando da Ativação e Desativação dele para manobra.</p>

<p align="justify"> Endereço da rota:</p>

**http://localhost:27017/equipment/alterStatusEquipment/650daa56a3c4ce65afb9b862?status=false**

<p align="justify"> Exemplo:</p>

```json
{
    "status": true
}
```
<p align="justify"> Parâmetros do Método:</p>

| PARAMS | Value | Description |
| --- | --- | --- |
| `status` | **false** | Boolean - Status do Equipamento (true para Ativo e false para Desativado). Vai pela URL da requisição.
<br>

→ [Voltar ao topo](#topo)

<br>

<h5 align="center"> Aprendizagem por Projetos Integrados - Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal </h5>
