import * as view from '../views/client.views.js'
import * as service from '../services/client.services.js'

function getClient(req, res) {
    service.getClient({ deleted: true })
        .then(Client => res.send(view.generateListClient(Client)))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function getClientById(req, res) {
    const id = req.params.idClient

    service.getClientById(id)
        .then(Client => {
            if (Client) {
                res.send(view.generateClientDetail(Client))
            } else {
                res.send(view.generatePage('Client no encontrado', `<h1>El Client con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formCreateClient(req, res) {
    res.send(view.generateNewClientForm())
}

function createClient(req, res) {
    const { name, description, picture } = req.body
    const Client = { name, description: parseInt(picture) }

    service.createClient(Client)
        .then(() => res.redirect('/Client'))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formEditClient(req, res) {
    const id = req.params.idClient

    service.getClientById(id)
        .then(Client => {
            if (Client) {
                res.send(view.generateEditClientForm(Client))
            } else {
                res.send(view.generatePage('Client no encontrado', `<h1>El Client con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function getClientesBySection(req, res) {
    const id = req.params.idClient

    service.getClientesBySection(id)
        .then(Client => {
            if (Client) {
                res.send(view.generateEditClientForm(Client))
            } else {
                res.send(view.generatePage('Client no encontrado', `<h1>El Client con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function editClient(req, res) {
    const id = req.params.idClient
    const { name, description, picture } = req.body
    const Client = { name, description: parseInt(picture) }

    service.editClient(id, Client)
        .then(() => res.redirect(`/Client/${id}`))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formDeleteClient(req, res) {
    const id = req.params.idClient

    service.getClientById(id)
        .then(Client => {
            if (Client) {
                res.send(view.generateDeleteClient(product))
            } else {
                res.send(view.generatePage('Client no encontrado', `<h1>El Client con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function deleteClient(req, res) {
    const id = req.params.idClient

    service.deleteClient(id)
        .then(() => res.redirect('/Client'))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

export {
    getClient,
    getClientById,
    formCreateClient,
    formEditClient,
    editClient,
    formDeleteClient,
    getClientesBySection,
    createClient,
    deleteClient
}