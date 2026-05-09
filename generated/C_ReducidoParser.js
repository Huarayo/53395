// Generated from c:/Users/Lenovo/Desktop/ssl-antlr-calculator/C_Reducido.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import C_ReducidoListener from './C_ReducidoListener.js';
import C_ReducidoVisitor from './C_ReducidoVisitor.js';

const serializedATN = [4,1,16,79,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,
28,8,1,10,1,12,1,31,9,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,3,3,47,8,3,1,4,1,4,1,4,1,4,1,4,3,4,54,8,4,1,5,1,5,1,5,1,5,1,5,1,
5,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,5,8,72,8,8,10,8,12,8,75,9,8,1,
9,1,9,1,9,0,2,2,16,10,0,2,4,6,8,10,12,14,16,18,0,2,1,0,10,11,1,0,12,14,73,
0,20,1,0,0,0,2,22,1,0,0,0,4,32,1,0,0,0,6,34,1,0,0,0,8,53,1,0,0,0,10,55,1,
0,0,0,12,61,1,0,0,0,14,64,1,0,0,0,16,66,1,0,0,0,18,76,1,0,0,0,20,21,3,2,
1,0,21,1,1,0,0,0,22,23,6,1,-1,0,23,24,3,4,2,0,24,29,1,0,0,0,25,26,10,1,0,
0,26,28,3,4,2,0,27,25,1,0,0,0,28,31,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,
30,3,1,0,0,0,31,29,1,0,0,0,32,33,3,6,3,0,33,5,1,0,0,0,34,35,5,1,0,0,35,36,
5,5,0,0,36,37,3,14,7,0,37,38,5,6,0,0,38,39,5,7,0,0,39,40,3,8,4,0,40,46,5,
8,0,0,41,42,5,2,0,0,42,43,5,7,0,0,43,44,3,8,4,0,44,45,5,8,0,0,45,47,1,0,
0,0,46,41,1,0,0,0,46,47,1,0,0,0,47,7,1,0,0,0,48,54,3,10,5,0,49,50,3,10,5,
0,50,51,3,8,4,0,51,54,1,0,0,0,52,54,3,12,6,0,53,48,1,0,0,0,53,49,1,0,0,0,
53,52,1,0,0,0,54,9,1,0,0,0,55,56,5,3,0,0,56,57,5,5,0,0,57,58,5,15,0,0,58,
59,5,6,0,0,59,60,5,9,0,0,60,11,1,0,0,0,61,62,5,4,0,0,62,63,5,9,0,0,63,13,
1,0,0,0,64,65,7,0,0,0,65,15,1,0,0,0,66,67,6,8,-1,0,67,68,3,18,9,0,68,73,
1,0,0,0,69,70,10,1,0,0,70,72,3,18,9,0,71,69,1,0,0,0,72,75,1,0,0,0,73,71,
1,0,0,0,73,74,1,0,0,0,74,17,1,0,0,0,75,73,1,0,0,0,76,77,7,1,0,0,77,19,1,
0,0,0,4,29,46,53,73];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class C_ReducidoParser extends antlr4.Parser {

    static grammarFileName = "C_Reducido.g4";
    static literalNames = [ null, "'if'", "'else'", "'printf'", "'return'", 
                            "'('", "')'", "'{'", "'}'", "';'", "'0'", "'1'" ];
    static symbolicNames = [ null, "SI", "SINO", "IMPRIMIR", "RETORNAR", 
                             "PAREN_ABRE", "PAREN_CIERRA", "LLAVE_ABRE", 
                             "LLAVE_CIERRA", "PUNTO_COMA", "CERO", "UNO", 
                             "LETRA", "DIGITO", "SIMBOLO", "CADENA", "IGNORAR_ESPACIOS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "decision", 
                         "sentencia", "salida", "terminar", "condicion", 
                         "caracteres", "caracter" ];

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
    	case 8:
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
	        this.state = 20;
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
	        this.state = 23;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 29;
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
	                this.state = 25;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 26;
	                this.instruccion(); 
	            }
	            this.state = 31;
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
	        this.state = 32;
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
	        this.state = 34;
	        this.match(C_ReducidoParser.SI);
	        this.state = 35;
	        this.match(C_ReducidoParser.PAREN_ABRE);
	        this.state = 36;
	        this.condicion();
	        this.state = 37;
	        this.match(C_ReducidoParser.PAREN_CIERRA);
	        this.state = 38;
	        this.match(C_ReducidoParser.LLAVE_ABRE);
	        this.state = 39;
	        this.sentencia();
	        this.state = 40;
	        this.match(C_ReducidoParser.LLAVE_CIERRA);
	        this.state = 46;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 41;
	            this.match(C_ReducidoParser.SINO);
	            this.state = 42;
	            this.match(C_ReducidoParser.LLAVE_ABRE);
	            this.state = 43;
	            this.sentencia();
	            this.state = 44;
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
	        this.state = 53;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 48;
	            this.salida();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.salida();
	            this.state = 50;
	            this.sentencia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
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
	        this.state = 55;
	        this.match(C_ReducidoParser.IMPRIMIR);
	        this.state = 56;
	        this.match(C_ReducidoParser.PAREN_ABRE);
	        this.state = 57;
	        this.match(C_ReducidoParser.CADENA);
	        this.state = 58;
	        this.match(C_ReducidoParser.PAREN_CIERRA);
	        this.state = 59;
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
	        this.state = 61;
	        this.match(C_ReducidoParser.RETORNAR);
	        this.state = 62;
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
	        this.state = 64;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
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


	caracteres(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CaracteresContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, C_ReducidoParser.RULE_caracteres, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.caracter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 73;
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
	                this.state = 69;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 70;
	                this.caracter(); 
	            }
	            this.state = 75;
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
	    this.enterRule(localctx, 18, C_ReducidoParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
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
C_ReducidoParser.SI = 1;
C_ReducidoParser.SINO = 2;
C_ReducidoParser.IMPRIMIR = 3;
C_ReducidoParser.RETORNAR = 4;
C_ReducidoParser.PAREN_ABRE = 5;
C_ReducidoParser.PAREN_CIERRA = 6;
C_ReducidoParser.LLAVE_ABRE = 7;
C_ReducidoParser.LLAVE_CIERRA = 8;
C_ReducidoParser.PUNTO_COMA = 9;
C_ReducidoParser.CERO = 10;
C_ReducidoParser.UNO = 11;
C_ReducidoParser.LETRA = 12;
C_ReducidoParser.DIGITO = 13;
C_ReducidoParser.SIMBOLO = 14;
C_ReducidoParser.CADENA = 15;
C_ReducidoParser.IGNORAR_ESPACIOS = 16;

C_ReducidoParser.RULE_programa = 0;
C_ReducidoParser.RULE_instrucciones = 1;
C_ReducidoParser.RULE_instruccion = 2;
C_ReducidoParser.RULE_decision = 3;
C_ReducidoParser.RULE_sentencia = 4;
C_ReducidoParser.RULE_salida = 5;
C_ReducidoParser.RULE_terminar = 6;
C_ReducidoParser.RULE_condicion = 7;
C_ReducidoParser.RULE_caracteres = 8;
C_ReducidoParser.RULE_caracter = 9;

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

	CADENA() {
	    return this.getToken(C_ReducidoParser.CADENA, 0);
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

	LETRA() {
	    return this.getToken(C_ReducidoParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(C_ReducidoParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(C_ReducidoParser.SIMBOLO, 0);
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




C_ReducidoParser.ProgramaContext = ProgramaContext; 
C_ReducidoParser.InstruccionesContext = InstruccionesContext; 
C_ReducidoParser.InstruccionContext = InstruccionContext; 
C_ReducidoParser.DecisionContext = DecisionContext; 
C_ReducidoParser.SentenciaContext = SentenciaContext; 
C_ReducidoParser.SalidaContext = SalidaContext; 
C_ReducidoParser.TerminarContext = TerminarContext; 
C_ReducidoParser.CondicionContext = CondicionContext; 
C_ReducidoParser.CaracteresContext = CaracteresContext; 
C_ReducidoParser.CaracterContext = CaracterContext; 
