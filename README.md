# Analizador Sintáctico e Intérprete - SSL 2026

## Información General

| Campo | Descripción |
|---|---|
| **Materia** | Sintaxis y Semántica de Lenguajes |
| **Alumno** | [Tu Nombre Completo] |
| **Legajo** | [Tu Número de Legajo] |
| **Tema Asignado** | `39568_9` |
| **Lenguaje** | Sub-lenguaje ANSI-C adaptado |

---

# Descripción del Proyecto

Este proyecto implementa un analizador léxico, sintáctico e intérprete para un subconjunto reducido del lenguaje ANSI-C utilizando ANTLR4 y Node.js.

El sistema permite:

- Realizar análisis léxico y sintáctico.
- Generar árboles de derivación.
- Mostrar tablas de tokens.
- Detectar errores léxicos y sintácticos.
- Interpretar y ejecutar instrucciones del lenguaje.

La implementación utiliza:

- **ANTLR4** para el análisis léxico y sintáctico.
- **Node.js** para la ejecución e interpretación.
- **Patrón Visitor** para recorrer el árbol sintáctico generado.

---

# Funcionalidades

## Análisis Léxico

Reconocimiento de:

- Palabras reservadas
- Identificadores
- Literales
- Operadores
- Delimitadores
- Símbolos especiales

---

## Análisis Sintáctico

Validación de estructuras del lenguaje:

- Sentencias `if`
- Bloques `else`
- Instrucciones `printf`
- Bloques delimitados
- Expresiones básicas

---

## Tabla de Tokens

Visualización estructurada de:

- Lexema
- Tipo de token
- Categoría léxica

---

## Interpretación

Ejecución dinámica de instrucciones:

- Salidas por consola
- Evaluación de condiciones
- Control de flujo

---

# Tecnologías Utilizadas

- Java JRE 8+
- Node.js v14+
- ANTLR4
- JavaScript

---

# Requisitos Previos

## Java

Verificar instalación:

```bash
java -version
```

---

## Node.js

Verificar instalación:

```bash
node -v
```

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/[tu-usuario]/[tu-legajo].git
cd [tu-legajo]
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Instalar runtime de ANTLR4

```bash
npm install antlr4
```

---

# Ejecución del Proyecto

## Ejecutar el analizador

```bash
npm start
```

---

## Entrada del programa

Modificar el archivo:

```text
input.txt
```

con el código fuente a analizar.

---

# Archivos de Prueba

| Archivo | Descripción |
|---|---|
| `input_correcto_1.txt` | Ejemplo válido con estructura `if` |
| `input_correcto_2.txt` | Ejemplo válido con `else` y múltiples salidas |
| `input_incorrecto_1.txt` | Error por falta de `;` |
| `input_incorrecto_2.txt` | Error léxico o símbolo inválido |

---

# Estructura del Proyecto

```text
.
├── generated/
│   ├── C_ReducidoLexer.js
│   ├── C_ReducidoParser.js
│   └── ...
│
├── C_Reducido.g4
├── CustomCVisitor.js
├── index.js
├── input.txt
├── package.json
└── README.md
```

---

# Descripción de Archivos

| Archivo | Función |
|---|---|
| `C_Reducido.g4` | Gramática formal del lenguaje |
| `generated/` | Código generado automáticamente por ANTLR4 |
| `index.js` | Punto de entrada principal |
| `CustomCVisitor.js` | Implementación semántica e interpretación |
| `input.txt` | Archivo de entrada para pruebas |

---

# Ejemplo de Entrada

```c
if (1) {
    printf("Hola Mundo");
}
```

---

# Ejemplo de Salida

```text
Hola Mundo
```

---

# Objetivos Académicos

Este proyecto fue desarrollado con fines académicos para aplicar conceptos de:

- Análisis léxico
- Análisis sintáctico
- Árboles de derivación
- Interpretación de lenguajes
- Patrones de diseño
- Construcción de compiladores

---

# Autor

**[Tu Nombre Completo]**  
Ingeniería en Sistemas de Información  
UTN
