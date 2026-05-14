import C_ReducidoVisitor from './generated/C_ReducidoVisitor.js';

//Hereda del visitor generado automáticamente para no perder los cambios si recompilas la gramática
//interpretar reglas de js a C -> los metodos generados con las etiquetas # DecisionSi,  # MostrarTexto,  # Finalizar
class CustomCVisitor extends C_ReducidoVisitor {
    visitDecisionSi(ctx) {
        const condicion = ctx.condicion().getText();
        if (condicion === "1") {
            // sentencia(0) es el bloque del IF
            return this.visit(ctx.sentencia(0));
        } else if (ctx.sentencia(1)) {
            // sentencia(1) es el bloque del ELSE (si existe)
            return this.visit(ctx.sentencia(1));
        }
        return null;
    }

    visitMostrarTexto(ctx) {
        // Ahora usamos CADENA() porque es un Token del Lexer
        const textoCompleto = ctx.CADENA().getText();
        // Quitamos las comillas
        const textoLimpio = textoCompleto.substring(1, textoCompleto.length - 1);
        console.log(textoLimpio);
        return null;
    }

    visitFinalizar(ctx) {
        return null; 
    }
}
export default CustomCVisitor;