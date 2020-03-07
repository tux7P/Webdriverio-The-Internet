const assert = require('assert')

describe('The Internet Home Page', () => {
    it('Should have the right title', () => {
        browser.url('https://the-internet.herokuapp.com/')
        const title = browser.getTitle()
        assert.strictEqual(title, 'The Internet')
    })
    it('Should have right page header - h1', () => {
        let headingText = $(".heading").getText()
        console.log(headingText)
    })
    it('Should have right sub header - h2', () => {
        
    })
    it('Should have footer', () => {
        let footerText = $("#page-footer").getText()
        console.log(footerText)

        let footerXpath = $("//*[@id='page-footer']").getText()
        console.log(footerXpath)
    })
    it('Should have github fork ribbon', () => {

    })
})