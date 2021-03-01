require('chromedriver');
const {Builder,By,key,until}=require('selenium-webdriver');
var BasePage=require('../PageObject/basepage');

var webdriver=require('selenium-webdriver');
const { Driver } = require('selenium-webdriver/chrome');

class HomePage extends BasePage{
    input=By.id("search");
 button=By.id("search-icon-legacy");

 enterdescription(text){
     this.setText(text,this.input);

 }

clickonsearchbutton(text){
    this.clickandwait(this.button);

}





}

module.exports=new HomePage();
