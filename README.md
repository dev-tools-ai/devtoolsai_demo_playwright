# devtoolsai_demo_playwright
Sample code for using SmartDriver with Playwright

# What it does
This example contains two tests:
 - one will enter username into Github login, this demonstrates the ability to ingest an element from an existing test case with xpath for instance
 - one will use findByAI and prompt you to locate the searchbox, this demonstrates the way you can design test cases without selectors.

# Running

Install the dependencies
```
npm install
```

Put your api key into the .env file (otherwise you will see an error)
```
DEVTOOLSAI_API_KEY="<<get your api key at dev-tools.ai>>"
DEVTOOLSAI_INTERACTIVE=TRUE # or FALSE
```

Run the tests
```
npx playwright test
```

# Notes
PS: Sometimes the Edge browser gives the following error. It is not related to the devtools_ai plugin, feel free to remove it from the list of browsers to test with.
```
browserContext.newPage: Protocol error (Page.setForcedColors): 'Page.setForcedColors' was not found [{"code":-32601,"message":"'Page.setForcedColors' was not found"}]
```
