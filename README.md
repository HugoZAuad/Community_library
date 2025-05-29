# Biblioteca Comunitária - API

## Descrição do Projeto

Este projeto é uma API para gerenciamento de uma biblioteca comunitária. Ele permite o cadastro e controle de livros, usuários e empréstimos, além de enviar lembretes por e-mail para devolução de livros próximos do vencimento.

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **SQLite**: Banco de dados leve para armazenamento dos dados.
- **Express.js**: Framework para criação de APIs REST.
- **Node-cron**: Agendamento de tarefas periódicas (ex: envio de e-mails).
- **Moment.js**: Manipulação de datas.
- **Outras dependências**: bibliotecas para validação, autenticação, envio de e-mails, etc.

---

## Estrutura do Projeto

- `index.js`: Ponto de entrada da aplicação.
- `src/config/`: Configurações do banco de dados.
- `src/controller/`: Controladores que recebem as requisições e chamam os serviços.
- `src/service/`: Lógica de negócio, incluindo serviços de empréstimos, usuários, livros, e tarefas agendadas.
- `src/repositories/`: Acesso ao banco de dados, com funções para manipular dados de livros, usuários e empréstimos.
- `src/routes/`: Definição das rotas da API para livros, usuários e empréstimos.
- `src/schema/`: Esquemas de validação para os dados recebidos.
- `src/middleware/`: Middlewares para autenticação e validação.
- `.env.example`: Exemplo de arquivo de variáveis de ambiente.

---

## Funcionalidades Principais

- **Gerenciamento de Livros**: Cadastro, listagem, atualização e exclusão de livros.
- **Gerenciamento de Usuários**: Cadastro, autenticação e controle de usuários.
- **Gerenciamento de Empréstimos**: Registro de empréstimos de livros para usuários, controle de datas de devolução.
- **Envio de E-mails**: Envio automático de lembretes para usuários com empréstimos próximos do vencimento, via tarefa agendada com node-cron.
- **Validação e Segurança**: Validação dos dados de entrada e autenticação para proteger rotas sensíveis.

---

## Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado (versão recomendada: 14 ou superior)
- NPM ou Yarn para gerenciar pacotes

### Passos para execução

1. Clone o repositório:

   ```bash
   git clone <url-do-repositorio>
   cd Community_library
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` para `.env`
   - Preencha as variáveis conforme necessário (ex: configurações de banco e e-mail)

4. Inicialize o banco de dados (se necessário):
   - O projeto cria as tabelas automaticamente ao rodar.

5. Inicie o servidor:

   ```bash
   npm start
   ```

6. A API estará disponível em `http://localhost:3000` (ou porta configurada).

---

## Rotas Principais

- `/books`: Gerenciamento de livros (GET, POST, PUT, DELETE)
- `/users`: Gerenciamento de usuários e autenticação
- `/loans`: Gerenciamento de empréstimos de livros
- `/cron`: Tarefas agendadas para envio de e-mails (executadas automaticamente)

---

## Considerações Finais

Este projeto é uma solução simples e eficiente para o gerenciamento de uma biblioteca comunitária, com foco em usabilidade, segurança e automação de processos importantes como o envio de lembretes.

Para dúvidas ou contribuições, sinta-se à vontade para abrir issues ou pull requests.

---
