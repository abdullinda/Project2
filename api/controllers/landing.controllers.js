import * as view from '../views/landing.views.js'
import * as service from '../services/landing.services.js'


function getLanding(req, res) {
    service.getLanding({ deleted: true })
        .then(Landing => res.send(view.generateListLanding(Landing)))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function getLandingtById(req, res) {
    const id = req.params.idLanding

    service.getLandingById(id)
        .then(Landing => {
            if (Landing) {
                res.send(view.generateLandingDetail(Landing))
            } else {
                res.send(view.generatePage('Landing no encontrado', `<h1>El Landing con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formCreateLanding(req, res) {
    res.send(view.generateNewLandingForm())
}

function createLanding(req, res) {
    const { name, description, picture } = req.body
    const Landing = { name, description: parseInt(picture) }

    service.createLanding(Landing)
        .then(() => res.redirect('/Landing'))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formEditLanding(req, res) {
    const id = req.params.idLanding

    service.getLandingById(id)
        .then(Landing => {
            if (Landing) {
                res.send(view.generateEditLandingForm(Landing))
            } else {
                res.send(view.generatePage('Landing no encontrado', `<h1>El Landing con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function getLandingBySection(req, res) {
    const id = req.params.idLanding

    service.getLandingBySection(id)
        .then(Landing => {
            if (Landing) {
                res.send(view.generateEditLandingForm(Landing))
            } else {
                res.send(view.generatePage('Landing no encontrado', `<h1>El Landing con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function editLanding(req, res) {
    const id = req.params.idLanding
    const { name, description, picture } = req.body
    const Landing = { name, description: parseInt(picture) }

    service.editLanding(id, Landing)
        .then(() => res.redirect(`/Landing/${id}`))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function formDeleteLanding(req, res) {
    const id = req.params.idLanding

    service.getLandingById(id)
        .then(Landing => {
            if (Landing) {
                res.send(view.generateDeleteLanding(landing))
            } else {
                res.send(view.generatePage('Landing no encontrado', `<h1>El Landing con id ${id} no existe</h1>`))
            }
        })
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

function deleteLanding(req, res) {
    const id = req.params.idLanding

    service.deleteLanding(id)
        .then(() => res.redirect('/Landing'))
        .catch(err => res.send(view.generatePage('Error', `<h1>${err}</h1>`)))
}

export {
    getLanding,
    getLandingtById,
    createLanding,
    formCreateLanding,
    formEditLanding,
    editLanding,
    formDeleteLanding,
    getLandingBySection,
    deleteLanding
}