package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import core.Base;
import utilities.WebDriverUtility;

public class RegisterFormPageObj extends Base {

	// Store webElements of Register form UI

	public RegisterFormPageObj() {
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "(//a[text()='Register'])[1]")
	private WebElement register;
	@FindBy(id = "input-firstname")
	private WebElement firstNameField;
	@FindBy(id = "input-lastname")
	private WebElement lastNameField;
	@FindBy(id = "input-email")
	private WebElement emailField;
	@FindBy(id = "input-telephone")
	private WebElement phoneField;
	@FindBy(id = "input-password")
	private WebElement passwordField;
	@FindBy(id = "input-confirm")
	private WebElement passwordConfirmField;
	@FindBy(xpath = "(//input[@name='newsletter'])[1]")
	private WebElement yesSubscribe;
	@FindBy(xpath = "//input[@name='agree']")
	private WebElement privacyPolicy;
	@FindBy(xpath = "//input[@class='btn btn-primary']")
	private WebElement continueButton;
	@FindBy(xpath = "//h1[contains(text(), 'Your Account Has Been Created!')]")
	private WebElement yourAcctCreatedMessage;

	public void clickOnRegister() {
		WebDriverUtility.clickOnElement(register); // This is same as register.click
	}

	public void enterFirstName(String fName) {
		firstNameField.sendKeys(fName);
	}

	public void enterLastName(String lName) {
		lastNameField.sendKeys(lName);
	}

	public void enterEmail(String email) {
		emailField.sendKeys(email);
	}

	public void enterPhone(String phone) {
		phoneField.sendKeys(phone);
	}

	public void enterPassword(String password) {
		passwordField.sendKeys(password);
	}

	public void enterPasswordConfirm(String passwordConfirm) {
		passwordConfirmField.sendKeys(passwordConfirm);
	}

	public void selectyesOnSubscribe() {
		if (!yesSubscribe.isSelected())
			yesSubscribe.click();
	}

	public void clickOnPrivacyPolicy() {
		privacyPolicy.click();
	}

	public void clickOnContinueButton() {
		continueButton.click();
	}

	public String getSuccessfullAccountCreationMessage() {
		String successMessage = yourAcctCreatedMessage.getText();
		return successMessage;
	}
}
