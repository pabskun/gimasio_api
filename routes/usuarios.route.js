'use strict';
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios.model');

router.post('/iniciar-sesion', (req, res) => {
    let correo = req.body.correo;
    let contrasenna = req.body.contrasenna;

    Usuario.findOne({ correo: correo }, (err, usuario) => {
        if (err) {
            res.json({
                msj: 'El correo electrónico o la contraseña no son correctos',
                inicio: false,
                err
            });
        } else {
            if (usuario && usuario.contrasenna == contrasenna) {
                res.json({
                    correo: usuario.correo,
                    tipo: usuario.tipo,
                    nombre: usuario.nombre,
                    inicio: true
                });
            } else {
                res.json({
                    msj: 'El correo electrónico o la contraseña no son correctos',
                    inicio: false,
                    err
                });
            }


        }
    });
});

module.exports = router;