const connection = require('../database/connection.js');

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs').where('id', id)
                                            .select('name')
                                            .first();

        // id not registered
        if (!ong) {
            return response.status(401).json({ error: 'No ONG Found with this ID' });
        }

        // id registered
        return response.json(ong);
    },
};