# Data2csv
The main purpose of this project is how to download CSV files in front-end with restful API.

There are two ways we can achieve our goal :
* `first`: In the server site, setHeader (csv) on response, you can download CSV files in frond-end directly using redirect to API URL.
* `second`: In the server site, API response CSV string, we need to convert the string to CSV using blob or encodeURI.
*Important js and html have README.md on each folder*
## Build Setup

```
#install dependencies
npm install 
# server start
npm start

```

## Folder Structure
```
Data2csv/
	lib/
	public/
	routes/
	views/
	app.js
	package.json
	README.md
```

## Reference
- [How to export JavaScript array info to csv (on client side)?](https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side)
- [Download csv file on node.js](https://stackoverflow.com/questions/35138765/download-csv-file-node-js)
