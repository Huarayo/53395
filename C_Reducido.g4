grammar C_Reducido;

// =================================================================
// PARSER - REGLAS SINTÁCTICAS (Estructura de la Gramática)
// =================================================================

programa: instrucciones;

instrucciones: instruccion
             | instrucciones instruccion
             ;

instruccion: decision;

// Estructura if-else jerárquica con etiquetas para el Visitor
decision: SI PAREN_ABRE condicion PAREN_CIERRA LLAVE_ABRE sentencia LLAVE_CIERRA (SINO LLAVE_ABRE sentencia LLAVE_CIERRA)? # DecisionSi;

sentencia: salida
         | salida sentencia
         | terminar
         ;

salida: IMPRIMIR PAREN_ABRE cadena PAREN_CIERRA PUNTO_COMA # MostrarTexto;

terminar: RETORNAR PUNTO_COMA # Finalizar;

condicion: CERO | UNO;

cadena: COMILLA_DOBLE caracteres COMILLA_DOBLE ;

caracteres: caracter
          | caracteres caracter
          ;

caracter: letra
        | digito
        | simbolo
        | ' '  // Al poner el espacio literal acá, SOLO se acepta adentro de las comillas
        ;

letra: LETRA ;

// Mapeo de la regla de la profesora donde mezcló los dígitos y algunos símbolos
digito: DIGITO ;

simbolo: S_PUNTO 
       | S_COMA 
       | S_EXCLAMACION 
       | S_PREGUNTA 
       | S_DOS_PUNTOS 
       | S_COMILLA_SIMPLE 
       ;


// =================================================================
// LEXER - VOCABULARIO (Tokens
// =================================================================


SI: 'if';
SINO: 'else';
IMPRIMIR: 'printf';
RETORNAR: 'return';


PAREN_ABRE: '(';
PAREN_CIERRA: ')';
LLAVE_ABRE: '{';
LLAVE_CIERRA: '}';
PUNTO_COMA: ';';
COMILLA_DOBLE: '"';


CERO: '0';
UNO: '1';


LETRA: [a-zA-Z];
DIGITO: [0-9];


S_PUNTO: '.';
S_COMA: ',';
S_EXCLAMACION: '!';
S_PREGUNTA: '?';
S_DOS_PUNTOS: ':';
S_COMILLA_SIMPLE: '\'';
  

// Regla de descarte global: limpia espacios, tabulaciones y saltos de línea del código fuente
IGNORAR_INNECESARIOS: [ \t\r\n]+ -> skip;