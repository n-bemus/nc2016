var platforms;
var developer_games;
var color1;
var color2;
var borderColor;
var borderStyle;
var borderRadius;
var borderWidth;
var font;
var fontSize;
var fontWeight;
var dcolor1;
var dcolor2;
var dborderColor;
var dborderStyle;
var dborderRadius;
var dborderWidth;
var dfont;
var dfontSize;
var dfontWeight;

/*
function initChangeStyles() {
	dcolor1 = $('#Color1').val();
	dcolor2 = $('#Color2').val();
	dborderColor = $('#BorderColor').val();
	dborderStyle = $('#BorderStyle option:selected').val();
	dborderRadius = [$('#BorderTopLeftRadius').val(), $('#BorderTopRightRadius').val(), $('#BorderBottomLeftRadius').val() , $('#BorderBottomRightRadius').val()];
	dborderWidth = $('#BorderWidth').val();
	dfont = $('#Font').val();
	dfontSize = $('#FontSize').val();
	dfontWeight = $('#FontWeight option:selected').val();
	
	color1 = "#" + dcolor1;
	color2 = "#" + dcolor2;
	borderColor = "#" + dborderColor;
	borderStyle = dborderStyle;
	borderRadius = [dborderRadius[0] + "px", dborderRadius[1] + "px", dborderRadius[2] + "px", dborderRadius[3] + "px"];
	borderWidth = dborderWidth + "px";
	font = dfont;
	fontSize = dfontSize + "px";
	fontWeight = dfontWeight;

	$(document).ready(changeStyles(color1, color2, borderColor, borderStyle, borderRadius, borderWidth, font, fontSize, fontWeight));
}

function initialStyles() {
	dcolor1 = "000710";
	dcolor2 = "FB4E12";
	dborderColor = "000710";
	dborderStyle = "double";
	dborderRadius = ["5", "5", "5", "5"];
	dborderWidth = "5";
	dfont = "Arial";
	dfontSize = "18.67";
	dfontWeight = "bold";
	
	color1 = "#" + dcolor1;
	color2 = "#" + dcolor2;
	borderColor = "#" + dborderColor;
	borderStyle = dborderStyle;
	borderRadius = [dborderRadius[0] + "px", dborderRadius[1] + "px", dborderRadius[2] + "px", dborderRadius[3] + "px"];
	borderWidth = dborderWidth + "px";
	font = dfont;
	fontSize = dfontSize + "px";
	fontWeight = dfontWeight;

	$(document).ready(changeStyles(color1, color2, borderColor, borderStyle, borderRadius, borderWidth, font, fontSize, fontWeight));
}

function changeStyles(color1, color2, borderColor, borderStyle, borderRadius, borderWidth, font, fontSize, fontWeight) {
	$("body").css({
		"background-color" : color1,
		"color" : color2,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("input").css({
		"background-color" : color2,
		"color" : color1,
		"border-color" : borderColor,
		"border-style" : borderStyle,
		"border-top-left-radius" : borderRadius[0],
		"border-top-right-radius" : borderRadius[1],
		"border-bottom-left-radius" : borderRadius[2],
		"border-bottom-right-radius" : borderRadius[3],
		"border-width" : borderWidth,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("select").css({
		"background-color" : color2,
		"color" : color1,
		"border-color" : borderColor,
		"border-style" : borderStyle,
		"border-top-left-radius" : borderRadius[0],
		"border-top-right-radius" : borderRadius[1],
		"border-bottom-left-radius" : borderRadius[2],
		"border-bottom-right-radius" : borderRadius[3],
		"border-width" : borderWidth,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("option").css({
		"background-color" : color2,
		"color" : color1,
		"border-color" : borderColor,
		"border-left-style" : borderStyle,
		"border-right-style" : borderStyle,
		"border-top-style" : "none",
		"border-bottom-style" : "none",
		"border-width" : borderWidth,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("option:first-child").css({
		"background-color" : color2,
		"color" : color1,
		"border-color" : borderColor,
		"border-left-style" : borderStyle,
		"border-right-style" : borderStyle,
		"border-top-style" : borderStyle,
		"border-bottom-style" : "none",
		"border-width" : borderWidth,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("option:last-child").css({
		"background-color" : color2,
		"color" : color1,
		"border-color" : borderColor,
		"border-left-style" : borderStyle,
		"border-right-style" : borderStyle,
		"border-top-style" : "none",
		"border-bottom-style" : borderStyle,
		"border-width" : borderWidth,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("button").css({
		"background-color" : color2,
		"color" : color1,
		"border-color" : borderColor,
		"border-style" : borderStyle,
		"border-top-left-radius" : borderRadius[0],
		"border-top-right-radius" : borderRadius[1],
		"border-bottom-left-radius" : borderRadius[2],
		"border-bottom-right-radius" : borderRadius[3],
		"border-width" : borderWidth,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
	$("a").css({
		"color" : color2,
		"font-family" : font,
		"font-size" : fontSize,
		"font-weight" : fontWeight
	});
}
*/
function onLoad() {
	//alert("In onLoad()");
	/*$('#StyleDiv').css({
		"display" : "none"
	});*/
	getPlatforms(false);
	getDeveloper_Games(false);
	//initialStyles();
}
/*
function styles() {
	$('#dbInsert').css({
		"display" : "none"
	});
	$('#StyleDiv').css({
		"display" : "inline"
	});
	initPopulate();
}

function insertData() {
	$('#dbInsert').css({
		"display" : "inline"
	});
	$('#StyleDiv').css({
		"display" : "none"
	});
}

function initPopulate() {
	$(document).ready(populate());
}

function populate() {
	document.getDeveloper_GamesByTagName("INPUT")[3].setAttribute("value", dcolor1);
	document.getDeveloper_GamesByTagName("INPUT")[4].setAttribute("value", dcolor2);
	document.getDeveloper_GamesByTagName("INPUT")[5].setAttribute("value", dborderColor);
	document.getDeveloper_GamesByTagName("INPUT")[6].setAttribute("value", dborderRadius[0]);
	document.getDeveloper_GamesByTagName("INPUT")[7].setAttribute("value", dborderRadius[1]);
	document.getDeveloper_GamesByTagName("INPUT")[8].setAttribute("value", dborderRadius[2]);
	document.getDeveloper_GamesByTagName("INPUT")[9].setAttribute("value", dborderRadius[3]);
	document.getDeveloper_GamesByTagName("INPUT")[10].setAttribute("value", dborderWidth);
	document.getDeveloper_GamesByTagName("INPUT")[11].setAttribute("value", dfont);
	document.getDeveloper_GamesByTagName("INPUT")[12].setAttribute("value", dfontSize);
}
*/
function insertDeveloper_Game() {
        alert("In insertDeveloper_GameCall()")
	var Developer_Name,
	    Developer_Console_Count,
	    developer_Year;
	Developer_Name = JSON.stringify($('#developer_name').val());
	Developer_Year = JSON.stringify($('#platform option:selected').val());
	Developer_Console_Count = JSON.stringify($('#developer_console_count').val());
	ajax = ajaxinsertDeveloper_Game("insertDeveloper_Game", Developer_Name, Developer_Console_Count, Developer_Year);
	ajax.done(insertDeveloper_GameCallback);
	ajax.fail(function() {
		alert("Failure");
	});
}

function ajaxinsertDeveloper_Game(method, Developer_Name, Developer_Console_Count, Developer_Year) {
	alert("In ajaxinsertDeveloper_Game()")
        return $.ajax({
		url : 'Databases_Insert.php',
		type : 'POST',
		data : {
			method : method,
			Developer_Name : Developer_Name,
			Developer_Console_Count : Developer_Console_Count,
			Developer_Year : Developer_Year,
		}
	});
}

function insertDeveloper_GameCallback(response_in) {
        alert("In insertDeveloper_GameCallback()")
	response = JSON.parse(response_in);

	if (!response['success']) {
		$("#results").html("");
		alert("Insert failed on query:" + '\n' + response['querystring']);
		getDeveloper_Games(false);
		getPlatforms(false);
	} else {
		$("results").html(response['querystring'] + '<br>' + response['success'] + '<br>');
		getDeveloper_Games(false);
		getPlatforms(false);
	}
}

function showDeveloper_Games(developer_games) {
	alert("In showDeveloper_Games()");
	alert(developer_games);
	var developer_gameList = "";
	$.each(developer_games, function(key, value) {
		var itemString = "";
		$.each(value, function(key, item) {
			itemString += item + "\t \t";
		});
		developer_gameList += itemString + '<br>';
	});
	$("#results").html(developer_gameList);
}

function getDeveloper_Games() {
	alert("In getDeveloper_Games()");
	ajax = ajaxgetDeveloper_Games("getDeveloper_Games");
	ajax.done(getDeveloper_GamesCallback);
	ajax.fail(function() {
		alert("Failure");
	});
}

function ajaxgetDeveloper_Games(method) {
	alert("In ajaxgetDeveloper_Games()");
	return $.ajax({
		url : 'Databases_Insert.php',
		type : 'POST',
		data : {
			method : method
		}
	});
}

function getDeveloper_GamesCallback(response_in) {
	alert(response_in);
	var response = JSON.parse(response_in);
	developer_games = response["developer_games"];
	if (!response['success']) {
		$("#results").html("getDeveloper_Games() failed");
	} else {
		showDeveloper_Games(developer_games);
	}
}

function getPlatforms() {
	alert("In getPlatforms()");
	ajax = ajaxgetPlatforms("getPlatforms");
	ajax.done(getPlatformsCallback);
	ajax.fail(function() {
		alert("Failure");
	});
}

function ajaxgetPlatforms(method) {
	alert("In ajaxgetPlatforms()");
	return $.ajax({
		url : 'Databases_Insert.php',
		type : 'POST',
		data : {
			method : method
		}
	});
}

function getPlatformsCallback(response_in) {
	alert("In getPlatformsCallback()");
	alert(response_in);
	response = JSON.parse(response_in);
	$platforms = response["platforms"];
	alert($platforms);
	if (!response['success']) {
		alert('Failed in getPlatformCallback');
		$("#results").html("getPlatforms failed");
	} else {
		$('#platform').find('option').remove();
		alert($platforms);
		$.each($platforms, function(key, columns) {
			$("#platform").append($('<option>', {
				value : columns[2].toString(),
				text : columns[1].toString()
			}));
		});
	}
}
