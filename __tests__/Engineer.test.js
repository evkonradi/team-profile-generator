const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () =>{
    const engineer = new Engineer('Karl Arfs', 15, 'karfs@gmail.com', 'github.com/karfs');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets Engineer Info as an object', () =>{
    const engineer = new Engineer('Karl Arfs', 15, 'karfs@gmail.com', 'github.com/karfs');

    expect(engineer.getEngineerInfo()).toHaveProperty('name');
    expect(engineer.getEngineerInfo()).toHaveProperty('id');
    expect(engineer.getEngineerInfo()).toHaveProperty('email');
    expect(engineer.getEngineerInfo()).toHaveProperty('github');
});