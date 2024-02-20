const {Builder,By} = require('selenium-webdriver');


    (async function example(){
        let driver = await new Builder()
        .forBrowser('chrome')
        .build();

        await driver.get('http://15.164.166.94:1234/member/login');

        const input_id = await driver.findElement(By.id('이메일'));
        input_id.sendKeys('gusqja0213');

        const input_pw = await driver.findElement(By.id('비밀번호'));
        input_pw.sendKeys('dydehf0213@');

        driver.findElement(By.xpath("//button[contains(text(), '로그인')]")).click();
    })();