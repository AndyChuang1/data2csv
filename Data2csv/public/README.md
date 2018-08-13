# index.html
![image](https://github.com/AndyChuang1/data2csv/blob/master/website.JPG)

-Using [jquery-ui-datepicker](https://jqueryui.com/datepicker/) to make date-piker
-Click Download button will download CSV file by our API

## getList function
* if response of API has setHeader, use `window.location.href` download CSV directly
* if response of API is CSV string, use blob or encodeURI to set href to download CSV files
