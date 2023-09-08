<br id="topo">

<h1 align="center"> EQUIPE PEÔNIA </br> API - 5º SEMESTRE ADS - 2023 </h1>
<p align="center">
    <a href="#objetivo">Objetivo</a> | 
    <a href="#requisitos">Requisitos</a> | 
    <a href="#relatório">Relatórios</a> | 
    <a href="#documentacao">Documentação</a> |
    <a href="#projeto">Backlog</a> |
    <a href="#tecnologias">Tecnologias</a> | 
    <a href="#equipe">Equipe</a> 
</p>

<span id="objetivo">

<h2> :dart: Objetivo</h2>

<p align="justify"> Como parte das atividades das áreas de engenharia de empresas de Saneamento, Elétrica, Telecomunicações, ou corporações onde as áreas demandam a realização de obras e manutenção de equipamentos em campo, se faz necessário utilizar uma aplicação móvel onde seja possível realizar a gestão dos dados relativos aos equipamentos (ativos) da companhia, via aplicativo móvel, possibilitando manter o cadastro dos ativos atualizados.</p>

<p align="justify">Este recurso é amplamente utilizado em processos de manobras, onde um equipamento precisa ser desativado para que seja realizada uma manutenção. Durante esta etapa de manutenção parte da rede de serviços pode ser afetada, e por sua vez afetar os clientes conectados a ela, e ter o cadastro destes ativos atualizados em campo em tempo real é primordial para que a qualidade dos serviços prestados para os consumidores.</p>

<p align="justify">Dessa forma, o projeto consiste no desenvolvimento de um aplicativo mobile que permita o gerenciamento (online e offline) de equipamentos públicos em campo (Ativos) para a Imagem Geosistemas. Esse aplicativo deve ainda ser capaz de garantir a gestão desses equipamentos (consultar, atualizar, desativar e cadastrar), premitindo a conexão com sensores e comunicação a serviços externos e exibindo esses quipamentos em tempo real nos mapas (conforme a posição geográfica do usuário em um raio de 10km).</p>

<span id="requisitos">

<h2> :bookmark_tabs: Requisitos Funcionais </h2>

- [x] Cadastro de usuários, incluindo foto;
- [x] Liberação de usuários mediante processo de autenticação;
- [x] Recuperação de senha via confirmação de envio de código (6 dígitos);
- [x] Criptografia de senhas;
- [x] Cadastro de equipamentos (Ativos), incluindo foto(s);
- [x] Ativação e Desativação de equipamentos;
- [x] Busca de equipamentos cadastrados (raio de 10km) de acordo com posição geográfica do App;
- [x] Visualização pontual em mapa dos equipamentos cadastrados (tanto os ativos quanto os inativos);
- [x] Visualização detalhada do equipamento disponíveis no raio de ação do App, ao clicar;
- [x] Filtros de busca de quipamentos (baseado no seu tipo);
- [x] Sincronia para envio de dados (online), em até 30 segundos, quando no uso offline da aplicação;

<h2> 📋 Requisitos Não Funcionais </h2>

- [x] Condições de iluminação de tela adaptáveis a necessidade do usuário;
- [x] Segurança das informações em caso de perda do dispositivo móvel;
- [x] Aplicação de A2F (2 fatores) para autenticação em cada acesso;
- [x] Validação dos dados inseridos na aplicação (equipamentos e usuários);
- [x] Banco de dados mobile para armazenamento dos dados atualizados dos equipamentos durante estado offline do App;
 

 → [Voltar ao topo](#topo)
    
<h2> 💻 Entregas</h2> 

<h4> Entrega da Sprint 1 </h4>
<p align="center"> 


</p>
  
<br>

    
→ [Voltar ao topo](#topo)
    
<span id="relatório">
 
 ## :clipboard: Relatórios
Na tabela abaixo é possível visualizar os resultados de cada Sprint clicando em "Ver relatório". 
    
| Sprint | Entrega | Status | Relatório |
|:-----:|:----------:|:---------:|:---------:|
| 01 | 24/09/2023 |	EM DESENVOLVIMENTO | [Ver relatório](https://github.com/peonia-api/API_5_Semestre/blob/main/reports/Sprint1.MD) |
| 02 | 15/10/2023 |	- | - |
| 03 | 05/11/2023 |	- | - |
| 04 | 26/11/2023 |	- | - |


→ [Voltar ao topo](#topo)
    
<span id="documentacao">
<h2> :clipboard: Documentação</h2>

→ [Voltar ao topo](#topo)
    
<span id="projeto">
    
 ## 📌 Backlog Priorizado
 
<div align="center">
    <p> 
    
![image](https://github.com/peonia-api/API_5_Semestre/blob/main/images/Backlog%20-%20Sprint%201.png).
    
</p>
</div>
    
→ [Voltar ao topo](#topo)  
 
 <!--## 📆 Sprints
Na tabela abaixo é possível visualizar a divisão de tarefas do Backlog por Sprints.

| Sprint | Atividade | Status |
|:-----:|:---------:|:---------:|
| 01 | Página de cálculo do comprimento de pista. | :heavy_check_mark: |
| 01 | Interface de cálculo visando acesso via tablet. | :heavy_check_mark: |
| 01 | Aplicar sistemas de unidade de medida. | :heavy_check_mark: |
| 02 | Página de cadastro de aeronaves. | :heavy_check_mark: |
| 02 | Realização da lógica dos cálculos a partir das tabelas. | :heavy_check_mark: |
| 02 | Adequar interface às configurações da aeronave. | :heavy_check_mark: |
| 02 | Banco de dados na nuvem. | :heavy_check_mark: |
| 02 | Aplicação de validação de campos nos cálculos. | :heavy_check_mark: |
| 03 | Página de visualização e edição de aeronaves. | :heavy_check_mark: |
| 03 | Aplicar uma solução agnóstica a tabela fornecida para os cálculos. | :heavy_check_mark: |
| 03 | Adaptar cadastro de aeronaves para a solução agnóstica. | :heavy_check_mark: |
| 03 | CRUD de aeronaves completo. | :heavy_check_mark: |
| 04 | CRUD de flaps completo. | :heavy_check_mark: | 
| 04 | Páginas de visualização, cadastro e edição de flaps. | :heavy_check_mark: |
| 04 | Página de histórico de cálculos. | :heavy_check_mark: |
| 04 | Ajuste nas unidades de medida da página de cálculo. | :heavy_check_mark: |
| 04 | CRUD de usuários completo. | :heavy_check_mark: |
| 04 | Página de visualização, cadastro e edição de usuários. | :heavy_check_mark: |
| 04 | Upar servidor na nuvem. | :heavy_check_mark: |
| 04 | Navegação do sistema administrativo (paginação). | :heavy_check_mark: |
| 04 | Página de login. | :heavy_check_mark: |
| 04 | Documentação para explicação e how-to da solução agnóstica apresentada. | :heavy_check_mark: |
 
<br>-->

<span id="tecnologias">

## 🛠️ Tecnologias

Foram usadas as seguintes ferramentas, linguagens e tecnologias para a execução do projeto:

- [HTML5 & CSS3](https://www.w3schools.com/): Linguagens de marcação
- [TypeScript](https://www.typescriptlang.org/): Linguagem de programação
- [Git](https://git-scm.com): Versionamento
- [GitHub](https://github.com/): Armazenamento de código
- [Teams](https://teams.microsoft.com): Comunicação interna do grupo
- [Slack](https://slack.com/intl/pt-br): Comunicação com o cliente
- [NodeJS](https://nodejs.org/): Runtime
- [React Native](https://reactnative.dev/docs/getting-started): Framework
- [TypeORM](https://typeorm.io/): Framework
- [DevOps](https://azure.microsoft.com/pt-br/products/devops): Planejamento e Gestão
- [MongoDB](https://www.mongodb.com/docs/): Banco de dados NoSQL

→ [Voltar ao topo](#topo)    
    
<span id="equipe">
 
## 👩‍💻 Equipe
|Função|Nome|GitHub|LinkedIn|
| -------- |-------- |-------- |-------- |
| Scrum Master |Diego Batista da Silva|<a href="https://github.com/diiegobsilva" target="_blanck"><img src = "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> |<a href="https://www.linkedin.com/in/diegobatista1/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>|
| Product Owner |Renan Vitor Fernandes Mendonça|<a href="https://github.com/RenanVitor" target="_blanck"><img src = "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> |<a href="https://www.linkedin.com/in/renan-vitor" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>|
| Developer |Ana Carolina das Neves|<a href="https://github.com/AnaCarolinaNeves" target="_blanck"><img src = "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>|<a href="https://www.linkedin.com/in/ana-carolina-neves-36aa68207/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>|
| Developer |Jeniffer Cristina Freitas Pereira|<a href="https://github.com/Jennyads" target="_blanck"><img src = "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>|<a href="https://www.linkedin.com/in/jeniffer-pereira-65787b205/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>|
| Developer |Larissa Aparecida Diniz Silva|<a href="https://github.com/laaridiniz" target="_blanck"><img src = "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> |<a href="https://www.linkedin.com/in/larissa-diniz-dev" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>|
| Developer |Mateus Henrique Lima da Silva|<a href="https://github.com/mateushlsilva" target="_blanck"><img src = "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a> |<a href="https://www.linkedin.com/in/mateus-silva-80232a222/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>|

→ [Voltar ao topo](#topo)

<h1 align="center"> <img src = "https://fatecsjc-prd.azurewebsites.net/images/logo/fatecsjc_400x192.png" height="70"  align="auto">
<h5 align="center"> Aprendizagem por Projetos Integrados - Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal </h5>
