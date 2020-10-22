package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import core.Base;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Initializer extends Base { // extend base clase from core

	// Cucumber provides Hooks and we have two Hooks
	// Before Hooks and After Hooks
	// Before Hooks uses @Before tag and will run block of code before each scenario
	// in Before Hooks we usually define block of codes to initialize browser
	// manage webdriver
	// log scenario name

	// After Hooks uses @After tag and will run block of code after each scenario
	// in After Hook we usually define block of codes to get scenario status
	// and tear down or close browser

	@Before
	public void beforeHooks(Scenario scenario) {
		// We write a switch statement to create object of browsers (Chrome, IE,
		// Firefox)
		logger.info("Scenario " + scenario.getName()+"Started ");
		// We use WebDriverManager to replace System.setProperty(driver and executable
		// fle)
		// WebDriverManager will create chromedriver.exe and other objects of explorers
		// and garbages it once test is over
		// No need to have chromedriver.exe in C drive for WebDriverManager
		String browser = getBrowserName();

		switch (browser) {
		case "chrome":
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
			break;
		case "firefox":
			WebDriverManager.firefoxdriver().setup();
			driver = new FirefoxDriver();
			break;
		case "IE":
			WebDriverManager.iedriver().setup();
			driver = new InternetExplorerDriver();
			break;
		default:
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		}

		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(getPageLoadTimeOut(), TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(getImpWait(), TimeUnit.SECONDS);
		
	}

	@After
	public void afterHooks(Scenario scenario) {
		// tear down will close browser and all tabs after each execution
		tearDown();
		// get status of execution and log it
		logger.info(scenario.getName() + "   " + scenario.getStatus());
		
	}

}
