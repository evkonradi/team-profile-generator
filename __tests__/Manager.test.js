const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates an Manager object', () =>{
    const manager = new Manager('Karl Arfs', 15, 'karfs@gmail.com', 10);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets Manager Info as an object', () =>{
    const manager = new Manager('Karl Arfs', 15, 'karfs@gmail.com', 10);

    expect(manager.getManagerInfo()).toHaveProperty('name');
    expect(manager.getManagerInfo()).toHaveProperty('id');
    expect(manager.getManagerInfo()).toHaveProperty('email');
    expect(manager.getManagerInfo()).toHaveProperty('officeNumber');
});