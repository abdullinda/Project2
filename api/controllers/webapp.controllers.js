import * as view from '../views/webapp.views.js'
import * as service from '../services/webapp.service.js'

function getWebapp(req, res) {
    service.getWebapp({ deleted: true })
        .then(Webapp => res.send(view.generateListWebapp(Webapp)))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function getWebappById(req, res) {
    const id = req.params.idWebapp

    service.getWebappById(id)
        .then(Webapp => {
            if (Webapp) {
                res.send(view.generateWebappDetail(Webapp))
            } else {
                res.send(view.generatePage('Webapp no encontrado', `<h1>El Webapp con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formCreateWebapp(req, res) {
    res.send(view.generateNewWebappForm())
}

function createWebapp(req, res) {
    const { name, description, picture } = req.body
    const Webapp = { name, description: parseInt(picture) }

    service.createWebapp(Webapp)
        .then(() => res.redirect('/Webapp'))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formEditWebapp(req, res) {
    const id = req.params.idWebapp

    service.getWebappById(id)
        .then(Webapp=> {
            if (Webapp) {
                res.send(view.generateEditWebappForm(Webapp))
            } else {
                res.send(view.generatePage('Webapp no encontrado', `<h1>El Webapp con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function getWebappBySection(req, res) {
    const id = req.params.idWebapp

    service.getWebappBySection(id)
        .then(Webapp => {
            if (Webapp) {
                res.send(view.generateEditWebappForm(Webapp))
            } else {
                res.send(view.generatePage('Webapp no encontrado', `<h1>El Webapp con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function editWebapp(req, res) {
    const id = req.params.idWebapp
    const { name, description, picture } = req.body
    const Webapp = { name, description: parseInt(picture) }

    service.editWebapp(id, Webapp)
        .then(() => res.redirect(`/Webapp/${id}`))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formDeleteWebapp(req, res) {
    const id = req.params.idWebapp

    service.getWebappById(id)
        .then(Webapp => {
            if (Webapp) {
                res.send(view.generateDeleteWebapp(webapp))
            } else {
                res.send(view.generatePage('Webapp no encontrado', `<h1>El Webapp con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function deleteWebapp(req, res) {
    const id = req.params.idWebapp

    service.deleteWebapp(id)
        .then(() => res.redirect('/Webapp'))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

export {
    getWebapp,
    getWebappById,
    createWebapp,
    formCreateWebapp,
    formEditWebapp,
    editWebapp,
    formDeleteWebapp,
    getWebappBySection,
    deleteWebapp
}