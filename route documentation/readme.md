<br id="topo">

<h1 align="center"> Documentação das rotas</br> Documentação da API desenvolvida nesta API. </h1>
<p align="center">
    <a href="#objetivo">Objetivo</a> | 
    <a href="#post">Método POST</a> |
</p>

<span id="objetivo">

<h2> :dart: Objetivo</h2>

<p align="justify"> Este documento tem por objetivo estabeler a documentação das rotas (requisições) constantes dentro deste projeto. Dessa forma, torna-se possível e mais fácil o entendimento do funcionamento da API criada no Back para consumo no Front, estabelecendo a lógica de funcionamento do aplicativo e os parâmetros necessários para cada método utilizado.</p>

<span id="post">

<h2> 📔 MÉTODO POST</h2>

<p align="justify"> Requisição, via JSON, para a criação de um registro de um Equipamento no Banco de Dados.</p>

<p align="justify"> ### Endereço da rota:</p>

<p>http://localhost:27017/equipment/createEquipment</p>

<p align="justify"> ### Exemplo:</p>

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
<br>

<p align="justify"> ### Parâmetros do Método:</p>

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




<h5 align="center"> Aprendizagem por Projetos Integrados - Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal </h5>