const request = require('supertest');

const db = require('../../database/dbConfig.js');
const Users = require('./usersDBRequestModels.js');

describe('Users Model functions', () => {
    beforeAll(async () => {
        await db('users').truncate();
    });

    describe('add()', () => {
        

        it('should add the entered user into the db', async () => {
            let newUser = await Users.add({
                username: 'Rima',
                password: 'abcdef',
            });

            expect(newUser.username).toBe('Rima');
            expect(newUser.password).toBe('abcdef');
        });





        it('should find the user by the filter term', async () => {
            const filter = { username: 'Rima' }
            let user = await Users.findBy(filter);

            expect(user).toEqual([{"admin": 0, "id": 1, "password": "abcdef", "username": "Rima"}]);
        });
    });

  
});