const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () =>{
    const engineer = new Engineer('Karl Arfs', 15, 'karfs@gmail.com', 'karfs');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets Engineer data', () =>{

    const name = 'Karl Arfs';
    const id = 15;
    const email = 'karfs@gmail.com';
    const github = 'karfs';

    const engineer = new Engineer(name, id, email, github);

    expect(engineer.getName()).toBe(name);
    expect(engineer.getId()).toBe(id);
    expect(engineer.getEmail()).toBe(email);
    expect(engineer.getGitHub()).toBe(github);
    expect(engineer.getRole()).toBe('Engineer');

});