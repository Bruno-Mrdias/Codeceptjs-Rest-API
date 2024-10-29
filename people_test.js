const soma = require('./utils/soma.js')

Feature('people');

BeforeSuite(() =>{
console.log('antes de tudo');
console.log(soma.soma(12, 2));


})


Scenario('Teste validar request ',  ({ I }) => {

    I.sendGetRequest('/people')
    I.seeResponseCodeIsSuccessful()
});

Scenario('Teste validar request people 1 ',  ({ I }) => {

    I.sendGetRequest('/people/1')
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['name', 'height'])
    I.seeResponseContainsJson({
        name: 'Luke Skywalker',
        height: '172',
        birth_year: '19BBY',
        gender: 'male'
    })

});

Scenario('Teste validar request people 3 ',  ({ I }) => {

    I.sendGetRequest('/people/3')
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsJson({
        name: 'R2-D2',
        eye_color: 'red',
        height: '96'
    })

});

Scenario('Teste validar request people 2 ',  ({ I }) => {

    I.sendGetRequest('/people/2')
    I.seeResponseCodeIsSuccessful()
    I.seeResponseContainsKeys(['name', 'height', 'eye_color'])

});

