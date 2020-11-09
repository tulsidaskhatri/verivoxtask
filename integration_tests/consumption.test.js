const { expect } = require('@jest/globals');
const request = require('supertest');
let server;


describe('/', () => {
    beforeEach(() => {
        server = require('../index');
    });
    afterEach(async () => {
        await server.close();
    });

    describe('GET /', ()=>{
        it('should return 400 for negative consumption', async ()=>{
            const res = await request(server).get('/?consumption=-1');
            expect(res.status).toBe(400);
        });

        it('should return 400 when no consumption is passed', async ()=>{
            const res = await request(server).get('/');
            expect(res.status).toBe(400);
        });

        it('should return 400 when a non number consumption is passed', async ()=>{
            const res = await request(server).get('/?consumption=a');
            expect(res.status).toBe(400);
        });

        it('should return tariffs for consumption 3000', async ()=>{
            const res = await request(server).get('/?consumption=3500');
            expect(res.status).toBe(200);
            expect(res.body).toMatchObject([
                {
                    name: 'Packaged tariff',
                    cost: 800
                },
                {
                    name: 'basic electricity tariff',
                    cost: 830
                }
            ])
        });
    });
})