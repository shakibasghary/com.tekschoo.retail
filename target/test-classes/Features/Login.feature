#@LoginRegression    #This will run all Tags under it's name
Feature: Login to Retail Website 

#any steps which are repeated at the begining of all scenario in one feature can be placed 
#under background keyword and it will reduce code duplicate and writing same steps over an over
Background:
	Given User is on Retail Website 
	And User Clicks on MyAccount
@Login 
Scenario: Login to MyAccount 
 
	When User Clicks on Login 
	And User enter username 'sdet@tekschool.us' and password 'sdet' 
	And User clicks on Login Button 
	Then User should be logged into MyAccount dashboard 
	
	
	#if i want to run same scenario with multiple userName and Password 
	# Should i copy and past same scenario with multiple user and pass ? 
@MultipleUserLogin 
Scenario Outline: Login to Retail Site with multiple users 

	When User Clicks on Login 
	And User enter username '<userName>' and password '<password>'
	And User clicks on Login Button 
	Then User should be logged into MyAccount dashboard 
	Examples: 
		|userName|password|
		|sdet@tekschool.us|sdet|
		|consumer@tekschool.us|JBond|
		|students@tekschool.us|TEST|
		
@Logout
Scenario: Log out from MyAccount 

	When User Clicks on Login 
	And User enter username 'sdet@tekschool.us' and password 'sdet' 
	And User clicks on Login Button 
	Then User should be logged into MyAccount dashboard 
	When User Clicks on MyAccount
	And User click on Logout
	Then User Should be logged out from MyAccount dashboard
	
	
	
	