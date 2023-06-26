import * as view from '../views/mobile.views.js'
import * as service from '../services/mobile.service.js'

function getMobile(req, res) {
    service.getMobile({ deleted: true })
        .then(Mobile => res.send(view.generateListMobile(Mobile)))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function getMobileById(req, res) {
    const id = req.params.idMobile

    service.getMobileById(id)
        .then(Mobile => {
            if (Mobile) {
                res.send(view.generateMobileDetail(Mobile))
            } else {
                res.send(view.generatePage('Mobile no encontrado', `<h1>El Mobile con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formCreateMobile(req, res) {
    res.send(view.generateNewMobileForm())
}

function createMobile(req, res) {
    const { name, description, picture } = req.body
    const Mobile = { name, description: parseInt(picture) }

    service.createMobile(Mobile)
        .then(() => res.redirect('/Mobile'))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formEditMobile(req, res) {
    const id = req.params.idMobile

    service.getMobileById(id)
        .then(Mobile => {
            if (Mobile) {
                res.send(view.generateEditMobileForm(Mobile))
            } else {
                res.send(view.generatePage('Mobile no encontrado', `<h1>El Mobile con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function getMobileBySection(req, res) {
    const id = req.params.idMobile

    service.getMobileBySection(id)
        .then(Mobile => {
            if (Mobile) {
                res.send(view.generateEditMobileForm(Mobile))
            } else {
                res.send(view.generatePage('Mobile no encontrado', `<h1>El Mobile con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function editMobile(req, res) {
    const id = req.params.idMobile
    const { name, description, picture } = req.body
    const Mobile = { name, description: parseInt(picture) }

    service.editMobile(id, Mobile)
        .then(() => res.redirect(`/Mobile/${id}`))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formDeleteMobile(req, res) {
    const id = req.params.idMobile

    service.getMobileById(id)
        .then(Mobile => {
            if (Mobile) {
                res.send(view.generateDeleteMobile(mobile))
            } else {
                res.send(view.generatePage('Mobile no encontrado', `<h1>El Mobile con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function deleteMobile(req, res) {
    const id = req.params.idMobile

    service.deleteMobile(id)
        .then(() => res.redirect('/Mobile'))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

export {
    getMobile,
    getMobileById,
    createMobile,
    formCreateMobile,
    formEditMobile,
    editMobile,
    formDeleteMobile,
    getMobileBySection,
    deleteMobile
}