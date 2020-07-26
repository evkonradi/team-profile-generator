const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates an Manager object', () =>{
    const manager = new Manager('Karl Arfs', 15, 'karfs@gmail.com', 10);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets Manager data', () =>{

    const name = 'Karl Arfs';
    const id = 15;
    const email = 'karfs@gmail.com';
    const officeNumber = 10;

    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getName()).toBe(name);
    expect(manager.getId()).toBe(id);
    expect(manager.getEmail()).toBe(email);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
    expect(manager.getRole()).toBe('Manager');

});

