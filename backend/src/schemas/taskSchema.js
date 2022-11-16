const { Schema } = require('mongoose');

const taskSchema = new Schema({
  titulo: String,
  descrição: String,
  dia: String,
  mes: String,
  ano: String,
  hora: String,
  duração: String,
});

module.exports = taskSchema;
