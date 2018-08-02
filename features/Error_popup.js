describe('Invalid login&password', function() {  
 it('should display error popup', function() {
    return browser.get('https://app.bitrise.io/users/sign_in')
	.then(() => element(by.model('simpleSignInFormData.login')).sendKeys('login1'))
	.then(() => element(by.model('simpleSignInFormData.password')).sendKeys('password2'))
		.then(() => element(by.css('.v4-formattedcontent input[type="submit"]')).click())
	   .then(() => expect(element(by.css('.ng-binding')).isPresent()));
}); 
});