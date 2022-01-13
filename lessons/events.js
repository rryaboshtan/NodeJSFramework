const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data, second) => {
    console.log(data);
    console.log(second);

})

const MESSAGE = process.env.message || '';

if (MESSAGE) {
    emitter.emit('message', MESSAGE, 123);
} else {
    emitter.emit('message', 'Вы не указали сообщение');
}