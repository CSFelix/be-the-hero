const crypto = require('crypto'); // used to cipher and generate id
const connection = require('../database/connection.js');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;

        await connection('ongs').where('id', id).delete();

        return response.status(204).send();
    },
};