var assert = require('assert');

describe('Book a dream journey via demo.testim.io', function() {
    it('Navigate to demo.testim.io', function () {
        browser.url('/');
        var url = browser.getUrl();
        assert.equal(url,'http://demo.testim.io/');
    });

    it('Login and validate that being logged in', function () {
        browser.click('#app > div > header > div > div:nth-child(2) > ul > li > button');
  //      browser.pause(300);
        browser.setValue('#login > div:nth-child(1) > input', 'foobar');
        browser.setValue('#login > div:nth-child(2) > input', 'test123');
        browser.click('#app > div > section.Login__login___3HOEm > div > div.flexboxgrid__col-xs-6___1DhV6.Login__card-box___1pKg0 > div > nav > button.theme__button___1iKuo.LoginButton__button___1Sd3Q.theme__raised___ONZv6.LoginButton__raised___1fUxJ.theme__primary___2NhN1.LoginButton__primary___38GOe');
        browser.pause(300);
        var text = browser.getText('#app > div > header > div > div:nth-child(2) > ul > div > button > span:nth-child(1)');
        assert.equal(text,'HELLO, JOHN'); 
    });

    it('Choose and book the dream journey', function () {        
        //Choose Departing date
        browser.click('#app > div > section.Hero__hero___1FDXn > div:nth-child(3) > div > div:nth-child(1) > div > div > input');
        browser.pause(300);
        browser.click('/html/body/div[2]/div/div[2]/section/div/div/div/span/div/div[2]/div[25]/span');
        browser.click('/html/body/div[2]/div/div[2]/nav/button[2]');
        browser.pause(300);
        //Choose Returnning date
        browser.click('#app > div > section.Hero__hero___1FDXn > div:nth-child(3) > div > div:nth-child(2) > div > div > input');
        browser.pause(300);
        browser.click('/html/body/div[2]/div/div[2]/section/div/div/div/span/div/div[2]/div[27]/span');
        browser.click('/html/body/div[2]/div/div[2]/nav/button[2]');
        browser.pause(300);
       //Filter cost
       /////////
       //Book 
       browser.click('#app > div > section:nth-child(4) > div:nth-child(4) > div > div > div:nth-child(2) > div.theme__cardActions___1aHjq.GalleryItem__cardActions___zE_tm > button');
       var url = browser.getUrl();
       assert.equal(url,'http://demo.testim.io/checkout'); 
    });

    it('Finalize orfer - insert personal details to form', function () {
        browser.setValue('#app > div > div:nth-child(5) > section:nth-child(1) > div.flexboxgrid__row___1y_mg.flexboxgrid__center-xs___1JWon > div.theme__card___2nWQb.CustomerInfo__customer-info___3e5NH > form > div:nth-child(1) > input', 'Elvis Presley');
        browser.setValue('#app > div > div:nth-child(5) > section:nth-child(1) > div.flexboxgrid__row___1y_mg.flexboxgrid__center-xs___1JWon > div.theme__card___2nWQb.CustomerInfo__customer-info___3e5NH > form > div:nth-child(2) > input', 'Elvis@gmail.com');
        browser.setValue('#app > div > div:nth-child(5) > section:nth-child(1) > div.flexboxgrid__row___1y_mg.flexboxgrid__center-xs___1JWon > div.theme__card___2nWQb.CustomerInfo__customer-info___3e5NH > form > div:nth-child(3) > input', '111-22-3333');
        browser.setValue('#app > div > div:nth-child(5) > section:nth-child(1) > div.flexboxgrid__row___1y_mg.flexboxgrid__center-xs___1JWon > div.theme__card___2nWQb.CustomerInfo__customer-info___3e5NH > form > div:nth-child(4) > input', '2125671234');
        browser.pause(20000);


    });

});