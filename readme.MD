# Conector Typescript para Banco de Dados Firebird

## Github para sugestões e correções
https://github.com/joaopaulo-kuwano/firebird-async

Essa lib converte as principais funções disponíveis no conector node-firebird de callbacks para async/await
[NPM](https://www.npmjs.com/package/node-firebird)

## Como usar

Forneça seus dados de conexão e a string de consulta no método estatico 'query' da classe FirebirdAsync

```
  // parametro 1 = query string
  // parametro 2 = argumentos da query
  // parametro 3 = dados de conexão do banco (obrigatorio informar host, path, usuario e senha)
  const db = await FirebirdAsync.query(`SELECT * FROM usuarios WHERE nome = ?`, ['Maria'], {  })
  console.log(db.data) // [{nome: 'Maria', id: 1}]
  console.log(db.error) // undefined
```

Caso deseje usar o conector original, da lib node-firebird, em formato de callback simplesmente chame FirebirdAsync.instance
