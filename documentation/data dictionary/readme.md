<br id="topo">

<h1 align="center"> Documentação das rotas</br> Entendendo a lógica da API desenvolvida neste projeto. </h1>
<p align="center">
    <a href="#objetivo">Objetivo</a> |
    <a href="#bancodados">Banco de Dados</a> 
</p>


<span id="objetivo">

<h2> :dart: Objetivo</h2>

<p align="justify"> Este documento tem por objetivo estabeler o dicionário de dados relativo a modelagem do Banco de Dados pertencente ao desenvolvimento deste projeto em parceria com a Imagem Geosistemas, atentando para a implementação poliglota como requisito do mesmo.</p>
<br>

<span id="bancodados">

<h2> 📓 Banco de Dados</h2>

<p align="justify"> Para a persistência dos dados relativos aos equipamentos cadastrados na aplicação, faz-se o uso do MongoDB (NoSQL). Dessa forma, o tratamento dos dados se dá em Collections (Coleções).</p>
<br>

<h2> 📔 Coleções:</h2>

<p align="justify"> 📔 Coleção Equipment:</p>

<p align="justify"> Dados Relativos aos Equipamentos cadastrados na aplicação.</p>

| Properties | Type | Example Value | Description |
| --- | --- | --- | --- |
| `_id` | Varchar | **650daa56a3c4ce65afb9b862** | ID de identificação do registro do Equipamento no Banco de Dados
| `type` | String | **Poste** | Tipo do Equipamento
| `numero` | Varchar | **7774AE** | Número de identificação do Equipamento
| `serial` | Varchar | **145AE1236** | Número identificador do Equipamento
| `latitude` | Number | **12.4578** | Posição Global do Equipamento em relação à Latitude
| `longitude` | Number | **-12.7853** | Posição Global do Equipamento em relação à Longitude
| `observations` | String | **Necessita de Manutenção** | Observações gerais do Equipamento
| `url` | String | **https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/imagens/Linux.jpeg** | Url relativa a imagem do Equipamento (assume null caso não tenha imagem).
| `status` | boolean | **true** | Status do Equipamento (true para Ativo e false para Desativado)

<br>


→ [Voltar ao topo](#topo)


<br>

<h1 align="center"> <img src = "https://user-images.githubusercontent.com/71477357/161321048-dc637b2e-0314-4e07-b2f9-8cda9f653356.png" height="70"  align="auto">
<h5 align="center"> Aprendizagem por Projetos Integrados - Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal </h5>
