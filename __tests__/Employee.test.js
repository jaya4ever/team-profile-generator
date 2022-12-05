const Employee = require("../lib/Employee");

test('creating a employee object', () => {
    const employee = new Employee('Suresh');
});

test('setting id with constructor', () => {
    const testValue = 100;
    const e = new Employee('Mohit', testValue);
    expect(e.id).toBe(testValue);
});

test('setting email with constructor', () => {
    const testValue = 'workingemployee@gmail.com';
    const e = new Employee('Mohit', 1, testValue);
    expect(e.email).toBe(testValue);
});

// Test if the getRole() value is Employee
test('getRole() return Employee', () => {
    const testValue = 'Employee';
    const e = new Employee('Suresh', 1, 'workingemployee@gmail.com');
    expect(e.getRole()).toBe(testValue);
});