const taskService = require('../services/taskService');

const getAll = async (_req, res) => {
  try {
    const all = await taskService.getAll();
    res.status(200).json(all);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

const create = async (req, res) => {
  const {
    titulo, descrição, dia, mes, ano, hora, duração,
  } = req.body;
  try {
    const created = await taskService.create({
      titulo, descrição, dia, mes, ano, hora, duração,
    });
    res.status(201).json(created);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const {
    titulo, descrição, dia, mes, ano, hora, duração,
  } = req.body;
  try {
    const updated = await taskService.update(id, {
      titulo, descrição, dia, mes, ano, hora, duração,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await taskService.deleteTask(id);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

const getDia = async (_req, res) => {
  try {
    const taskDia = await taskService.getDia(dia);
    res.status(200).json(taskDia);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getMes = async (_req, res) => {
  try {
    const taskMes = await taskService.getDia(mes);
    res.status(200).json(taskMes);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getAno = async (_req, res) => {
  try {
    const taskAno = await taskService.getDia(ano);
    res.status(200).json(taskAno);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  getAll,
  create,
  update,
  deleteTask,
  getDia,
  getMes,
  getAno,

};
