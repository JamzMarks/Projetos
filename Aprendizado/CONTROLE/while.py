import random

def getInteiroAleatorioEntre(min, max):
    valor = random.random() * (max - min) + min
    return int(valor)

opcao, contador = 0, 0
6
while opcao != -1 and contador < 100:
    opcao = getInteiroAleatorioEntre(-1, 10)
    print(f"Opção escolhida foi {opcao}.")
    contador += 1

print("Até a próxima")