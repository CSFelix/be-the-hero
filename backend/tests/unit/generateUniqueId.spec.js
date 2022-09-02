const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        //expect(2 + 2).toBe(4);

        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});