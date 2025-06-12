Tabelas que devem ser criadas

Cadastro - listagem

- Table quartos: -
-- id
-- nome
-- descricao
-- valorHora

Table movimentacao:
- id
- idQuarto 
- tempoPermanenciaEstimado ( talvez remover e deixar isso por calculo da hora checkin | checkout)
- tempoPermanencia
- array de itens consumidos 
- valorTotal
- usu_codigo
- entrada
- saida

Table movimentacaoConsumacao
- id
- id movimentacao
- id item consumido
- descricao
- quantidade
- valor



- Table itens 
- Table funcionario
- Table Cliente 
