const { expect } = require('chai');
const mongoose = require('mongoose');
const TaskModel = require('../../models/taskModel');
const taskMock = require('../mocks/taskMocks');

/* mongodb://127.0.0.1/my_test_database */

const mongoDB = 'mongodb://root:12345@db:27017/dbTest?authSource=admin';
mongoose.connect(mongoDB);

describe('Teste taskModel', () => {
  before(async () => {
    await TaskModel.remove({});
  });

  after(async () => {
    await TaskModel.remove({});
  });

  it('deve criar uma nova tarefa no DB', async () => {
    const task = new TaskModel(taskMock);
    await task.save();

    const foundTask = await TaskModel.findOne(taskMock);
    expect(foundTask).to.be.an('object');
  });

  it('a tarefa deve conter todos atributos corretos', async () => {
    const task = new TaskModel(taskMock);
    await task.save();

    const foundTask = await TaskModel.findOne(taskMock);
    expect(foundTask).to.have.property('titulo');
    expect(foundTask).to.have.property('descrição');
    expect(foundTask).to.have.property('data');
    expect(foundTask).to.have.property('hora');
    expect(foundTask).to.have.property('duração');
  });
});
