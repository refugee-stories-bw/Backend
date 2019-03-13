const request = require('supertest');

const db = require('../../database/dbConfig.js');
const Stories = require('./storiesDBRequestModels.js');

describe('Stories Model functions', () => {

    describe('addStory()', () => {
        afterEach(async () => {
            await db('stories').truncate();
        });

        it('should add the entered story into the db', async () => {
            let subStory = await Stories.addStory({
                name: 'Rima',
                title: '$28 and a jar of olive oil',
                story: 'From this small initial donation, today Najwa has built up a soap making business that provides her and four other women with a vital income, and which recently began exporting its first orders to China.'
            });

            expect(subStory.name).toBe('Rima');
            expect(subStory.title).toBe('$28 and a jar of olive oil');
            expect(subStory.story).toBe('From this small initial donation, today Najwa has built up a soap making business that provides her and four other women with a vital income, and which recently began exporting its first orders to China.');
        });
    });

    describe('deleteStory()', () => {
        afterEach(async () => {
            await db('stories').truncate();
        });

        it('should remove the story from the stories database', async () => {
            let subStory = await Stories.deleteStory({name: 'Rima'});

            const name = ['Rima'];

            expect(db).toEqual(expect.not.arrayContaining(name));
        });
    });

    describe('getAll()', () => {
        afterEach(async () => {
            await db('stories').truncate();
        });

        it('should retrieve all stories from the stories db', async () => {
            let stories = await Stories.getAll();

            expect(db).toEqual(expect.arrayContaining(stories));
        });
    });

    describe('findById()', () => {
        afterEach(async () => {
            await db('stories').truncate();
        });

        it('should find the particular story by its id', async () => {
            let story = await Stories.findById(1);

            expect(1).toBe({id});
        });
    });

    describe('getApproved()', () => {
        afterEach(async () => {
            await db('stories').truncate();
        });

        it('should only retrieve the stories in the db that are approved', async () => {
            let approvedStories = await Stories.getApproved();

            expect(approvedStories).toBeTruthy();
        });
    });

    describe('update()', () => {
        afterEach(async () => {
            await db('stories').truncate();
        });

        it('should update the story record', async () => {
            let updatedStory = await Stories.update({
                name: 'Rachel', 
            }, 1);

            const name = ['Rachel'];

            expect(updatedStory).toContain(name);
        })
    });
});