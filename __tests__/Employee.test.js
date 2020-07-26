const Employee = require('../lib/Employee');

test('creates an Employee object', () =>{
    const employee = new Employee('Karl Arfs', 15, 'karfs@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

test('gets Employee data', () =>{

    const name = 'Karl Arfs';
    const id = 15;
    const email = 'karfs@gmail.com';

    const employee = new Employee(name, id, email);

    expect(employee.getName()).toBe(name);
    expect(employee.getId()).toBe(id);
    expect(employee.getEmail()).toBe(email);
    expect(employee.getRole()).toBe('Employee');

});
