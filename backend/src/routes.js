const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');


// controllers
const OngController = require('./controllers/OngController.js');
const IncidentController = require('./controllers/IncidentController.js');
const ProfileController = require('./controllers/ProfileController.js');
const SessionController = require('./controllers/SessionController.js');

const routes = express.Router();

/*
*   Routes / Resources
*/

/*
*   HTTP Methods
*
* - Get     :  gets information from the back-end
* - Post    :  creates information in the back-end
* - Put     :  updates information in the back-end
* - Delete  :  deletes information in the back-end
*/

/*
*   Types of Parameters
*
*   - Query: named params sent in the route. Applied in filters and paginations.
* To start putting the parametersm, we add '?' and to separate the params between
* them, we use '&'
*           
*       localhost:3333/users?name=Felix&age=22
*
*   - Route: used to identify a unique service
*
*       localhost:3333/users/:id
*
*   - Body: used to CREATE and ALTER resources
*   - Headers: headers
*/

// users reesource
/*routes.get('/users', (request, response) => {
    // return response.send('Hello World!');

    const params = request.params;
    const body = request.body;

    return response.json({
        name      :  'Felix',
        age       :  22,
        language  :  'Node JS'
    });
});*/


// ongs' routes
routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(12).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}),  OngController.create);

routes.delete('/ongs/:id', OngController.delete);

// profile routes
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        // authorization: Joi.string().required().uuid(),
        authorization: Joi.string().required(),
    }).unknown() // unknown >> permits host search for the content
}), ProfileController.index);

// session routes
routes.post('/session', SessionController.create);

// incidents' routes
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }).unknown(true)
}), IncidentController.delete);

// exporting the Routes
module.exports = routes;