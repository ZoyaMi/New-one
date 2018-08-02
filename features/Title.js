describe('Title', function() {  
 it('should have a title', function() {
    return browser.get('https://app.bitrise.io/users/sign_up')
	.then(() => expect(browser.getTitle()).toEqual('Sign up - Bitrise'));
}); 
});