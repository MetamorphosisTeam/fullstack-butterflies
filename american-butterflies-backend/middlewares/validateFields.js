
import { validationResult } from 'express-validator';

/**
 * Middleware que revisa los errores de validación generados por express-validator.
 * Si encuentra errores, detiene la cadena y responde con un error 400.
 * Si no hay errores, continúa al siguiente middleware o controlador.
 * @param {import('express').Request} req - El objeto de solicitud de Express.
 * @param {import('express').Response} res - El objeto de respuesta de Express.
 * @param {import('express').NextFunction} next - La función para pasar al siguiente middleware.
 */
export const validateFields = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.array().map(error => ({
                path: error.path, //campo que fallo (ej:'nombre de la mariposa')
                value: error.value, //valor que se envió (ej: 'abeja reina')
                msg: error.msg, //mensaje de error personalizado
                location: error.location // donde esta el campo del error ('body', 'params', 'query')
            }))
        });
    }
    //para sanitizar debo definir las reglas en los validadores
    console.log(`Validación exitosa para: ${req.method} ${req.originalUrl}`); // no encuentra errores avanza al siguiente middleware-> controlador
    next();
};
