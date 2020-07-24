const Employee = require('../lib/Employee');

test('creates an Employee object', () =>{
    const employee = new Employee('Karl Arfs', 15, 'karfs@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});