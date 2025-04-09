// Controller onde vai ser armazenado toda a regra de négocio

const users = require('../mocks/users');

module.exports = {
    listUsers(request, response){
        response.writeHead(200, {  'Content-Type': 'aplication/json' });
        response.end(JSON.stringify(users));
    }
}