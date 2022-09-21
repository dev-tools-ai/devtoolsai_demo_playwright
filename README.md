# devtoolsai_demo_playwright
Sample code for using SmartDriver with Playwright


To install dependencies
```
npm install
```

to run the tests
```
npx playwright test
```


PS: Sometimes the Edge browser gives the following error. It is not related to the devtools_ai plugin, feel free to remove it from the list of browsers to test with.
```
browserContext.newPage: Protocol error (Page.setForcedColors): 'Page.setForcedColors' was not found [{"code":-32601,"message":"'Page.setForcedColors' was not found"}]
```
