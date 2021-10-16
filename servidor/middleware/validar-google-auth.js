// const { response } = require('express');
// const { OAuth2Client } = require('google-auth-library');
// const jwt = require('jsonwebtoken');
// const client = new OAuth2Client('737691121751-1ukdm2td5rrivg53cblsg893ppk6vcfl.apps.googleusercontent.com');

// const validarGoogleAuth = (req, res = response, next) => {

//     let token = '';
//     token = req.headers['x-access-token'] || req.headers['authorization']


//     if (!token) {
//         return res.status(401).json({
//             ok: false,
//             msg: 'No se ha proporcionado un token valido'
//         })
//     }

//     if (token.startsWith('Bearer ')) {
//         token = token.slice(7, token.length);
//     }

//     try {
//         console.log('token gogle', token);
//     }
//     }