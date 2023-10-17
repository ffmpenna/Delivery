<div align="center">
  <img width="80%" src="https://github.com/ffmpenna/Delivery-App/assets/106782125/b7a83574-d393-4a16-80ec-5df19ee67f5f">
</div>

# Boas vindas ao repositório do meu *Site de Delivery* 🥃

O projeto apresentado a seguir se resume em um site de **entrega de bebidas** que possui **três tipos** de usuários, tendo cada um suas respectivas **permissões** e **funcionalidades**. Sem contar a **interação** em **tempo real** entre eles.

<div align="center">
  <img width="49%" src="https://github.com/ffmpenna/Delivery-App/assets/106782125/ed85d0f4-8bab-4cc9-b92e-b1d5427b4340">
  <img width="49%" src="https://github.com/ffmpenna/Delivery-App/assets/106782125/93ca023f-ddd8-4db1-b6a9-c24bf84419ed">
</div>

## Orientações Gerais 🧐
<details>
	<summary>
		<strong>⚙ Pré-requisitos para rodar o projeto </strong>
	</summary><br>

- Precisará ter **Node** instalado em sua máquina;
- Precisará do **MySQL** rodando localmente ou através de um container **Docker** (veja as instruções a seguir);

</details>

<details>
	<summary>
		🐳<strong> Para quem pretende usar Docker </strong>
	</summary><br>

- Verifique se possui Docker instalado e configurado em sua máquina. Caso não o tenha instalado siga as [instruções do site oficial](https://docs.docker.com/get-docker/);
- Após a instalação, crie um container a partir de uma imagem MySQL. Para tal copie e cole o seguinte comando em seu terminal:
``` bash
docker run --name container-mysql -e MYSQL_ROOT_PASSWORD=password -d -p 3306:3306 mysql:5.7
```
> Certifique-se que a porta 3306 esteja disponível em sua máquina. Caso contrário mude o valor da porta no código a cima.
</details>

<details>
	<summary>
		📓<strong> Principais Scripts do projeto </strong>
	</summary><br>

- `dev:prestart`: A partir da raiz, esse comando faz o processo de instalação de dependências (`npm i`) nos dois projetos (`./front-end` e `./back-end`) e roda o `Sequelize` no `./back-end` (lembrar de configurar o `.env` no mesmo);

  - *uso (na raiz do projeto): `npm run dev:prestart`*

------------

- `dev`: Limpa as portas `3000` e `3001` e sobe a aplicação com `pm2` em modo `fork` (uma instância pra cada aplicação). Nesse modo, as atualizações são assistidas (modo `watch`);

  - *uso (na raiz do projeto): `npm run dev`*

------------

- `db:reset`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local;

  - *uso (na raiz do projeto): `npm run db:reset`*

</details>

<details>
	<summary>
		<strong>🛢 Banco de Dados </strong>
	</summary><br>

Para o banco de dados, foi utilizado o ORM `Sequelize`, para fazer interface com o `MySQL` a partir de um Diagrama de ER que você pode visualizar a baixo:

![Diagrama ER](https://github.com/ffmpenna/Delivery-App/assets/106782125/9136e80d-a76a-4404-bd19-f30a9b515871)

</details>

<details>
	<summary>
		<strong>🔁 Endpoints </strong>
	</summary><br>

```
------------------------------------------------------------------------

- POST /login
>>> Faz o login na aplicação

------------------------------------------------------------------------

- POST /register
>>> Cria um usuário do tipo consumidor

------------------------------------------------------------------------

- GET /user
>>> Lista todos os usuários registrados

- DELETE /user/:id
>>> Deleta um usuário pelo ID

------------------------------------------------------------------------

- POST /customer/products
>>> Vincula um produto e sua quantidade a um pedido

- POST /customer/orders
>>> Registra um pedido no banco de dados

- GET /customer/products
>>> Lista todos os produtos

- GET customer/orders/:id
>>> Lista um pedido pelo seu ID

- GET customer/orders/user/:id
>>> Lista todos os pedidos vinculados a um consumidor

- PUT customers/orders/:id
>>> Atualiza o status do pedido pelo seu ID

------------------------------------------------------------------------

- GET /seller
>>> Lista todos os vendedores

- GET /seller/orders/:id
>>> Lista um pedido pelo seu ID

- GET /seller/user/:id
>>> Lista todos os pedidos vinculados a um vendedor

------------------------------------------------------------------------

- POST /admin/manage
>>> Registra um novo usuário, podendo escolher seu tipo

------------------------------------------------------------------------
```

</details>

<details>
	<summary>
		<strong>🏹 Principais Objetivos </strong>
	</summary><br>

- Criar uma API RESTful com **Node.Js** e **Express**;
- Gerenciar um banco de dados **SQL** usando **Sequelize**;
- Fazer autenticação de usuários via **JWT**;
- Lidar com **3 fluxos** diferentes de usuários: **Admin, Vendedor e Consumidor**;
- Enviar requisições para API usando **Axios**;
- Gerenciar os estados da aplicação utilizando **ContextAPI**;
- Usar o **localStorage** para guardar dados;
- Criar o desing e estilizar a todas as páginas do projeto com **CSS**;

</details>

<details>
	<summary>
		<strong>🧑 Contribuições </strong>
	</summary><br>

Todos na equipe participaram ativamente de todos os aspectos da aplicação, mas deram foco em determinada área. Meu papel foi trabalhar majoritariamente no front-end. Trabalhamos baseados em Daily Meetings e metodologias ágeis como o Kanban. Foi uma jornada muito tranquila de lidar, indico cada um deles para trabalhar em qualquer equipe!

- [João Hélder](https://github.com/J0a0Helder)
- [João Victor Schiavon](https://github.com/joaovictorschiavon)
- [Filipe Lima](https://github.com/flimamcz)
- [Vinícius Andrade](https://github.com/viniandrade-dev)


</details>

------------

## Como Rodar a Aplicação 🔧

1. Clone o repositório:

	```bash
	git clone git@github.com:ffmpenna/Delivery-App.git
	```

2. Instale as dependências na raiz do projeto:

	```bash
	npm install
	```

3. Instale as dependências tanto do front-end quanto do back-end

	```bash
	npm run dev:prestart
	```

4. Finalmente rode a aplicação

	```bash
	npm run dev
	```

## ⛏️ Ferramentas Utilizadas

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
<br>
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-20232A?style=for-the-badge&logo=axios&logoColor=61DAFB)
![EsLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![NodeJs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
**JWT**
