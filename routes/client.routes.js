import express from 'express'
import * as controller from '../controllers/client.controllers.js'


const route = express.Router()

route.get('/client', controller.getClient)

route.get('/client/section/:section', controller.getClientesBySection);


route.get('/client/nuevo', controller.formCreateClient)
route.post('/client/nuevo', controller.createClient)

route.get('/client/:idClient/edit', controller.formEditClient)
route.post('/client/:idClient/edit', controller.editClient)

route.get('/client/:idClient/delete', controller.formDeleteClient)
route.post('/client/:idClient/delete', controller.deleteClient)

route.get('/client/:idClient', controller.getClientById)


export default route

