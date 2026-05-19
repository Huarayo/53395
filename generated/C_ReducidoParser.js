// Generated from c:/Users/Lenovo/Desktop/Analizador/otro/53395/C_Reducido.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import C_ReducidoListener from './C_ReducidoListener.js';
import C_ReducidoVisitor from './C_ReducidoVisitor.js';

const serializedATN = [4,1,22,101,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,36,8,1,10,1,12,1,39,9,1,1,2,1,
2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,55,8,3,1,4,1,4,1,4,
1,4,1,4,3,4,62,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,
8,1,8,1,9,1,9,1,9,1,9,1,9,5,9,84,8,9,10,9,12,9,87,9,9,1,10,1,10,1,10,1,10,
3,10,93,8,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,0,2,2,18,14,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,0,2,1,0,12,13,1,0,16,21,94,0,28,1,0,0,0,2,30,1,0,
0,0,4,40,1,0,0,0,6,42,1,0,0,0,8,61,1,0,0,0,10,63,1,0,0,0,12,69,1,0,0,0,14,
72,1,0,0,0,16,74,1,0,0,0,18,78,1,0,0,0,20,92,1,0,0,0,22,94,1,0,0,0,24,96,
1,0,0,0,26,98,1,0,0,0,28,29,3,2,1,0,29,1,1,0,0,0,30,31,6,1,-1,0,31,32,3,
4,2,0,32,37,1,0,0,0,33,34,10,1,0,0,34,36,3,4,2,0,35,33,1,0,0,0,36,39,1,0,
0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,3,1,0,0,0,39,37,1,0,0,0,40,41,3,6,3,0,
41,5,1,0,0,0,42,43,5,2,0,0,43,44,5,6,0,0,44,45,3,14,7,0,45,46,5,7,0,0,46,
47,5,8,0,0,47,48,3,8,4,0,48,54,5,9,0,0,49,50,5,3,0,0,50,51,5,8,0,0,51,52,
3,8,4,0,52,53,5,9,0,0,53,55,1,0,0,0,54,49,1,0,0,0,54,55,1,0,0,0,55,7,1,0,
0,0,56,62,3,10,5,0,57,58,3,10,5,0,58,59,3,8,4,0,59,62,1,0,0,0,60,62,3,12,
6,0,61,56,1,0,0,0,61,57,1,0,0,0,61,60,1,0,0,0,62,9,1,0,0,0,63,64,5,4,0,0,
64,65,5,6,0,0,65,66,3,16,8,0,66,67,5,7,0,0,67,68,5,10,0,0,68,11,1,0,0,0,
69,70,5,5,0,0,70,71,5,10,0,0,71,13,1,0,0,0,72,73,7,0,0,0,73,15,1,0,0,0,74,
75,5,11,0,0,75,76,3,18,9,0,76,77,5,11,0,0,77,17,1,0,0,0,78,79,6,9,-1,0,79,
80,3,20,10,0,80,85,1,0,0,0,81,82,10,1,0,0,82,84,3,20,10,0,83,81,1,0,0,0,
84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,19,1,0,0,0,87,85,1,0,0,0,88,
93,3,22,11,0,89,93,3,24,12,0,90,93,3,26,13,0,91,93,5,1,0,0,92,88,1,0,0,0,
92,89,1,0,0,0,92,90,1,0,0,0,92,91,1,0,0,0,93,21,1,0,0,0,94,95,5,14,0,0,95,
23,1,0,0,0,96,97,5,15,0,0,97,25,1,0,0,0,98,99,7,1,0,0,99,27,1,0,0,0,5,37,
54,61,85,92];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class C_ReducidoParser extends antlr4.Parser {

    static grammarFileName = "C_Reducido.g4";
    static literalNames = [ null, "' '", "'if'", "'else'", "'printf'", "'return'", 
                            "'('", "')'", "'{'", "'}'", "';'", "'\"'", "'0'", 
                            "'1'", null, null, "'.'", "','", "'!'", "'?'", 
                            "':'", "'''" ];
    static symbolicNames = [ null, null, "SI", "SINO", "IMPRIMIR", "RETORNAR", 
                             "PAREN_ABRE", "PAREN_CIERRA", "LLAVE_ABRE", 
                             "LLAVE_CIERRA", "PUNTO_COMA", "COMILLA_DOBLE", 
                             "CERO", "UNO", "LETRA", "DIGITO", "S_PUNTO", 
                             "S_COMA", "S_EXCLAMACION", "S_PREGUNTA", "S_DOS_PUNTOS", 
                             "S_COMILLA_SIMPLE", "IGNORAR_INNECESARIOS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "decision", 
                         "sentencia", "salida", "terminar", "condicion", 
                         "cadena", "caracteres", "caracter", "letra", "digito", 
                         "simbolo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = C_ReducidoParser.ruleNames;
        this.literalNames = C_ReducidoParser.literalNames;
        this.symbolicNames = C_ReducidoParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.instrucciones_sempred(localctx, predIndex);
    	case 9:
    	    		return this.caracteres_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    caracteres_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, C_ReducidoParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.instrucciones(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, C_ReducidoParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 37;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new InstruccionesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, C_ReducidoParser.RULE_instrucciones);
	                this.state = 33;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 34;
	                this.instruccion(); 
	            }
	            this.state = 39;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, C_ReducidoParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.decision();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decision() {
	    let localctx = new DecisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, C_ReducidoParser.RULE_decision);
	    try {
	        localctx = new DecisionSiContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(C_ReducidoParser.SI);
	        this.state = 43;
	        this.match(C_ReducidoParser.PAREN_ABRE);
	        this.state = 44;
	        this.condicion();
	        this.state = 45;
	        this.match(C_ReducidoParser.PAREN_CIERRA);
	        this.state = 46;
	        this.match(C_ReducidoParser.LLAVE_ABRE);
	        this.state = 47;
	        this.sentencia();
	        this.state = 48;
	        this.match(C_ReducidoParser.LLAVE_CIERRA);
	        this.state = 54;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 49;
	            this.match(C_ReducidoParser.SINO);
	            this.state = 50;
	            this.match(C_ReducidoParser.LLAVE_ABRE);
	            this.state = 51;
	            this.sentencia();
	            this.state = 52;
	            this.match(C_ReducidoParser.LLAVE_CIERRA);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, C_ReducidoParser.RULE_sentencia);
	    try {
	        this.state = 61;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.salida();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.salida();
	            this.state = 58;
	            this.sentencia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 60;
	            this.terminar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, C_ReducidoParser.RULE_salida);
	    try {
	        localctx = new MostrarTextoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(C_ReducidoParser.IMPRIMIR);
	        this.state = 64;
	        this.match(C_ReducidoParser.PAREN_ABRE);
	        this.state = 65;
	        this.cadena();
	        this.state = 66;
	        this.match(C_ReducidoParser.PAREN_CIERRA);
	        this.state = 67;
	        this.match(C_ReducidoParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, C_ReducidoParser.RULE_terminar);
	    try {
	        localctx = new FinalizarContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this.match(C_ReducidoParser.RETORNAR);
	        this.state = 70;
	        this.match(C_ReducidoParser.PUNTO_COMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, C_ReducidoParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===13)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, C_ReducidoParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(C_ReducidoParser.COMILLA_DOBLE);
	        this.state = 75;
	        this.caracteres(0);
	        this.state = 76;
	        this.match(C_ReducidoParser.COMILLA_DOBLE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	caracteres(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CaracteresContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, C_ReducidoParser.RULE_caracteres, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.caracter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CaracteresContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, C_ReducidoParser.RULE_caracteres);
	                this.state = 81;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 82;
	                this.caracter(); 
	            }
	            this.state = 87;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, C_ReducidoParser.RULE_caracter);
	    try {
	        this.state = 92;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.letra();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 89;
	            this.digito();
	            break;
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 90;
	            this.simbolo();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 91;
	            this.match(C_ReducidoParser.T__0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letra() {
	    let localctx = new LetraContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, C_ReducidoParser.RULE_letra);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(C_ReducidoParser.LETRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	digito() {
	    let localctx = new DigitoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, C_ReducidoParser.RULE_digito);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(C_ReducidoParser.DIGITO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simbolo() {
	    let localctx = new SimboloContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, C_ReducidoParser.RULE_simbolo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4128768) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

C_ReducidoParser.EOF = antlr4.Token.EOF;
C_ReducidoParser.T__0 = 1;
C_ReducidoParser.SI = 2;
C_ReducidoParser.SINO = 3;
C_ReducidoParser.IMPRIMIR = 4;
C_ReducidoParser.RETORNAR = 5;
C_ReducidoParser.PAREN_ABRE = 6;
C_ReducidoParser.PAREN_CIERRA = 7;
C_ReducidoParser.LLAVE_ABRE = 8;
C_ReducidoParser.LLAVE_CIERRA = 9;
C_ReducidoParser.PUNTO_COMA = 10;
C_ReducidoParser.COMILLA_DOBLE = 11;
C_ReducidoParser.CERO = 12;
C_ReducidoParser.UNO = 13;
C_ReducidoParser.LETRA = 14;
C_ReducidoParser.DIGITO = 15;
C_ReducidoParser.S_PUNTO = 16;
C_ReducidoParser.S_COMA = 17;
C_ReducidoParser.S_EXCLAMACION = 18;
C_ReducidoParser.S_PREGUNTA = 19;
C_ReducidoParser.S_DOS_PUNTOS = 20;
C_ReducidoParser.S_COMILLA_SIMPLE = 21;
C_ReducidoParser.IGNORAR_INNECESARIOS = 22;

C_ReducidoParser.RULE_programa = 0;
C_ReducidoParser.RULE_instrucciones = 1;
C_ReducidoParser.RULE_instruccion = 2;
C_ReducidoParser.RULE_decision = 3;
C_ReducidoParser.RULE_sentencia = 4;
C_ReducidoParser.RULE_salida = 5;
C_ReducidoParser.RULE_terminar = 6;
C_ReducidoParser.RULE_condicion = 7;
C_ReducidoParser.RULE_cadena = 8;
C_ReducidoParser.RULE_caracteres = 9;
C_ReducidoParser.RULE_caracter = 10;
C_ReducidoParser.RULE_letra = 11;
C_ReducidoParser.RULE_digito = 12;
C_ReducidoParser.RULE_simbolo = 13;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_instrucciones;
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_instruccion;
    }

	decision() {
	    return this.getTypedRuleContext(DecisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DecisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_decision;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DecisionSiContext extends DecisionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SI() {
	    return this.getToken(C_ReducidoParser.SI, 0);
	};

	PAREN_ABRE() {
	    return this.getToken(C_ReducidoParser.PAREN_ABRE, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	PAREN_CIERRA() {
	    return this.getToken(C_ReducidoParser.PAREN_CIERRA, 0);
	};

	LLAVE_ABRE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(C_ReducidoParser.LLAVE_ABRE);
	    } else {
	        return this.getToken(C_ReducidoParser.LLAVE_ABRE, i);
	    }
	};


	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	LLAVE_CIERRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(C_ReducidoParser.LLAVE_CIERRA);
	    } else {
	        return this.getToken(C_ReducidoParser.LLAVE_CIERRA, i);
	    }
	};


	SINO() {
	    return this.getToken(C_ReducidoParser.SINO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterDecisionSi(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitDecisionSi(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitDecisionSi(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

C_ReducidoParser.DecisionSiContext = DecisionSiContext;

class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_salida;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MostrarTextoContext extends SalidaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IMPRIMIR() {
	    return this.getToken(C_ReducidoParser.IMPRIMIR, 0);
	};

	PAREN_ABRE() {
	    return this.getToken(C_ReducidoParser.PAREN_ABRE, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	PAREN_CIERRA() {
	    return this.getToken(C_ReducidoParser.PAREN_CIERRA, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(C_ReducidoParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterMostrarTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitMostrarTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitMostrarTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

C_ReducidoParser.MostrarTextoContext = MostrarTextoContext;

class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_terminar;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class FinalizarContext extends TerminarContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	RETORNAR() {
	    return this.getToken(C_ReducidoParser.RETORNAR, 0);
	};

	PUNTO_COMA() {
	    return this.getToken(C_ReducidoParser.PUNTO_COMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterFinalizar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitFinalizar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitFinalizar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

C_ReducidoParser.FinalizarContext = FinalizarContext;

class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_condicion;
    }

	CERO() {
	    return this.getToken(C_ReducidoParser.CERO, 0);
	};

	UNO() {
	    return this.getToken(C_ReducidoParser.UNO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_cadena;
    }

	COMILLA_DOBLE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(C_ReducidoParser.COMILLA_DOBLE);
	    } else {
	        return this.getToken(C_ReducidoParser.COMILLA_DOBLE, i);
	    }
	};


	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracteresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_caracteres;
    }

	caracter() {
	    return this.getTypedRuleContext(CaracterContext,0);
	};

	caracteres() {
	    return this.getTypedRuleContext(CaracteresContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterCaracteres(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitCaracteres(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitCaracteres(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_caracter;
    }

	letra() {
	    return this.getTypedRuleContext(LetraContext,0);
	};

	digito() {
	    return this.getTypedRuleContext(DigitoContext,0);
	};

	simbolo() {
	    return this.getTypedRuleContext(SimboloContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LetraContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_letra;
    }

	LETRA() {
	    return this.getToken(C_ReducidoParser.LETRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterLetra(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitLetra(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitLetra(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DigitoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_digito;
    }

	DIGITO() {
	    return this.getToken(C_ReducidoParser.DIGITO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterDigito(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitDigito(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitDigito(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SimboloContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = C_ReducidoParser.RULE_simbolo;
    }

	S_PUNTO() {
	    return this.getToken(C_ReducidoParser.S_PUNTO, 0);
	};

	S_COMA() {
	    return this.getToken(C_ReducidoParser.S_COMA, 0);
	};

	S_EXCLAMACION() {
	    return this.getToken(C_ReducidoParser.S_EXCLAMACION, 0);
	};

	S_PREGUNTA() {
	    return this.getToken(C_ReducidoParser.S_PREGUNTA, 0);
	};

	S_DOS_PUNTOS() {
	    return this.getToken(C_ReducidoParser.S_DOS_PUNTOS, 0);
	};

	S_COMILLA_SIMPLE() {
	    return this.getToken(C_ReducidoParser.S_COMILLA_SIMPLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.enterSimbolo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof C_ReducidoListener ) {
	        listener.exitSimbolo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof C_ReducidoVisitor ) {
	        return visitor.visitSimbolo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




C_ReducidoParser.ProgramaContext = ProgramaContext; 
C_ReducidoParser.InstruccionesContext = InstruccionesContext; 
C_ReducidoParser.InstruccionContext = InstruccionContext; 
C_ReducidoParser.DecisionContext = DecisionContext; 
C_ReducidoParser.SentenciaContext = SentenciaContext; 
C_ReducidoParser.SalidaContext = SalidaContext; 
C_ReducidoParser.TerminarContext = TerminarContext; 
C_ReducidoParser.CondicionContext = CondicionContext; 
C_ReducidoParser.CadenaContext = CadenaContext; 
C_ReducidoParser.CaracteresContext = CaracteresContext; 
C_ReducidoParser.CaracterContext = CaracterContext; 
C_ReducidoParser.LetraContext = LetraContext; 
C_ReducidoParser.DigitoContext = DigitoContext; 
C_ReducidoParser.SimboloContext = SimboloContext; 
