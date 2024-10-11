document.write((() => {
	let code = "";
	code += "<!DOCTYPE HTML>\n";
	code += "<html>\n";
	code += "<head>\n";
	code += "\t<meta charset=\"UTF-8\">\n";
	code += "\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n";
	code += "\t<meta name=\"theme-color\" content=\"#000000\">\n";
	code += "\t<meta name=\"description\" content=\"Experimental Web based Unipack player from 203 Lab\">\n";
	code += "\t<link rel=\"icon\" href=\"./app/icon.png\">\n";
	code += "\t<link rel=\"apple-touch-icon\" href=\"./app/icon.png\">\n";
	code += "\t<link rel=\"manifest\" href=\"./app/manifest.json\">\n";
	code += "\t<title>203 | Prismatic</title>\n";
	code += "\t<script defer=\"defer\" src=\"./app/static/js/main.script.js\"><\/script>\n";
	code += "\t<link href=\"./app/static/css/main.style.css\" rel=\"stylesheet\">\n";
	code += "</head>\n";
	code += "<body><noscript>You need to enable JavaScript to run this app.</noscript>\n";
	code += "\t<div id=\"root\"></div>\n";
	code += "</body>\n";
	code += "</html>\n";
	return code;
})())
