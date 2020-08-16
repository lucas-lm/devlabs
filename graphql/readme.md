# graphql

> A hello world to graphql

## :telescope: Overview

GraphQL (Graph Query Language) é uma linguagem de consulta de dados em grafos desenvolvida pelo Facebook em 2012.
Diferentes aplicações, como aplicativos web, mobile e desktop, podem consumir uma mesma API de maneiras diferentes, precisando buscar mais ou menos dados dependendo da aplicação. APIs REST não conseguem ter essa versatilidade, e acabam tendo problemas de overfetching (requisições com dados a mais, que não serão utilizados) e underfetching (requisições falta de dados, onde será necessário realizar outra chamada a API para buscar os dados que faltaram) para servir uma grande diversidade de aplicações. O GraphQL nasceu para resolver este problema.


O GraphQL estabelece duas regras fundamentais para comunicação com a API:

1. Toda request é um POST

Uma API GraphQL utiliza o protocolo HTTP(S) para comunicação servidor-cliente, porém, apenas o método POST é utilizado ao se fazer requisições à uma API GraphQL. No corpo da requisição é enviado os pedidos para a API.

2. Toda request é enviada para um único endpoint (convencionalmente /graphql)

Todos os detalhes sobre os recursos à ser consumidos são enviados no corpo da requisição.

### O que não é o GraphQL?

GraphQL NÃO é:

- Um framework
- Um servidor
- Um protocolo

## Conceitos

- Query
  - Obter dados
- Mutations
  - Manipular dados
- Subscriptions
  - Requisições em tempo real
- Scalar types
  - Tipos primitivos definidos no GraphQL
  - String, Int, Boolean, Float, ID
---

### Implementação

1. TypeDefs: Schemas dos "recursos" da API
2. Resolvers: Mapeamento 1:1 com os schemas

## :computer: Techs
  
- graphql
- apollo-server

## :octocat: Author

**Lucas Miranda** 
* Email: lucas-m@outlook.com
* GitHub: [@lucas-lm](https://github.com/lucas-lm)
* LinkedIn: [@lucas-lm](https://linkedin.com/in/lucas-lm)

## :books: Refereces

https://graphql.org
https://howtographql.com
https://apollographql.com

### Videos

https://www.youtube.com/watch?v=xbLpIhCsIdg
https://www.youtube.com/watch?v=7RoHxSGVAdU&list=PLPXWI3llyMiK9uw7tfljM2hnQl2qu6CeT
https://www.youtube.com/watch?v=krhfoMJ48EY
https://www.youtube.com/watch?v=oD8GqurXZ-0

### GitHub stuff

https://github.com/apollographql
https://github.com/prisma-labs/graphql-yoga
