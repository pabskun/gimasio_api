'use strict';

const express = require('express');
const router = express.Router();
const Ejercicio = require('../models/ejercicios.model');

router.post('/registrar-ejercicio', (req, res) => {
    let ejercicio = new Ejercicio({
        nombre: req.body.nombre,
        zona: req.body.zona,
        estado: 'Activo'
    });
    ejercicio.save((err, ejercicio_bd) => {
        if (err) {
            res.json({
                msj: 'El ejercicio no se pudo registrar',
                err
            });
        } else {
            res.json({
                msj: 'El ejercicio se registró correctamente',
                ejercicio_bd
            });
        }
    });

});

router.get('/listar-ejercicios', (req, res) => {
    Ejercicio.find((err, lista_ejercicios) => {
        if (err) {
            res.json({
                msj: 'No se encontraron ejercicios',
                err
            });
        } else {
            res.json({
                lista_ejercicios
            });
        }
    });
});

module.exports = router;