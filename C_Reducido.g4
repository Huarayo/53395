grammar C_Reducido;

// parser - reglas sintácticas - armar bien las palabras
programa: instrucciones;

instrucciones: instruccion
             | instrucciones instruccion
             ;

instruccion: decision;

// Usamos etiquetas en español para el Visitor (# DecisionSi, # MostrarTexto, etc.)
decision: SI PAREN_ABRE condicion PAREN_CIERRA LLAVE_ABRE sentencia LLAVE_CIERRA (SINO LLAVE_ABRE sentencia LLAVE_CIERRA)? # DecisionSi;

sentencia: salida
         | salida sentencia
         | terminar
         ;

salida: IMPRIMIR PAREN_ABRE CADENA PAREN_CIERRA PUNTO_COMA # MostrarTexto;

terminar: RETORNAR PUNTO_COMA # Finalizar;

condicion: CERO | UNO;

caracteres: caracter
          | caracteres caracter
          ;

caracter: LETRA | DIGITO | SIMBOLO ;

// léxico - vocabulario

SI: 'if';
SINO: 'else';
IMPRIMIR: 'printf';
RETORNAR: 'return';

PAREN_ABRE: '(';
PAREN_CIERRA: ')';
LLAVE_ABRE: '{';
LLAVE_CIERRA: '}';
PUNTO_COMA: ';';

CERO: '0';
UNO: '1';

LETRA: [a-zA-Z];
DIGITO: [0-9];
SIMBOLO: [.,!?:;]; // Incluimos el espacio aquí para que printf lo acepte

CADENA: ('"' (~["\r\n])* '"') 
      | ('\'' (~['\r\n])* '\'') ;
// Ignora espacios y saltos de línea fuera de las comillas
IGNORAR_ESPACIOS: [ \t\r\n]+ -> skip;