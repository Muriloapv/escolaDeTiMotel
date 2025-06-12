Funções do /movimentacao

1 - GET 
- http://localhost:8080/api/movimentacao
-> listar todos os registro, seja em aberto ou finalizado
- http://localhost:8080/api/movimentacao/statusQuarto
-> lista todos os registros que se encontram naquele status

2 - POST
- http://localhost:8080/api/movimentacao
-> Registra operação de entrada no motel, guardando as informações:
-- ID da operação
-- ID do quarto contratado
-- Tempo solicitado pelo cliente
-- Tempo contratao ( sugeito a alteração no checkOut )
-- Valor hora do quarto
 Registrar quarto ( nº e valor )
-> Registrar tempo de estadia estimado
-> Valor da hora do quarto
-> Registrar placa do veiculo
-> Emitir ticket de entrada com: Numero do quarto, valor hora contrada, horario de saida estimado
Não funcionais:
-> Registrar horario de entrada
-> Registrar funcionario que fez a "venda"
