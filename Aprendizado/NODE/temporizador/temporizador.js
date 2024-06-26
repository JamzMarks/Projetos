const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 2', function(){
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function (){
    tarefa1.cancel()
    console.log('Cancelado Tarefa 1')
}, 20000)

//setInterval
//set

const regra = new schedule.RecurrenceRule()

regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 11
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})