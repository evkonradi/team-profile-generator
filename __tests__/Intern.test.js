const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an Intern object', () =>{
    const intern = new Intern('Karl Arfs', 15, 'karfs@gmail.com', 'UT Austin');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets Intern data', () =>{

    const name = 'Karl Arfs';
    const id = 15;
    const email = 'karfs@gmail.com';
    const school = 'UT Austin';

    const intern = new Intern(name, id, email, school);

    expect(intern.getName()).toBe(name);
    expect(intern.getId()).toBe(id);
    expect(intern.getEmail()).toBe(email);
    expect(intern.getSchool()).toBe(school);
    expect(intern.getRole()).toBe('Intern');

});