var HomePage=require('../PageObject/homepage');
describe('This is the first test',function(){
this.timeout(50000);

beforeEach(function(){

});

afterEach(function(){





});



it('pom model',async function(){

var Baseurl="www.youtube.com";

HomePage.movetoURL(Baseurl);
HomePage.enterdescription('webdriver-js');
HomePage.clickonsearchbutton();





})







})