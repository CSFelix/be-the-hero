const request = require('supertest');
const app = require('../../src/app.js');
const connection = require('../../src/database/connection.js');

describe('ONG', () => {

    // executing migrations before testing
    beforeEach(async () => {
        await connection.migrate.rollback(); // clean up database
        await connection.migrate.latest(); // commit migrations
    });

    // after all tests
    afterAll(async () => {
        await connection.destroy();
    })

    // testing
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            // .set('Authorization', 'ong_id') // headers
            .send({
                name: "Test 980",
                email: "contato@gmail.com",
                whatsapp: "5518998143183",
                city: "Mirandópolis",
                uf: "SP"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});