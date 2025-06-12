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


// Entrada - CheckIn
[
	{
	"idQuarto": 101,
	"tempoEstimado": 3,
	"valorHoraQuarto": 50,
	"veiculo": "ABC-1234",
	"usuario": "Murilo",
	"itensConsumidos": [
			{ "nome": "Refrigerante", "quantidade": 2, "preco": 5 },
			{ "nome": "Preservativo", "quantidade": 1, "preco": 10 }
		]
	}
]
// Saida - CheckOut
[
	{
		"id": 1,
		"status": "Ocupado",
		"idQuarto": 101,
		"tempoEstimado": 3,
		"tempoContratado": 3,
		"valorHoraQuarto": 50,
		"itensConsumidos": [
			{
				"nome": "Refrigerante",
				"quantidade": 2,
				"preco": 5
			},
			{
				"nome": "Preservativo",
				"quantidade": 1,
				"preco": 10
			}
		],
		"valorTotal": 150,
		"veiculo": "ABC-1234",
		"usuario": "Murilo",
		"entrada": "2025-06-10T20:46:50.098Z",
		"saida": null
	}
]