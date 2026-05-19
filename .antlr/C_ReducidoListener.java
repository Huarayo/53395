// Generated from c:/Users/Lenovo/Desktop/Analizador/otro/53395/C_Reducido.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link C_ReducidoParser}.
 */
public interface C_ReducidoListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link C_ReducidoParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(C_ReducidoParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link C_ReducidoParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(C_ReducidoParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link C_ReducidoParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(C_ReducidoParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link C_ReducidoParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(C_ReducidoParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link C_ReducidoParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(C_ReducidoParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link C_ReducidoParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(C_ReducidoParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by the {@code DecisionSi}
	 * labeled alternative in {@link C_ReducidoParser#decision}.
	 * @param ctx the parse tree
	 */
	void enterDecisionSi(C_ReducidoParser.DecisionSiContext ctx);
	/**
	 * Exit a parse tree produced by the {@code DecisionSi}
	 * labeled alternative in {@link C_ReducidoParser#decision}.
	 * @param ctx the parse tree
	 */
	void exitDecisionSi(C_ReducidoParser.DecisionSiContext ctx);
	/**
	 * Enter a parse tree produced by {@link C_ReducidoParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(C_ReducidoParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link C_ReducidoParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(C_ReducidoParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MostrarTexto}
	 * labeled alternative in {@link C_ReducidoParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterMostrarTexto(C_ReducidoParser.MostrarTextoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MostrarTexto}
	 * labeled alternative in {@link C_ReducidoParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitMostrarTexto(C_ReducidoParser.MostrarTextoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code Finalizar}
	 * labeled alternative in {@link C_ReducidoParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterFinalizar(C_ReducidoParser.FinalizarContext ctx);
	/**
	 * Exit a parse tree produced by the {@code Finalizar}
	 * labeled alternative in {@link C_ReducidoParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitFinalizar(C_ReducidoParser.FinalizarContext ctx);
	/**
	 * Enter a parse tree produced by {@link C_ReducidoParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(C_ReducidoParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link C_ReducidoParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(C_ReducidoParser.CondicionContext ctx);
	/**
	 * Enter a parse tree produced by {@link C_ReducidoParser#caracteres}.
	 * @param ctx the parse tree
	 */
	void enterCaracteres(C_ReducidoParser.CaracteresContext ctx);
	/**
	 * Exit a parse tree produced by {@link C_ReducidoParser#caracteres}.
	 * @param ctx the parse tree
	 */
	void exitCaracteres(C_ReducidoParser.CaracteresContext ctx);
	/**
	 * Enter a parse tree produced by {@link C_ReducidoParser#caracter}.
	 * @param ctx the parse tree
	 */
	void enterCaracter(C_ReducidoParser.CaracterContext ctx);
	/**
	 * Exit a parse tree produced by {@link C_ReducidoParser#caracter}.
	 * @param ctx the parse tree
	 */
	void exitCaracter(C_ReducidoParser.CaracterContext ctx);
}