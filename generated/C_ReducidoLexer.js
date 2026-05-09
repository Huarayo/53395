// Generated from c:/Users/Lenovo/Desktop/ssl-antlr-calculator/C_Reducido.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,16,100,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,6,
1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,
5,14,78,8,14,10,14,12,14,81,9,14,1,14,1,14,1,14,5,14,86,8,14,10,14,12,14,
89,9,14,1,14,3,14,92,8,14,1,15,4,15,95,8,15,11,15,12,15,96,1,15,1,15,0,0,
16,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,
29,15,31,16,1,0,6,2,0,65,90,97,122,1,0,48,57,5,0,33,33,44,44,46,46,58,59,
63,63,3,0,10,10,13,13,34,34,3,0,10,10,13,13,39,39,3,0,9,10,13,13,32,32,103,
0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,
0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,
0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,1,33,1,0,0,0,3,
36,1,0,0,0,5,41,1,0,0,0,7,48,1,0,0,0,9,55,1,0,0,0,11,57,1,0,0,0,13,59,1,
0,0,0,15,61,1,0,0,0,17,63,1,0,0,0,19,65,1,0,0,0,21,67,1,0,0,0,23,69,1,0,
0,0,25,71,1,0,0,0,27,73,1,0,0,0,29,91,1,0,0,0,31,94,1,0,0,0,33,34,5,105,
0,0,34,35,5,102,0,0,35,2,1,0,0,0,36,37,5,101,0,0,37,38,5,108,0,0,38,39,5,
115,0,0,39,40,5,101,0,0,40,4,1,0,0,0,41,42,5,112,0,0,42,43,5,114,0,0,43,
44,5,105,0,0,44,45,5,110,0,0,45,46,5,116,0,0,46,47,5,102,0,0,47,6,1,0,0,
0,48,49,5,114,0,0,49,50,5,101,0,0,50,51,5,116,0,0,51,52,5,117,0,0,52,53,
5,114,0,0,53,54,5,110,0,0,54,8,1,0,0,0,55,56,5,40,0,0,56,10,1,0,0,0,57,58,
5,41,0,0,58,12,1,0,0,0,59,60,5,123,0,0,60,14,1,0,0,0,61,62,5,125,0,0,62,
16,1,0,0,0,63,64,5,59,0,0,64,18,1,0,0,0,65,66,5,48,0,0,66,20,1,0,0,0,67,
68,5,49,0,0,68,22,1,0,0,0,69,70,7,0,0,0,70,24,1,0,0,0,71,72,7,1,0,0,72,26,
1,0,0,0,73,74,7,2,0,0,74,28,1,0,0,0,75,79,5,34,0,0,76,78,8,3,0,0,77,76,1,
0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,1,0,
0,0,82,92,5,34,0,0,83,87,5,39,0,0,84,86,8,4,0,0,85,84,1,0,0,0,86,89,1,0,
0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,92,5,39,0,
0,91,75,1,0,0,0,91,83,1,0,0,0,92,30,1,0,0,0,93,95,7,5,0,0,94,93,1,0,0,0,
95,96,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,97,98,1,0,0,0,98,99,6,15,0,0,99,
32,1,0,0,0,5,0,79,87,91,96,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class C_ReducidoLexer extends antlr4.Lexer {

    static grammarFileName = "C_Reducido.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'if'", "'else'", "'printf'", "'return'", 
                         "'('", "')'", "'{'", "'}'", "';'", "'0'", "'1'" ];
	static symbolicNames = [ null, "SI", "SINO", "IMPRIMIR", "RETORNAR", "PAREN_ABRE", 
                          "PAREN_CIERRA", "LLAVE_ABRE", "LLAVE_CIERRA", 
                          "PUNTO_COMA", "CERO", "UNO", "LETRA", "DIGITO", 
                          "SIMBOLO", "CADENA", "IGNORAR_ESPACIOS" ];
	static ruleNames = [ "SI", "SINO", "IMPRIMIR", "RETORNAR", "PAREN_ABRE", 
                      "PAREN_CIERRA", "LLAVE_ABRE", "LLAVE_CIERRA", "PUNTO_COMA", 
                      "CERO", "UNO", "LETRA", "DIGITO", "SIMBOLO", "CADENA", 
                      "IGNORAR_ESPACIOS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

C_ReducidoLexer.EOF = antlr4.Token.EOF;
C_ReducidoLexer.SI = 1;
C_ReducidoLexer.SINO = 2;
C_ReducidoLexer.IMPRIMIR = 3;
C_ReducidoLexer.RETORNAR = 4;
C_ReducidoLexer.PAREN_ABRE = 5;
C_ReducidoLexer.PAREN_CIERRA = 6;
C_ReducidoLexer.LLAVE_ABRE = 7;
C_ReducidoLexer.LLAVE_CIERRA = 8;
C_ReducidoLexer.PUNTO_COMA = 9;
C_ReducidoLexer.CERO = 10;
C_ReducidoLexer.UNO = 11;
C_ReducidoLexer.LETRA = 12;
C_ReducidoLexer.DIGITO = 13;
C_ReducidoLexer.SIMBOLO = 14;
C_ReducidoLexer.CADENA = 15;
C_ReducidoLexer.IGNORAR_ESPACIOS = 16;



