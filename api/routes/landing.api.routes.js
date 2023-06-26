import express from 'express';
import * as controller from '../controllers/webapp.api.controllers.js';
import * as mobileController from '../controllers/mobile.api.controllers.js';
import * as ecommerceController from '../controllers/ecommerce.api.controllers.js';
import * as landingController from '../controllers/landing.api.controllers.js';
import * as clienteController from '../controllers/client.api.controllers.js';
import * as controller from '../controllers/products.reviews.api.controllers.js'

import ReviewRoute from './products.reviews.routes.js';

const route = express.Router();

// Rutas para landingpage
route.route('/landingpage')
  .get(landingController.getLandings)
  .post(landingController.createLanding);

route.route('/landingpage/:idLanding')
  .get(landingController.getLandingByID)
  .put(landingController.replaceLanding)
  .patch(landingController.updateLanding)
  .delete(landingController.deleteLanding);

// Rutas para ecommerce
route.route('/ecommerce')
  .get(ecommerceController.getEcommerces)
  .post(ecommerceController.createEcommerce);

route.route('/ecommerce/:idEcommerce')
  .get(ecommerceController.getEcommerceByID)
  .put(ecommerceController.replaceEcommerce)
  .patch(ecommerceController.updateEcommerce)
  .delete(ecommerceController.deleteEcommerce);

// Rutas para mobile
route.route('/mobile')
  .get(mobileController.getMobiles)
  .post(mobileController.createMobile);

route.route('/mobile/:idMobile')
  .get(mobileController.getMobileByID)
  .put(mobileController.replaceMobile)
  .patch(mobileController.updateMobile)
  .delete(mobileController.deleteMobile);

// Rutas para webapp
route.route('/webapp')
  .get(controller.getWebapps)
  .post(controller.createWebapp);

route.route('/webapp/:idWebapp')
  .get(controller.getWebappByID)
  .put(controller.replaceWebapp)
  .patch(controller.updateWebapp)
  .delete(controller.deleteWebapp);

// Rutas para cliente
route.route('/cliente')
  .get(landingController.getLandings) 
  .post(landingController.createLanding); 

route.route('/cliente/:idCliente')
  .get(clienteController.getClienteByID)
  .put(clienteController.replaceCliente)
  .patch(clienteController.updateCliente)
  .delete(clienteController.deleteCliente);

  // Rutas  para 

route.route('/reviews/:idProducts');
get(productController.getProductByID)
.post(reviews.createReview); 

// Importar y usar ReviewRoute
route.use(ReviewRoute);

export default route;

