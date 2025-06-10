-T.I 
tempo de trabalho
09/06 - 8:35 a 9:02


Back-end
Fluxo de caixa:
1 - Entrada
2 - Saída
3 - Resumo desses dados ( dash board talvez )

1 - Entrada
Funcionais:
-> Registrar quarto ( nº e valor )
-> Registrar tempo de estadia estimado
-> Registrar placa do veiculo
-> Emitir ticket de entrada com: Numero do quarto, valor hora contrada, horario de saida estimado
Não funcionais:
-> Registrar horario de entrada
-> Registrar funcionario que fez a "venda"

createMovimentacao
- id quarto
- tempoEstimado
- placaVeiculo
-

2 - Saída
Funcionais:
-> Registrar tempo de estadia que foi utilizado
-> Registrar itens que foram consumidos dentro do motel ( talvez utilizar sensor de balança, assim que tirar da bandeija ja cai na comanda )
-> Registrar forma de pagamento ( cartão, pix, dinheiro )
-> Calcular o valor a ser pago ( caso seja em dinheiro, informa o valor dado e calcula o troco )
Não funcionais:
-> Registra em uma tabela "historico de acesso", com: valor pago, horario de permanencia, funcionario
-> Atualiza a dash board de quantidade atendida no dia 
-> dar baixa no estoque sobre os produtos consumidos
-> armazenar no historico daquele quarto

3 - Resumo ( dashBoard )
-> Soma de todas as locações feitas no dia
-> valor total em caixa ( no turno em especifico ) de acordo com as entradas do dia
-> soma de quantos quartos foram locados
-> quantos estão livres
-> quantos estão ocupados
-> soma de quanto de consumação teve no dia


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Controle de turno de funcionarios 
2 - Utilização da api do google agenda, assim adicionando o gmail de cada um fica ciente via widgt do ccelular
- fica facil o controle de longe
- cria uma tela para consumir essa api 

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Controle finaceiro 
- Cadastro de boleto a vencer
- Cadastro de vale retirado pelo funcionario
- calculo automatico do salario ( salario - vale )
- cadastro de devedores
- aviso de vencimento de divida/cobrança

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Controle de funcionarios
- cadastro de informações como:
-> nome
-> data de nascimento
-> CPF E RG
-> Endereço dele e da mãe
-> Contato de emergencia

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Cadastro de produtos
- nome
- preço de compra
- preço de venda
( talvez dar uma calculadora para calculo automatico, tipo 10% de lucro.. )

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



Stacks 
- NodeJS
future - Adonis
- JavaScript
- Swagger

- api google calender

A fazer

Crud Quarto
- POST   - criar quarto ( id, Nome, descrição, valor hora )
- GET    - listar todos os quartos
- PUT    - Atualizar informações
- DELETE - Não vai ser utilizado, vamos apenas setar exclusão ( para manter historico )

Crud Itens
- POST   - criar item ( id, Nome, descrição, valor custo, valor venda, quantidade comprada )
- GET    - listar todos os itens
- PUT    - Atualizar informações
- PATCH  - Atualizar saldo em estoque
- DELETE - Não vai ser utilizado, vamos apenas setar exclusão ( para manter historico )



- GET  - listar movimentação ( passar parametro de tempo )
- POST - CheckIn
- PUT  - CheckOut



