import data from '../../data/courses.json'

describe('Number test', () => {
const numItems = data.length;

    test('Number of items should equal 12', () => {
        expect(numItems).toBe(12)
    })
    
    test('Number of items should be greater than or equal to 12', () => {
        expect(numItems).toBeGreaterThanOrEqual(12)
    })
})



describe('String test', () => {
const dataTest = data[0].title;

    test('There is a JS in this title', () => {
        expect(dataTest).toMatch(/JS/)
    })
    
    test('There title contains React', () => {
        expect(dataTest).toContain('React')
    })
})

// Arrays

describe('Array test', () => {
    const data2 = ['React Native', 'React'];

    test('The List of courses contains React Native and React', () => {
        expect(['React Native', 'React', 'MeteorJS']).toEqual(expect.arrayContaining(data2))
    })
})


// Objects
describe('Object test', () => {
    test('The first course to have a property title', () => {
        expect(data[0]).toHaveProperty('title');
    })
    
    test('The first course to have a property views and value of 31,266', () => {
        expect(data[0]).toHaveProperty('views', '31,266');
    })
})