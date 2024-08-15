Angular Test Application

Este projeto é uma aplicação Angular de exemplo que demonstra a criação de uma aplicação web simples que consome uma API para listar e exibir detalhes de posts. O projeto inclui configuração básica, serviços, componentes e testes unitários.

Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:
src/
app/
components/
post-list.component.ts: Componente para listar todos os posts.
post-detail.component.ts: Componente para exibir detalhes de um post.
navigation.component.ts: Componente para navegação entre páginas.

services/
post.service.ts: Serviço que consome a API de posts.

models/
post.model.ts: Modelo de dados para posts.

app.module.ts: Módulo principal da aplicação.
app-routing.module.ts: Configuração de rotas da aplicação.
app.component.ts: Componente raiz da aplicação.
app.component.html: Template HTML do componente raiz.
app.component.css: Estilos CSS do componente raiz.
environments/: Configurações específicas para diferentes ambientes (desenvolvimento, produção).

Instalação e Configuração
Requisitos
Certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão 14 ou superior)
Angular CLI (instalado globalmente)

Passos para Instalação
Clone o Repositório
git clone <https://github.com/Lisandro-Pinheiro/angular-test.git>
cd <angular-test>

Instale as Dependências

No diretório raiz do projeto, execute:
npm install


Entendido! Vou criar um arquivo README.md completo que descreve a estrutura da aplicação, como executá-la, e fornece uma explicação detalhada de cada parte do código. Este README inclui todas as informações necessárias para entender a aplicação como um todo.

Angular Test Application
Este projeto é uma aplicação Angular de exemplo que demonstra a criação de uma aplicação web simples que consome uma API para listar e exibir detalhes de posts. O projeto inclui configuração básica, serviços, componentes e testes unitários.

Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

src/
app/
components/
post-list.component.ts: Componente para listar todos os posts.
post-detail.component.ts: Componente para exibir detalhes de um post.
navigation.component.ts: Componente para navegação entre páginas.
services/
post.service.ts: Serviço que consome a API de posts.
models/
post.model.ts: Modelo de dados para posts.
app.module.ts: Módulo principal da aplicação.
app-routing.module.ts: Configuração de rotas da aplicação.
app.component.ts: Componente raiz da aplicação.
app.component.html: Template HTML do componente raiz.
app.component.css: Estilos CSS do componente raiz.
assets/: Diretório para arquivos estáticos como imagens.
environments/: Configurações específicas para diferentes ambientes (desenvolvimento, produção).
Instalação e Configuração
Requisitos
Certifique-se de ter as seguintes ferramentas instaladas:

Node.js (versão 14 ou superior)
Angular CLI (instalado globalmente)
Passos para Instalação
Clone o Repositório

bash
Copiar código
git clone <URL_DO_SEU_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>

Instale as Dependências

No diretório raiz do projeto, execute:
npm install

Execução da Aplicação
Para iniciar a aplicação em modo de desenvolvimento, execute:
ng serve 

Testes Unitários
Para executar os testes unitários, utilize o comando:

ng test

Estrutura e Funcionalidade do Código
post.service.ts
PostService: Serviço responsável por interagir com a API para obter posts. Inclui métodos getPosts e getPostById. 

post-list.component.ts
PostListComponent: Componente que exibe uma lista de posts. Utiliza o PostService para buscar posts e exibe cada post.

post-detail.component.ts
PostDetailComponent: Componente que exibe detalhes de um post específico. Utiliza o PostService para buscar os detalhes de um post com base no ID passado pela rota. 

navigation.component.ts
NavigationComponent: Componente que fornece uma barra de navegação para acessar diferentes seções da aplicação, como a lista de posts e detalhes dos posts.

app.module.ts
AppModule: Módulo principal da aplicação. Declara todos os componentes e serviços necessários para a aplicação Angular.

post.model.ts
Post Model: Define a estrutura de dados para um post.

Testes Unitários
Os testes unitários são escritos utilizando o Karma e Jasmine. Eles testam se os componentes e serviços funcionam conforme o esperado.

OBSERVAÇÕES:
API Endpoint: O serviço PostService está configurado para se comunicar com a API JSONPlaceholder. Certifique-se de que a URL está correta  ( https://jsonplaceholder.typicode.com/posts ).
Bootstrap: A aplicação pode ser estilizada utilizando o Bootstrap para facilitar a criação de um layout responsivo.
