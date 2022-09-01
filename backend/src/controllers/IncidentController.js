const connection = require('../database/connection.js');

module.exports = {
    async index(request, response) {

        // pagination
        const { page = 1 } = request.query;

        // counting the total of incidents
        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*', 'ongs.name',
                'ongs.email', 'ongs.whatsapp',
                'ongs.city', 'ongs.uf'
            ]);

        // set the total of incidents into the response's header
        response.header('X-Total-Count', count['count(*)']);

        // and incidents infor into the response's body
        response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        // select the incident's ong_id
        const incident = await connection('incidents').where('id', id)
                                                .select('ong_id')
                                                .first();

        // if the ong_id that is trying to delete the incident is not
        // the same that has create it, the operation is called off
        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operation not Permitted.' });
        }

        // else, the incident is deleted
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    },
};