const Task = require('../models/taskModel');

const getAll = async () => {
  const all = await Task.find();
  return all;
};

const getDay = async () => {
  const data = req.body
  const date = data.ano
  
 try {
   const task = await Tarefa.findOne({ ano: date })

   if (!task) {
     res.status(422).json({ message: 'Tarefa não encontrada!' })
     return
   }

   res.status(200).json(task)
 } catch (error) {
   res.status(500).json({ erro: error })
 }

};

const getMonth = async () => {
  const month = req.body
  const date = month.ano
  
 try {
   const task = await Tarefa.findOne({ mes: date })

   if (!task) {
     res.status(422).json({ message: 'Tarefa não encontrada!' })
     return
   }

   res.status(200).json(task)
 } catch (error) {
   res.status(500).json({ erro: error })
 }

};

const getYear = async () => {
  const year = req.body
  const date = data.year
  
 try {
   const task = await Tarefa.findOne({ ano: date })

   if (!task) {
     res.status(422).json({ message: 'Tarefa não encontrada!' })
     return
   }

   res.status(200).json(task)
 } catch (error) {
   res.status(500).json({ erro: error })
 }

};



const create = async ({
  titulo, descrição, dia, mes, ano, hora, duração,
}) => {
  const newTask = new Task({
    titulo, descrição, dia, mes, ano, hora, duração,
  });
  const created = await newTask.save();
  return created;
};

const update = async (id, {
  titulo, descrição, dia, mes, ano, hora, duração,
}) => {
  const updated = await Task.findByIdAndUpdate(id, {
    titulo, descrição, dia, mes, ano, hora, duração,
  });
  return updated;
};

const deleteTask = async (id) => {
  const deleted = await Task.findByIdAndDelete(id);
  return deleted;
};

module.exports = {
  getAll,
  create,
  update,
  deleteTask,
  getDay,
  getMonth,
  getYear
};
