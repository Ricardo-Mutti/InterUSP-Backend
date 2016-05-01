# Backend Swapped (MEAN - MongoDB, Express.js, Angular.js, Node.js)

## Instalação

Dê clone no repositório e execute `npm install` na pasta do projeto para 
instalar as dependências

## Rodando o Banco de Dados

### Instale o MongoDB

https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/
com Homebrew
    brew update
    brew install mongodb
### Make diretório do db

    sudo mkdir -p /data/db
### Entre na pasta do mongo

    cd /usr/local/Cellar/mongodb/
    
### Veja versão do mongo
     
      ls
### Entre na pasta da versão (ex=3.2.4)

       cd 3.2.4
### Execute o comando
   
    sudo mongod
### Entre na pasta bin

    cd bin
### Rode o arquivo mongo da pasta bin:

    mongo
### Se deu tudo certo até agora algo assim deve ser retornado:

    MongoDB shell version: 3.2.4
    connecting to: test
    Server has startup warnings:
    2016-04-11T08:36:58.867-0300 I CONTROL  [initandlisten] ** WARNING: You are running this process as the         root user, which is not recommended.
    2016-04-11T08:36:58.867-0300 I CONTROL  [initandlisten]
    2016-04-11T08:36:58.867-0300 I CONTROL  [initandlisten]
    2016-04-11T08:36:58.867-0300 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
### Crie o banco local do projeto
    
    use swapped
### Se o db realmente foi criado a seguinte mensagem aparecerá:
    
    switched to db swapped
### Faça o primeiro insert no bd

    db.test.save({nome:"teste"})
### Se for realmente gravado aparecerá a seguinte mensagem:

    WriteResult({ "nInserted" : 1 })
### Na pasta do projeto do backend, execute:

    node server.js
### Se o servidor realmente estiver rodando aparecerá a seguinte mensagem avisando a porta do servidor:

    Express server listening on port 3000
### Nesse caso então o servidor se encontra na seguinte url:

    http://localhost:3000/
### Caso ocorra alguma modificação no servidor salvar o(s) arquivo(s) modificados, ir no terminal:
   
    ctrl+c (no mac tmb) -  Pra finalizar o processo e fechar o servidor 
    node server.js - Para rodar o servidor de novo 
### Principais comandos do Mongo
    
    show dbs - Mostra os dbs do mongo
    show collections -  Mostra as tabelas no db
    use DB_NAME - Entra no db que voce quer usar, se nao tiver ele cria
    db.TABLE_NAME.find()  - Mostra a tabela
    db.TABLE_NAME.save({nome:"teste"}) - Grava informações na tabela
    db.dropDatabase() - Apaga o banco inteiro, tem que dar use nome_db de novo
## Arquitetura do projeto
    
    server.js           --> Configuração do server (dependências, endpoints...)
    package.json        --> Configuração de dependências a serem instaladas pelo npm
    public/             --> arquivos do frontend de testes (blog)
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declaração do app em Angular.js
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
    routes/
      api.js            --> descrição das funcionalidades dos endpoints
      index.js          --> route for serving HTML pages and partials
      env.js            --> seta mongoURI dependendo do ambiente
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
      partials/         --> angular view partials (partial jade templates)
        partial1.jade
        partial2.jade
## Editando Endpoints

Para editar os endpoints altere dois arquivos: api.js (adicione a funcionalidade do endpoint) e 
server.js (adicionando endereço do endpoint e linkando o método no JSON API)

## Envio de emails

Utilizamos o modulo https://nodemailer.com/

## Configurações AWS

### Credenciais MongoDB

admins:

  User: root
  Password: BJoAxawF0vKT

  User: appsimples
  Password: amazonapp123654

banco interusp:

  User: interusp
  Password: interusp

### Acessar o banco

    sudo mongo admin --username *seu username* --password *sua senha*

### reiniciar mongo

na pasta stack:
    sudo bash ctlscript.sh restart mongodb

### Public DNS

ec2-52-201-135-248.compute-1.amazonaws.com

### Instance ID

i-5dfc18c7

### Para acessar o server via SSH

(só na primeira vez):
    chmod 400 *path para projeto*/resources/InterUSP.pem

    ssh -i *path para projeto*/resources/InterUSP.pem ubuntu@ec2-52-201-135-248.compute-1.amazonaws.com

### Para rodar o projeto na AWS

O projeto usa forever.js para rodar o script continuamente na maquina 
(https://github.com/foreverjs/forever)

na pasta do projeto

    forever start server.js

### GUI Banco de dados

para acessar:
    ssh -N -L 8888:127.0.0.1:80 -i *path para projeto*/resources/BackendBootstrap.pem ubuntu@ec2-54-210-71-210.compute-1.amazonaws.com
obs: nao vai mostrar nenhum resultado no terminal

acesse:
    http://127.0.0.1:8888/rockmongo


blblblambla