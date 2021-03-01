var webdriver=require('selenium-webdriver');
const{Builder,By,key,until}=require('selenium-webdriver');  

var driver=new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});
driver.manage().window().maximize();

class BasePage{
    constructor(){
        global.driver=driver;

    }


    async movetoURL(URL){

        await driver.get(URL);

        await driver.wait(until.titleIs('Google'),50000);
    }


    setText(text,locator){
        driver.wait(until.elementLocated(locator),60000);
        driver.findElement(locator).sendKeys(text);
        }


        clickandwait(locator)
        {

            driver.wait(until.elementsLocated(locator),60000).then((el)=>{

                el.click();
            })
        }





}
module.exports=BasePage;