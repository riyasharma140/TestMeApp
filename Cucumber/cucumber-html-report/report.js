$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginFeature.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Login Functionality",
  "description": "Login with valid credentials",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-functionality;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Navigate to homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters username and password \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-functionality;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 29,
      "id": "login-functionality;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Admin",
        "password456"
      ],
      "line": 30,
      "id": "login-functionality;login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "lalitha",
        "password123"
      ],
      "line": 31,
      "id": "login-functionality;login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-functionality;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Navigate to homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters username and password \"Admin\" and \"password456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeature_StepDefinition.navigateToHomepage()"
});
formatter.result({
  "duration": 8217514700,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature_StepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.When User enters username and password \"Admin\" and \"password456\"(LoginFeature.feature:25) matches more than one step definition:\n  User enters username and password in LoginFeature_StepDefinition.userEntersUsernameAndPassword()\n  ^User enters username and password \"([^\"]*)\" and \"([^\"]*)\"$ in LoginFeature_StepDefinition.userEntersUsernameAndPasswordAnd(String,String)\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:266)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:659)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:845)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1153)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:771)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:357)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:352)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:310)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:259)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1199)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1124)\r\n\tat org.testng.TestNG.run(TestNG.java:1032)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:126)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:152)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:57)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginFeature_StepDefinition.userLoggedInSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 31,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-functionality;login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Navigate to homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User enters username and password \"lalitha\" and \"password123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeature_StepDefinition.navigateToHomepage()"
});
formatter.result({
  "duration": 7381445500,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature_StepDefinition.userEntersUsernameAndPassword()"
});
formatter.result({
  "duration": 0,
  "error_message": "cucumber.runtime.AmbiguousStepDefinitionsException: ✽.When User enters username and password \"lalitha\" and \"password123\"(LoginFeature.feature:25) matches more than one step definition:\n  User enters username and password in LoginFeature_StepDefinition.userEntersUsernameAndPassword()\n  ^User enters username and password \"([^\"]*)\" and \"([^\"]*)\"$ in LoginFeature_StepDefinition.userEntersUsernameAndPasswordAnd(String,String)\n\r\n\tat cucumber.runtime.RuntimeGlue.stepDefinitionMatch(RuntimeGlue.java:71)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:266)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:659)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:845)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1153)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:771)\r\n\tat org.testng.TestRunner.run(TestRunner.java:621)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:357)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:352)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:310)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:259)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1199)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1124)\r\n\tat org.testng.TestNG.run(TestNG.java:1032)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:126)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:152)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:57)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginFeature_StepDefinition.userLoggedInSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
});