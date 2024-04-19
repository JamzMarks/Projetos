import { BemVindo } from '../../moduloA'

console.log(BemVindo)

import { createServer } from 'http'
createServer((req, res) => {
    res.write('Ola Bom dia')
    res.end()
}).listen(8080)