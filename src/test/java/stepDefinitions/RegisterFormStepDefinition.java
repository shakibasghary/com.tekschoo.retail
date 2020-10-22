package stepDefinitions;


import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;
import core.Base;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.RegisterFormPageObj;
import utilities.WebDriverUtility;

public class RegisterFormStepDefinition extends Base {
	RegisterFormPageObj rfPageObj = new RegisterFormPageObj();

	@When("^User click on Register$")
	public void user_click_on_Register() throws Throwable {
		try {
			rfPageObj.clickOnRegister();
			logger.info("user clicked on Register");
		} catch (NoSuchElementException e) {
			e.printStackTrace();
		}
	}

	@When("^User fill out Register form with below information$")
	public void user_fill_out_Register_form_with_below_information(DataTable personalInfo) throws Throwable {
		// since our dataTable has column header we can use List of Map
		// for Row index we will refer to List index
		// for Column index we will refer to Column header as a Key
		
		List<Map<String, String>> dataValues = personalInfo.asMaps(String.class, String.class);
		rfPageObj.enterFirstName(dataValues.get(0).get("firstName"));
		rfPageObj.enterLastName(dataValues.get(0).get("lastName"));
		rfPageObj.enterEmail(dataValues.get(0).get("email"));
		rfPageObj.enterPhone(dataValues.get(0).get("phone"));
		rfPageObj.enterPassword(dataValues.get(0).get("password"));
		rfPageObj.enterPasswordConfirm(dataValues.get(0).get("password"));
		logger.info("user completed Register form with required information");
		
	}

	@When("^User select 'yes' for Subscribe$")
	public void user_select_yes_for_Subscribe() throws Throwable {
		rfPageObj.selectyesOnSubscribe();
		WebDriverUtility.screenShot();
	}

	@When("^User click on privacy and policy check box$")
	public void user_click_on_privacy_and_policy_check_box() throws Throwable {
		rfPageObj.clickOnPrivacyPolicy();
	}

	@When("^User click on Continue button$")
	public void user_click_on_Continue_button() throws Throwable {
		rfPageObj.clickOnContinueButton();
	}

	@Then("^User Should see message '(.+)'$")
	public void user_Should_see_message_Your_Account_Has_Been_Created(String message) throws Throwable {
		WebDriverUtility.wait(5000);
		Assert.assertEquals(message, rfPageObj.getSuccessfullAccountCreationMessage());
		logger.info("Account was created Successfully");
		WebDriverUtility.screenShot();
	}
}