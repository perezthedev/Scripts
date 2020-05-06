
var airportResponse = prev.getResponseDataAsString();

//log.info("Airport Response " + airportResponse);
var airportParsedResponse = airportResponse.split("airports");

var cityStartCode = airportParsedResponse[1].split(",\"redirect_url_template\"");

//log.info("My other var " + cityStartCode[0]);   //  this accessess all city codes and respective arrival flights

//this works to split the string
var cityVarCode = cityStartCode[0].split(")\":{");
var maxDepartSize = (cityVarCode.length)-2; // -1 for base 0, -1 to shift

var randomDepartIndex = Math.floor((Math.random(0,maxDepartSize)*10))
var randomDepartSubIndex = cityVarCode[randomDepartIndex].split("(").length-1;
var randomDepartCodeArray = cityVarCode[randomDepartIndex].split("(");
var randomDepartCode = randomDepartCodeArray[randomDepartSubIndex];
log.info("Random Departure Code " + randomDepartCode);
vars.put("depart", randomDepartCode);

// arrive random code
var randomArriveIndex = cityVarCode[randomDepartIndex+1].split("connections\":");
var randomArriveIndex = randomArriveIndex[1].split("},\"");   // stores string of connecting flights
var maxArriveSize = randomArriveIndex[0].split(")\":").length-1; // -1 to use for base 0 indexing
var randomArriveCodeArray = randomArriveIndex[0].split(")\":");
var randomArriveIndex = Math.floor((Math.random(0,maxArriveSize)));        // need to clean the front of string to only get airport code
var randomArriveCode = randomArriveCodeArray[randomArriveIndex].split("(");
randomArriveCode = randomArriveCode[randomArriveCode.length-1];
log.info("Random Arrival Code " + randomArriveCode);
vars.put("arrive", randomArriveCode);

