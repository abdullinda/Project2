import express from 'express'
import * as controller from '../controllers/landing.controllers.js'


const route = express.Router()

route.get('/landing', controller.getLanding)

route.get('/landing/section/:section', controller.getLandingBySection);


route.get('/landing/nuevo', controller.formCreateLanding)
route.post('/landing/nuevo', controller.createLanding)

route.get('/landing/:idLanding/edit', controller.formEditLanding)
route.post('/landing/:idLanding/edit', controller.editLanding)

route.get('/landing/:idLanding/delete', controller.formDeleteLanding)
route.post('/landing/:idLanding/delete', controller.deleteLanding)

route.get('/landing/:idLanding', controller.getLandingtById)


export default route