package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
			features ="classpath:Features",    // Features is the name of Folder in SRC/TEST/Resources
			glue = {"stepDefinitions"},		  // glue tells cucumber options where all Step Definitions class is located
			tags = {"@Sqlquery"}, // we can run all scenarios or one scenario with help of tags
			dryRun = false,   // dryRUn sets false will check if all steps in scenario has step definition in Java class 
			monochrome = true, // if set to true, makes console output readable 
			strict = false,  // if set false will fail the execution if there are any pending or undefined steps
			format = {"pretty", "html:target/cucumber-reports/cucumber-pretty",
			        "json:target/cucumber-reports/CucumberTestReport.json",
			        "rerun:target/cucumber-reports/rerun.txt"}, //  
			plugin = "json:target/cucumber=reports/CucumberTestReport.json"
		)
public class TestRunner {

}
