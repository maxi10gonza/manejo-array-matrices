📌 README: Instrucciones de uso
Sistema de Registro de Personas
Este programa permite ingresar datos de varias personas (nombre, edad y nota), mostrar el listado original y ordenarlo por nota de mayor a menor.

📂 Archivos incluidos
script.py → Versión en Python
script.js → Versión en JavaScript (Node.js)
🖥️ Requisitos
Antes de ejecutar el programa, asegúrate de cumplir los siguientes requisitos:

Para Python
✔ Tener Python instalado. Para verificar, abre la terminal y ejecuta:

```sh
python --version 

```
Si no está instalado, descárgalo desde https://www.python.org/.

Para JavaScript (Node.js)
✔ Tener Node.js instalado. Para verificar, abre la terminal y ejecuta:
```sh
node -v
npm -v

```
Si no está instalado, descárgalo desde https://nodejs.org/.

🚀 Instrucciones de instalación y ejecución
Ejecutar el programa en Python
1️⃣ Abre la terminal y navega hasta la carpeta del proyecto:

```sh
cd C:\Users\IPF-2025\Desktop\manejo-array-matrices

```
2️⃣ Ejecuta el script de Python:
```sh
python script.py

```
Ejecutar el programa en JavaScript (Node.js)
1️⃣ Abre la terminal y navega hasta la carpeta del proyecto:
```sh
cd C:\Users\IPF-2025\Desktop\manejo-array-matrices

```
2️⃣ Instala el módulo prompt-sync (solo la primera vez):

```sh
npm install prompt-sync

```
3️⃣ Ejecuta el script de JavaScript:

```sh
node script.js

```

📋 Funcionamiento del sistema
1️⃣ El sistema pedirá el número de personas a registrar.
2️⃣ Solicitará los datos de cada persona (nombre, edad y nota).
3️⃣ Mostrará el listado original de personas ingresadas.
4️⃣ Ordenará y mostrará la lista según la nota (de mayor a menor).

Ejemplo de salida en la consola:

```less
Ingrese el número de personas a registrar: 3
Ingrese el nombre de la persona 1: Ana
Ingrese la edad de Ana: 23
Ingrese la nota de Ana: 8.5
Ingrese el nombre de la persona 2: Luis
Ingrese la edad de Luis: 21
Ingrese la nota de Luis: 9.2
Ingrese el nombre de la persona 3: Marta
Ingrese la edad de Marta: 25
Ingrese la nota de Marta: 7.8

Listado de personas ingresadas:
['Ana', 23, 8.5]
['Luis', 21, 9.2]
['Marta', 25, 7.8]

Listado ordenado por nota (de mayor a menor):
['Luis', 21, 9.2]
['Ana', 23, 8.5]
['Marta', 25, 7.8]

```
⚠️ Errores comunes y soluciones
🔴 Error: 'node' no se reconoce como un comando interno o externo
✅ Solución: Instalar Node.js y asegurarse de que esté en el PATH del sistema.

🔴 Error: Cannot find module 'prompt-sync'
✅ Solución: Instalar prompt-sync con:

```sh
npm install prompt-sync

```
