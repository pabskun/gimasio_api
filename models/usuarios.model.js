'use strict';
const mongoose = require('mongoose');

const schema_usuario = mongoose.Schema({

    nombre: { type: String, required: true, unique: true },
    tipo: { type: String, required: true, unique: false },
    correo: { type: String, required: true, unique: false },
    contrasenna: { type: String, required: true, unique: false }

});

module.exports = mongoose.model('Usuario', schema_usuario, 'usuarios');