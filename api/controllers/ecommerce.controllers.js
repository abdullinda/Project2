import * as view from '../views/ecommerce.views.js'
import * as service from '../services/ecommerce.services.js'


function getEcommerce(req, res) {
    service.getEcommerce({ deleted: true })
        .then(Ecommerce => res.send(view.generateListEcommerce(Ecommerce)))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function getEcommercetById(req, res) {
    const id = req.params.idEcommerce

    service.getEcommerceById(id)
        .then(Ecommerce => {
            if (Ecommerce) {
                res.send(view.generateEcommerceDetail(Ecommerce))
            } else {
                res.send(view.generatePage('Ecommerce no encontrado', `<h1>El Ecommerce con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formCreateEcommerce(req, res) {
    res.send(view.generateNewEcommerceForm())
}

function createEcommerce(req, res) {
    const { name, description, picture } = req.body
    const Ecommerce = { name, description: parseInt(picture) }

    service.createEcommerce(Ecommerce)
        .then(() => res.redirect('/Ecommerce'))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formEditEcommerce(req, res) {
    const id = req.params.idEcommerce

    service.getEcommerceById(id)
        .then(Ecommerce => {
            if (Ecommerce) {
                res.send(view.generateEditEcommerceForm(Ecommerce))
            } else {
                res.send(view.generatePage('Ecommerce no encontrado', `<h1>El Ecommerce con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function getEcommerceBySection(req, res) {
    const id = req.params.idEcommerce

    service.getEcommerceBySection(id)
        .then(Ecommerce => {
            if (Ecommerce) {
                res.send(view.generateEditEcommerceForm(Ecommerce))
            } else {
                res.send(view.generatePage('Ecommerce no encontrado', `<h1>El Ecommerce con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function editEcommerce(req, res) {
    const id = req.params.idEcommerce
    const { name, description, picture } = req.body
    const Ecommerce = { name, description: parseInt(picture) }

    service.editEcommerce(id, Ecommerce)
        .then(() => res.redirect(`/Ecommerce/${id}`))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formDeleteEcommerce(req, res) {
    const id = req.params.idEcommerce

    service.getEcommercetById(id)
        .then(Ecommerce => {
            if (Ecommerce) {
                res.send(view.generateDeleteEcommerce(ecommerce))
            } else {
                res.send(view.generatePage('Ecommerce no encontrado', `<h1>El Ecommerce con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function deleteEcommerce(req, res) {
    const id = req.params.idEcommerce

    service.deleteEcommerce(id)
        .then(() => res.redirect('/Ecommerce'))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

export {
    getEcommerce,
    getEcommercetById,
    createEcommerce,
    formCreateEcommerce,
    formEditEcommerce,
    editEcommerce,
    formDeleteEcommerce,
    getEcommerceBySection,
    deleteEcommerce
}