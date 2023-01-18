# Reports

- Add report property to config
    - reporter: [["dot"], [["json", {outputfile: "jsonReports/jsonReport.json"}], ["html", {open: "never"}]]
    
- To turn on Screenshots and Video:
    - add screenshot: "on" and video: "on" properties inside the use object in config file.

- to open last HTML report run:
    - npx playwright show-report