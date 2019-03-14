const request = require('supertest');

const server = require('./server.js');

const authenticate = require('../auth/authenticate.js');
const db = require('../database/dbConfig.js');

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

    describe('POST /signup', () => {
        //in order to run this test you have to change the username to a unique username
        it.skip('responds with json & 201 created', () => {
            return request(server)
              .post('/signup')
              .send({
                  username: 'bandit',
                  password: 'imadog'
              })
              .set('Accept', 'application/json')
              .expect(201)
        });
    });

    

    describe('POST /login', () => {

        it.skip('responds with json & 201 created', () => {
            return request(server)
              .post('/login') 
              .send({
                  username: 'porter',
                  password: 'imadog'
              })
              .set('Accept', 'application/json', authenticate)
              .expect(200)
        });
        
         

                

        describe('GET /submissions', () => {

            let token;

            beforeAll((done) => {
                request(server)
                .post('/login')
                .send({
                    username: 'user',
                    password: 'pw',
                })
                .end((err, response) => {
                    token = response.body.token; // save the token!
                    done();
                });
            });

            
            it.skip('should return unauthorized without an auth header/token', () => {
                return request(server)
                .get('/submissions')
                .then((response) => {
                expect(response.statusCode).toBe('Unauthorized');
                });
            });

            it.skip('should respond with 200 & JSON', () => {
                return request(server)
                  .get('/submissions')
                  .set('Authorization', token)
                  .then((response) => {
                    expect(response.statusCode).toBe(200);
                    expect(response.type).toBe('application/json');
                  });
            });
        });
        
        
   


    });
});