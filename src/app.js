const express = require('express');	
const app =  express();

// IMPORT ROUTES 

// SERVER READ FILES JSON
app.use(express.json());

// SERVER READ DATA FROM FORMS
app.use(express.urlencoded({ extended: true }));

module.exports = app;