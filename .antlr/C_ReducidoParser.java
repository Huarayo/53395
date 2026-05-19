// Generated from c:/Users/Lenovo/Desktop/Analizador/otro/53395/C_Reducido.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class C_ReducidoParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		SI=1, SINO=2, IMPRIMIR=3, RETORNAR=4, PAREN_ABRE=5, PAREN_CIERRA=6, LLAVE_ABRE=7, 
		LLAVE_CIERRA=8, PUNTO_COMA=9, CERO=10, UNO=11, LETRA=12, DIGITO=13, SIMBOLO=14, 
		CADENA=15, IGNORAR_ESPACIOS=16;
	public static final int
		RULE_programa = 0, RULE_instrucciones = 1, RULE_instruccion = 2, RULE_decision = 3, 
		RULE_sentencia = 4, RULE_salida = 5, RULE_terminar = 6, RULE_condicion = 7, 
		RULE_caracteres = 8, RULE_caracter = 9;
	private static String[] makeRuleNames() {
		return new String[] {
			"programa", "instrucciones", "instruccion", "decision", "sentencia", 
			"salida", "terminar", "condicion", "caracteres", "caracter"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'if'", "'else'", "'printf'", "'return'", "'('", "')'", "'{'", 
			"'}'", "';'", "'0'", "'1'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "SI", "SINO", "IMPRIMIR", "RETORNAR", "PAREN_ABRE", "PAREN_CIERRA", 
			"LLAVE_ABRE", "LLAVE_CIERRA", "PUNTO_COMA", "CERO", "UNO", "LETRA", "DIGITO", 
			"SIMBOLO", "CADENA", "IGNORAR_ESPACIOS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "C_Reducido.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public C_ReducidoParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public InstruccionesContext instrucciones() {
			return getRuleContext(InstruccionesContext.class,0);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).enterPrograma(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).exitPrograma(this);
		}
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_programa);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(20);
			instrucciones(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstruccionesContext extends ParserRuleContext {
		public InstruccionContext instruccion() {
			return getRuleContext(InstruccionContext.class,0);
		}
		public InstruccionesContext instrucciones() {
			return getRuleContext(InstruccionesContext.class,0);
		}
		public InstruccionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instrucciones; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).enterInstrucciones(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).exitInstrucciones(this);
		}
	}

	public final InstruccionesContext instrucciones() throws RecognitionException {
		return instrucciones(0);
	}

	private InstruccionesContext instrucciones(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		InstruccionesContext _localctx = new InstruccionesContext(_ctx, _parentState);
		InstruccionesContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_instrucciones, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(23);
			instruccion();
			}
			_ctx.stop = _input.LT(-1);
			setState(29);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new InstruccionesContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_instrucciones);
					setState(25);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(26);
					instruccion();
					}
					} 
				}
				setState(31);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstruccionContext extends ParserRuleContext {
		public DecisionContext decision() {
			return getRuleContext(DecisionContext.class,0);
		}
		public InstruccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instruccion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).enterInstruccion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).exitInstruccion(this);
		}
	}

	public final InstruccionContext instruccion() throws RecognitionException {
		InstruccionContext _localctx = new InstruccionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_instruccion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(32);
			decision();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DecisionContext extends ParserRuleContext {
		public DecisionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decision; }
	 
		public DecisionContext() { }
		public void copyFrom(DecisionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DecisionSiContext extends DecisionContext {
		public TerminalNode SI() { return getToken(C_ReducidoParser.SI, 0); }
		public TerminalNode PAREN_ABRE() { return getToken(C_ReducidoParser.PAREN_ABRE, 0); }
		public CondicionContext condicion() {
			return getRuleContext(CondicionContext.class,0);
		}
		public TerminalNode PAREN_CIERRA() { return getToken(C_ReducidoParser.PAREN_CIERRA, 0); }
		public List<TerminalNode> LLAVE_ABRE() { return getTokens(C_ReducidoParser.LLAVE_ABRE); }
		public TerminalNode LLAVE_ABRE(int i) {
			return getToken(C_ReducidoParser.LLAVE_ABRE, i);
		}
		public List<SentenciaContext> sentencia() {
			return getRuleContexts(SentenciaContext.class);
		}
		public SentenciaContext sentencia(int i) {
			return getRuleContext(SentenciaContext.class,i);
		}
		public List<TerminalNode> LLAVE_CIERRA() { return getTokens(C_ReducidoParser.LLAVE_CIERRA); }
		public TerminalNode LLAVE_CIERRA(int i) {
			return getToken(C_ReducidoParser.LLAVE_CIERRA, i);
		}
		public TerminalNode SINO() { return getToken(C_ReducidoParser.SINO, 0); }
		public DecisionSiContext(DecisionContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).enterDecisionSi(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).exitDecisionSi(this);
		}
	}

	public final DecisionContext decision() throws RecognitionException {
		DecisionContext _localctx = new DecisionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_decision);
		try {
			_localctx = new DecisionSiContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			match(SI);
			setState(35);
			match(PAREN_ABRE);
			setState(36);
			condicion();
			setState(37);
			match(PAREN_CIERRA);
			setState(38);
			match(LLAVE_ABRE);
			setState(39);
			sentencia();
			setState(40);
			match(LLAVE_CIERRA);
			setState(46);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				{
				setState(41);
				match(SINO);
				setState(42);
				match(LLAVE_ABRE);
				setState(43);
				sentencia();
				setState(44);
				match(LLAVE_CIERRA);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SentenciaContext extends ParserRuleContext {
		public SalidaContext salida() {
			return getRuleContext(SalidaContext.class,0);
		}
		public SentenciaContext sentencia() {
			return getRuleContext(SentenciaContext.class,0);
		}
		public TerminarContext terminar() {
			return getRuleContext(TerminarContext.class,0);
		}
		public SentenciaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentencia; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).enterSentencia(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).exitSentencia(this);
		}
	}

	public final SentenciaContext sentencia() throws RecognitionException {
		SentenciaContext _localctx = new SentenciaContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_sentencia);
		try {
			setState(53);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(48);
				salida();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(49);
				salida();
				setState(50);
				sentencia();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(52);
				terminar();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class SalidaContext extends ParserRuleContext {
		public SalidaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_salida; }
	 
		public SalidaContext() { }
		public void copyFrom(SalidaContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MostrarTextoContext extends SalidaContext {
		public TerminalNode IMPRIMIR() { return getToken(C_ReducidoParser.IMPRIMIR, 0); }
		public TerminalNode PAREN_ABRE() { return getToken(C_ReducidoParser.PAREN_ABRE, 0); }
		public TerminalNode CADENA() { return getToken(C_ReducidoParser.CADENA, 0); }
		public TerminalNode PAREN_CIERRA() { return getToken(C_ReducidoParser.PAREN_CIERRA, 0); }
		public TerminalNode PUNTO_COMA() { return getToken(C_ReducidoParser.PUNTO_COMA, 0); }
		public MostrarTextoContext(SalidaContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).enterMostrarTexto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).exitMostrarTexto(this);
		}
	}

	public final SalidaContext salida() throws RecognitionException {
		SalidaContext _localctx = new SalidaContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_salida);
		try {
			_localctx = new MostrarTextoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			match(IMPRIMIR);
			setState(56);
			match(PAREN_ABRE);
			setState(57);
			match(CADENA);
			setState(58);
			match(PAREN_CIERRA);
			setState(59);
			match(PUNTO_COMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TerminarContext extends ParserRuleContext {
		public TerminarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terminar; }
	 
		public TerminarContext() { }
		public void copyFrom(TerminarContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FinalizarContext extends TerminarContext {
		public TerminalNode RETORNAR() { return getToken(C_ReducidoParser.RETORNAR, 0); }
		public TerminalNode PUNTO_COMA() { return getToken(C_ReducidoParser.PUNTO_COMA, 0); }
		public FinalizarContext(TerminarContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).enterFinalizar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).exitFinalizar(this);
		}
	}

	public final TerminarContext terminar() throws RecognitionException {
		TerminarContext _localctx = new TerminarContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_terminar);
		try {
			_localctx = new FinalizarContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			match(RETORNAR);
			setState(62);
			match(PUNTO_COMA);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CondicionContext extends ParserRuleContext {
		public TerminalNode CERO() { return getToken(C_ReducidoParser.CERO, 0); }
		public TerminalNode UNO() { return getToken(C_ReducidoParser.UNO, 0); }
		public CondicionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).enterCondicion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).exitCondicion(this);
		}
	}

	public final CondicionContext condicion() throws RecognitionException {
		CondicionContext _localctx = new CondicionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_condicion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			_la = _input.LA(1);
			if ( !(_la==CERO || _la==UNO) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CaracteresContext extends ParserRuleContext {
		public CaracterContext caracter() {
			return getRuleContext(CaracterContext.class,0);
		}
		public CaracteresContext caracteres() {
			return getRuleContext(CaracteresContext.class,0);
		}
		public CaracteresContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caracteres; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).enterCaracteres(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).exitCaracteres(this);
		}
	}

	public final CaracteresContext caracteres() throws RecognitionException {
		return caracteres(0);
	}

	private CaracteresContext caracteres(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		CaracteresContext _localctx = new CaracteresContext(_ctx, _parentState);
		CaracteresContext _prevctx = _localctx;
		int _startState = 16;
		enterRecursionRule(_localctx, 16, RULE_caracteres, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(67);
			caracter();
			}
			_ctx.stop = _input.LT(-1);
			setState(73);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new CaracteresContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_caracteres);
					setState(69);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(70);
					caracter();
					}
					} 
				}
				setState(75);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CaracterContext extends ParserRuleContext {
		public TerminalNode LETRA() { return getToken(C_ReducidoParser.LETRA, 0); }
		public TerminalNode DIGITO() { return getToken(C_ReducidoParser.DIGITO, 0); }
		public TerminalNode SIMBOLO() { return getToken(C_ReducidoParser.SIMBOLO, 0); }
		public CaracterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caracter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).enterCaracter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof C_ReducidoListener ) ((C_ReducidoListener)listener).exitCaracter(this);
		}
	}

	public final CaracterContext caracter() throws RecognitionException {
		CaracterContext _localctx = new CaracterContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_caracter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 28672L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return instrucciones_sempred((InstruccionesContext)_localctx, predIndex);
		case 8:
			return caracteres_sempred((CaracteresContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean instrucciones_sempred(InstruccionesContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean caracteres_sempred(CaracteresContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0010O\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u0001\u001c\b\u0001\n\u0001"+
		"\f\u0001\u001f\t\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003/\b\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004"+
		"6\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0005\bH\b\b\n\b\f\bK\t\b\u0001"+
		"\t\u0001\t\u0001\t\u0000\u0002\u0002\u0010\n\u0000\u0002\u0004\u0006\b"+
		"\n\f\u000e\u0010\u0012\u0000\u0002\u0001\u0000\n\u000b\u0001\u0000\f\u000e"+
		"I\u0000\u0014\u0001\u0000\u0000\u0000\u0002\u0016\u0001\u0000\u0000\u0000"+
		"\u0004 \u0001\u0000\u0000\u0000\u0006\"\u0001\u0000\u0000\u0000\b5\u0001"+
		"\u0000\u0000\u0000\n7\u0001\u0000\u0000\u0000\f=\u0001\u0000\u0000\u0000"+
		"\u000e@\u0001\u0000\u0000\u0000\u0010B\u0001\u0000\u0000\u0000\u0012L"+
		"\u0001\u0000\u0000\u0000\u0014\u0015\u0003\u0002\u0001\u0000\u0015\u0001"+
		"\u0001\u0000\u0000\u0000\u0016\u0017\u0006\u0001\uffff\uffff\u0000\u0017"+
		"\u0018\u0003\u0004\u0002\u0000\u0018\u001d\u0001\u0000\u0000\u0000\u0019"+
		"\u001a\n\u0001\u0000\u0000\u001a\u001c\u0003\u0004\u0002\u0000\u001b\u0019"+
		"\u0001\u0000\u0000\u0000\u001c\u001f\u0001\u0000\u0000\u0000\u001d\u001b"+
		"\u0001\u0000\u0000\u0000\u001d\u001e\u0001\u0000\u0000\u0000\u001e\u0003"+
		"\u0001\u0000\u0000\u0000\u001f\u001d\u0001\u0000\u0000\u0000 !\u0003\u0006"+
		"\u0003\u0000!\u0005\u0001\u0000\u0000\u0000\"#\u0005\u0001\u0000\u0000"+
		"#$\u0005\u0005\u0000\u0000$%\u0003\u000e\u0007\u0000%&\u0005\u0006\u0000"+
		"\u0000&\'\u0005\u0007\u0000\u0000\'(\u0003\b\u0004\u0000(.\u0005\b\u0000"+
		"\u0000)*\u0005\u0002\u0000\u0000*+\u0005\u0007\u0000\u0000+,\u0003\b\u0004"+
		"\u0000,-\u0005\b\u0000\u0000-/\u0001\u0000\u0000\u0000.)\u0001\u0000\u0000"+
		"\u0000./\u0001\u0000\u0000\u0000/\u0007\u0001\u0000\u0000\u000006\u0003"+
		"\n\u0005\u000012\u0003\n\u0005\u000023\u0003\b\u0004\u000036\u0001\u0000"+
		"\u0000\u000046\u0003\f\u0006\u000050\u0001\u0000\u0000\u000051\u0001\u0000"+
		"\u0000\u000054\u0001\u0000\u0000\u00006\t\u0001\u0000\u0000\u000078\u0005"+
		"\u0003\u0000\u000089\u0005\u0005\u0000\u00009:\u0005\u000f\u0000\u0000"+
		":;\u0005\u0006\u0000\u0000;<\u0005\t\u0000\u0000<\u000b\u0001\u0000\u0000"+
		"\u0000=>\u0005\u0004\u0000\u0000>?\u0005\t\u0000\u0000?\r\u0001\u0000"+
		"\u0000\u0000@A\u0007\u0000\u0000\u0000A\u000f\u0001\u0000\u0000\u0000"+
		"BC\u0006\b\uffff\uffff\u0000CD\u0003\u0012\t\u0000DI\u0001\u0000\u0000"+
		"\u0000EF\n\u0001\u0000\u0000FH\u0003\u0012\t\u0000GE\u0001\u0000\u0000"+
		"\u0000HK\u0001\u0000\u0000\u0000IG\u0001\u0000\u0000\u0000IJ\u0001\u0000"+
		"\u0000\u0000J\u0011\u0001\u0000\u0000\u0000KI\u0001\u0000\u0000\u0000"+
		"LM\u0007\u0001\u0000\u0000M\u0013\u0001\u0000\u0000\u0000\u0004\u001d"+
		".5I";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}