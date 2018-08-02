describe('Forgot password', function() {
it('should display error popup', function() {
return browser.get('https://app.bitrise.io/users/sign_up')
.then(() => element(by.model('simpleSignUpFormData.username')).sendKeys('qweqwe'))
.then(() => element(by.model('simpleSignUpFormData.email')).sendKeys('qweqwe'))
.then(() => element(by.model('simpleSignUpFormData.password')).sendKeys('password2'))
.then(() => element(by.css('.v4-formattedcontent input[type="submit"]')).click())
.then(() => expect(element(by.css('div.notification.block.ng-binding.ng-scope.error')).getText()).toEqual('Validation failed: Email is invalid'));
});
});