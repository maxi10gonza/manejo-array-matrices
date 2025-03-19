personas = []
cantidad = int(input("Ingrese el número de personas a registrar: "))

for i in range(cantidad):
    nombre = input(f"Ingrese el nombre de la persona {i + 1}: ")
    edad = int(input(f"Ingrese la edad de {nombre}: "))
    nota = float(input(f"Ingrese la nota de {nombre}: "))
    personas.append([nombre, edad, nota])

print("\nListado de personas ingresadas:")
for p in personas:
    print(p)

personas_ordenadas = sorted(personas, key=lambda x: x[2], reverse=True)

print("\nListado ordenado por nota (de mayor a menor):")
for p in personas_ordenadas:
    print(p)
