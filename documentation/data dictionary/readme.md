<br id="topo">

<h1 align="center"> Dicionário de Dados</br> Entendendo a estrutura do armazenamento dos dados deste projeto. </h1>
<p align="center">
    <a href="#objetivo">Objetivo</a> |
    <a href="#bancodados">Banco de Dados</a> |
    <a href="#colecao">Coleções</a> |
    <a href="#tabelas">Tabelas</a> 
</p>


<span id="objetivo">

<h2> :dart: Objetivo</h2>

<p align="justify"> Este documento tem por objetivo estabeler o dicionário de dados relativo a modelagem do Banco de Dados pertencente ao desenvolvimento deste projeto em parceria com a Imagem Geosistemas, atentando para a implementação poliglota como requisito do mesmo.</p>
<br>

<span id="bancodados">

<h2> 📓 Banco de Dados</h2>

<p align="justify"> Para a persistência dos dados relativos aos equipamentos cadastrados na aplicação, faz-se o uso do MongoDB (NoSQL). Dessa forma, o tratamento dos dados se dá em Collections (Coleções).</p>

<p align="justify"> Para a persistência dos dados relativos aos usuários cadastrados na aplicação, faz-se o uso do PostgreSQL. Dessa forma, o tratamento dos dados se dá com atributos organizados em colunas que, por sua vez, pertencem a tabelas.</p>
<br>

<span id="colecao">

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

<span id="tabelas">

<h2> :dart: Tabelas</h2>

<p align="justify"> 📔 Tabela User:</p>

<p align="justify"> Dados Relativos aos Usuários cadastrados na aplicação.</p>

| Columns | Type | Example Value | Description |
| --- | --- | --- | --- |
| id | Number | 32 | Id sequencial que identifica o registro do usuário cadastrado 
| userCpf | String | **01234567890** | Número de CPF do Usuário 
| userMatricula | String | **012345** | Número de matrícula do Usuário 
| userTelefone | String | **99999999999** | Número de telefone do Usuário 
| userName | String | **Larissa Silva** | Nome do Usuário 
| userEmail | String | **larissa.silva179@fatec.sp.gov.br** | E-mail do Usuário 
| userType | userType | **2** | Enumerador relativo ao tipo do usuário (1 para Admin / 2 para User comum) 
| userPassword | String | --- | Senha do usuário criptografa em hash 
| token | String | **AF8T4G** | Token gerado quando da solicitação de senha para verificação em dois fatores 
| icone | String | **https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/imagens/Linux.jpeg** | Url relativa a foto do Usuário 


→ [Voltar ao topo](#topo)


<br>

<h1 align="center"> <img src = "https://user-images.githubusercontent.com/71477357/161321048-dc637b2e-0314-4e07-b2f9-8cda9f653356.png" height="70"  align="auto">
<h5 align="center"> Aprendizagem por Projetos Integrados - Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal </h5>
