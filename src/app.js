'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const es6Renderer = require('express-es6-template-engine')
const app = express()

app.engine('html', es6Renderer);
app.use(express.static('public'));
app.set('views',  'public/views');
app.set('view engine', 'html');

const indexRouter = require('./router/index')

const sessao2Action = require('./router/sessao-2.action.router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRouter);
app.use('/sessao-2/action', sessao2Action)

module.exports = app
