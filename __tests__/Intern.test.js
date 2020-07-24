const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an Intern object', () =>{
    const intern = new Intern('Karl Arfs', 15, 'karfs@gmail.com', 'UT Austin');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets Intern Info as an object', () =>{
    const intern = new Intern('Karl Arfs', 15, 'karfs@gmail.com', 'UT Austin');

    expect(intern.getInternInfo()).toHaveProperty('name');
    expect(intern.getInternInfo()).toHaveProperty('id');
    expect(intern.getInternInfo()).toHaveProperty('email');
    expect(intern.getInternInfo()).toHaveProperty('school');
});