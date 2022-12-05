const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Urvashi');
});

test('set school with constructor', () => {
    const testValue = 'Ritesh';
    const e = new Intern('Foo', 1, 'newintern@gmail.com', testValue);
    expect(e.school).toBe(testValue);
});

test('get school with getSchool() method', () => {
    const testValue = 'Ritesh';
    const e = new Intern('Foo', 1, 'newintern@gmail.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

// Test if the getRole() value is Intern
test('getRole() return Intern', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'newintern@gmail.com', 'Harvard');
    expect(e.getRole()).toBe(testValue);
});