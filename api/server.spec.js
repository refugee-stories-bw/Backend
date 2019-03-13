const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {

    describe('GET /stories', () => {
        it('should return 200 ok', async () => {
            const res = await request(server).get('/stories');

            expect(res.status).toBe(200);
        });

        it('should return JSON', async () => {
            const res = await request(server).get('/stories');

            expect(res.type).toBe('application/json');
        });
    });

    describe('GET /stories by :id', () => {
        it('should return 200 ok', async () => {
            const res = await request(server).get('/stories/1');

            expect(res.status).toBe(200);
        });

        it('should return JSON', async () => {
            const res = await request(server).get('/stories/1');

            expect(res.type).toBe('application/json');
        });
    });

    describe('POST /submitStory', () => {

        it('responds with json & 201 created', () => {
            return request(server)
              .post('/submitStory')
              .send({
                    name: 'Rima',
                    title: '$28 and a jar of olive oil',
                    story: 'In December 2011, during the early months of a conflict that will mark its eighth anniversary on 15 March, her 16-year-old son Mahmoud was shot and killed in the streets of their hometown. When their home was subsequently destroyed by shelling, Najwa says there was nothing left for them in Syria and they crossed the nearby border into Jordan.'
              })
              .set('Accept', 'application/json')
              .expect(201)
        });

    });

    describe('GET /submissions', () => {

        it.skip('should return unauthorized without an auth header', () => {
            return request(server)
              .get('/submissions')
              .set('Accept', 'application/josn')
              .expect(401)
        });
    });

});