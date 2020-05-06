var responseFlight = JSON.parse(prev.getResponseDataAsString());

var flightCount = Object.keys(responseFlight.departing).length;

//log.info(JSON.stringify(responseFlight));
var flightSize = Object.keys(responseFlight.departing).length;

var myDate = vars.get("randomDate").toString();
var count = 0;

for(i = 0; i < flightSize; i++){
    
    var departs = JSON.stringify(responseFlight.departing[i].departs).replaceAll('"','').split('T');

    log.info("Iteration " + i + " Date " + departs[0]);
    if(myDate == departs[0]){
        log.info("Date matched is " + departs[0] + " Iteration number " + count);
        break;
    }
    count++;
}

var flightId = JSON.stringify(responseFlight.departing[count].id).replaceAll('"','');
log.info("Flight Id "+flightId);
vars.put("flightId",flightId);

var flightNo = JSON.stringify(responseFlight.departing[count].flight_no).replaceAll('"','');
log.info("Flight No "+flightNo);
vars.put("flightNo",flightNo);

var flightValue = JSON.stringify(responseFlight.departing[count].seat_price[0].pp.value).replaceAll('"','');
log.info("Flight Value "+flightValue);

var departs = JSON.stringify(responseFlight.departing[count].departs).replaceAll('"','');
log.info("Flight depart "+departs);
vars.put("departs",departs);

var arrives = JSON.stringify(responseFlight.departing[count].arrives).replaceAll('"','');
log.info("Flight arrive "+arrives);
vars.put("arrives",arrives);

var departsTime = JSON.stringify(responseFlight.departing[count].departsTime).replaceAll('"','');
log.info("Flight departsTime "+departsTime);
vars.put("departsTime",departsTime);

var arrivesTime = JSON.stringify(responseFlight.departing[count].arrivesTime).replaceAll('"','');
log.info("Flight arrivesTime "+arrivesTime);
vars.put("arrivesTime",arrivesTime);

var flightDepartCity = JSON.stringify((responseFlight.departing[count].stops)[vars.get("depart")].city).replaceAll('"','');
log.info("flightDepartCity "+flightDepartCity);
vars.put("flightDepartCity",flightDepartCity);

var flightDepartState = JSON.stringify((responseFlight.departing[count].stops)[vars.get("depart")].state).replaceAll('"','');
log.info("flightDepartState "+flightDepartState);
vars.put("flightDepartState",flightDepartState);

var flightDepartDisplay_name = JSON.stringify((responseFlight.departing[count].stops)[vars.get("depart")].display_name).replaceAll('"','');
log.info("flightDepartDisplay_name "+flightDepartDisplay_name);
vars.put("flightDepartDisplay_name",flightDepartDisplay_name);

var flightDepartAirport_title = JSON.stringify((responseFlight.departing[count].stops)[vars.get("depart")].airport_title).replaceAll('"','');
log.info("flightDepartAirport_title "+flightDepartAirport_title);
vars.put("flightDepartAirport_title",flightDepartAirport_title);

var flightDestCity = JSON.stringify((responseFlight.departing[count].stops)[vars.get("arrive")].city).replaceAll('"','');
log.info("flightDestCity "+flightDestCity);
vars.put("flightDestCity",flightDestCity);

var flightDestState = JSON.stringify((responseFlight.departing[count].stops)[vars.get("arrive")].state).replaceAll('"','');
log.info("flightDestState "+flightDestState);
vars.put("flightDestCity",flightDestCity);

var flightDestDisplay_name = JSON.stringify((responseFlight.departing[count].stops)[vars.get("arrive")].display_name).replaceAll('"','');
log.info("flightDestDisplay_name "+flightDestDisplay_name);

var flightDestAirport_title = JSON.stringify((responseFlight.departing[count].stops)[vars.get("arrive")].airport_title).replaceAll('"','');
log.info("flightDestAirport_title "+flightDestAirport_title);

///////

var tax = JSON.stringify(responseFlight.departing[count].seat_price[0].pp.taxesandfees).replaceAll('"','');
log.info("Tax "+tax);

var combinedSave = null;
try{
    combinedSave = JSON.stringify(responseFlight.departing[count].seat_price[0].incentives.combinedSavings).replaceAll('"','');
}
catch (error){
    log.info("combinedSave was found to be null");
}

//log.info("Combined Save "+combinedSave);

var availability = JSON.stringify(responseFlight.departing[count].seat_price[0].availability).replaceAll('"','');
log.info("Availability "+availability);


var miles = JSON.stringify(responseFlight.departing[count].legs[0].miles).replaceAll('"','');
log.info("Miles "+miles);

var duration = JSON.stringify(responseFlight.departing[count].legs[0].duration).replaceAll('"','');
log.info("Duration "+duration);

var model = JSON.stringify(responseFlight.departing[count].legs[0].model).replaceAll('"','');
log.info("Model "+model);

var convenienceFee = JSON.stringify(responseFlight.departing[count].convenience_fee).replaceAll('"','');
log.info("Convenience Fee "+convenienceFee);

var roundTripDiscount = JSON.stringify(responseFlight.departing[count].totalRoundTripMaxDiscount).replaceAll('"','');
log.info("Round Trip Discount "+roundTripDiscount);

var marketCity = JSON.stringify(responseFlight.departing[count].market).replaceAll('"','');
log.info("City Market "+marketCity);
vars.put("marketCity",marketCity);

var returnValue = null;
try{
    returnValue = JSON.stringify(responseFlight.departing[count].seat_price[0].incentives.context[0].value).replaceAll('"','');
}
catch (error){
    log.info("returnValue was found to be null");
}

//var returnValue = JSON.stringify(responseFlight.departing[count].seat_price[0].incentives.context[0].value).replaceAll('"','');
log.info("Return value "+returnValue);
vars.put("returnValue",returnValue);

//var flightChoiceCompleted = JSON.stringify(responseFlight.flightChoiceCompleted);
//log.info("Flight Choice Completed "+flightChoiceCompleted);

var flightChoiceCompleted = Date.now();
vars.put("flightChoiceCompleted",flightChoiceCompleted);

//var flightChoiceValid = JSON.stringify(responseFlight.flightChoiceValid);
//log.info("Flight Choice Valid "+flightChoiceValid);
//vars.put("flightChoiceValid",flightChoiceValid);

var flightChoiceValid = Date.now();
vars.put("flightChoiceValid",flightChoiceValid);

var timeStamp16 = Date.now()*1000;




var recordCartItems ='{"search_hash": null,"departing":{"id":"'+flightId+'","arrives":"'+arrives+'","departs":"'+departs+'"},"flight_upsell":{"arrives":"'+arrives+'","departs":"'+departs+'","seat_price":[{"pp":{"value":'+flightValue+',"taxesandfees":'+tax+',"strikethru":null,"name":null,"type":"calculation","discount":null,"discount_type":null,"id":null},"availability":'+availability+',"incentives":null,"couponCode":null}],"stops":[{"code":"'+vars.get("depart")+'","city":"'+flightDepartCity+'","state":"'+flightDepartState+'","latitude":"","longitude":"","display_name":"'+flightDepartDisplay_name+'","airport_title":"'+flightDepartAirport_title+'","id":"'+vars.get("depart")+'"},{"code":"'+vars.get("arrive")+'","city":"'+flightDestCity+'","state":"'+flightDestState+'","latitude":"","longitude":"","display_name":"'+flightDestDisplay_name+'","airport_title":"'+flightDestAirport_title+'","id":"'+vars.get("arrive")+'"}],"journeyId":null,"orderId":null,"seat_purchase_available":true,"has_checked_in_traveller":false,"flight_no":"'+flightNo+'","airline_code":"G4","legs":[{"from":"'+vars.get("depart")+'","to":"'+vars.get("arrive")+'","miles":'+miles+',"duration":'+duration+',"model":"'+model+'","make":"Airbus","traveled":false}],"origin":"'+vars.get("depart")+'","destination":"'+vars.get("arrive")+'","arrivesTime":'+arrivesTime+',"departsTime":'+departsTime+',"convenience_fee":"'+convenienceFee+'","bag_pricing":{"1":25,"2":50,"3":75,"4":100},"carry_on_bag":{"1":20},"airport_bag":{"1":50,"2":100,"3":150,"4":200},"airport_carry_on_bag":{"1":50},"pre_departure_bag":{"1":45,"2":90,"3":135,"4":180},"pre_departure_carry_on_bag":{"1":45},"priority_boarding_price":6.49,"unflownSegmentCount":1,"cancelled":null,"reaccom":false,"nonRevenue":null,"nonRevenueSpaceAvailable":null,"totalRoundTripMaxDiscount":'+roundTripDiscount+',"totalRoundTripAppliedDiscount":null,"overnight":false,"eligible_flight_refund":false,"market":"'+marketCity+'","id":"'+flightId+'"},"hotel":null,"hotel_rooms":1,"rooms_counter":1,"promos":[],"shuttles":[],"vehicle":null,"travellers":[{"category":"Adult","dob":null,"clean_dob":null,"known_traveler_number":null,"redress":null,"departing":{"priority_boarding_selected":null,"checked_bags":null,"bin_bags":null,"requests":[],"requests_comments":""},"returning":null,"position":1,"pricingSource":"flight","requests_updated":false,"phone_prefix":"US +1","phoneCountryCode":"US","phoneCountryCallingCode":"1","save_traveller":false,"emergency_contact":{"enabled":false,"different":true,"wantsDifferent":false,"phonePrefix":"US +1","phoneCountryCode":"US","phoneCountryCallingCode":"1"},"passenger":1,"id":"'+vars.get("myManifestId")+'_adult_0"}],"lapChildren":[],"payment_details":{"tripflex":null,"terms_accepted":false,"instant_credit":false,"card_no":null,"ccv":null,"country":"US","opt_in_marketing":true,"payment_method":"CC","appliedPoints":false,"storeCard":false,"encryptionType":"PIE"},"flightChoiceCompleted":'+flightChoiceCompleted+',"flightcomboid":"'+flightId+'","lastKnownFlightComboId":"'+flightId+'","flightChoiceValid":'+flightChoiceValid+',"saveTriggerEvent":"flightChoiceCompleted","completion_history":["flightChoiceCompleted"],"vouchers":[],"page_viewed":[{"flights":'+timeStamp16+'}],"activeCampaignNames":{},"upLift":{"initialized":true,"iFramePresent":false,"enabled":true,"outOfFilter":false,"selected":false,"approved":false,"rejected":false,"paymentReady":false,"paymentLastUpdated":'+flightChoiceValid+',"optionsLastUpdated":'+flightChoiceValid+',"options":{"checkout":false}},"saved_travellers":[],"deal_filter":"","legs":["departing"],"id":"'+vars.get("myManifestId")+'","shuttle":[]}';

vars.put("recordCartItems", recordCartItems);
log.info(recordCartItems);



/*
var recordCartItems ='{"departing":{"id":"'+flightId+'","arrives":"'+arrives+'","departs":"'+departs+'"},"flight_upsell":{"arrives":"'+arrives+'","departs":"'+departs+'","seat_price":[{"pp":{"value":'+flightValue+',"taxesandfees":'+tax+',"strikethru":null,"name":null,"type":"calculation","discount":null,"discount_type":null,"id":null},"availability":'+availability+',"incentives":{"code":"ROUNDTRIP_MAX_DISCOUNT","combinedSavings":'+combinedSave+',"context":[{"name":"returnDate","value":"'+returnValue+'"}]},"couponCode":null}],"stops":[{"code":"'+vars.get("depart")+'","city":"'+flightDepartCity+'","state":"'+flightDepartState+'","latitude":"","longitude":"","display_name":"'+flightDepartDisplay_name+'","airport_title":"'+flightDepartAirport_title+'","id":"'+vars.get("depart")+'"},{"code":"'+vars.get("dest")+'","city":"'+flightDestCity+'","state":"'+flightDestState+'","latitude":"","longitude":"","display_name":"'+flightDestDisplay_name+'","airport_title":"'+flightDestAirport_title+'","id":"'+vars.get("dest")+'"}],"journeyId":null,"orderId":null,"seat_purchase_available":true,"has_checked_in_traveller":false,"flight_no":"'+flightNo+'","airline_code":"G4","legs":[{"from":"'+vars.get("depart")+'","to":"'+vars.get("dest")+'","miles":'+miles+',"duration":'+duration+',"model":"'+model+'","make":"Airbus","traveled":false}],"origin":"'+vars.get("depart")+'","destination":"'+vars.get("dest")+'","arrivesTime":'+arrivesTime+',"departsTime":'+departsTime+',"convenience_fee":"'+convenienceFee+'","bag_pricing":{"1":25,"2":50,"3":75,"4":100},"carry_on_bag":{"1":20},"airport_bag":{"1":50,"2":100,"3":150,"4":200},"airport_carry_on_bag":{"1":50},"pre_departure_bag":{"1":45,"2":90,"3":135,"4":180},"pre_departure_carry_on_bag":{"1":45},"priority_boarding_price":6.49,"unflownSegmentCount":1,"cancelled":null,"reaccom":false,"nonRevenue":null,"nonRevenueSpaceAvailable":null,"totalRoundTripMaxDiscount":'+roundTripDiscount+',"totalRoundTripAppliedDiscount":null,"overnight":false,"eligible_flight_refund":false,"market":"'+marketCity+'","id":"'+flightId+'"},"hotel":null,"hotel_rooms":1,"rooms_counter":1,"promos":[],"shuttles":[],"vehicle":null,"travellers":[{"category":"Adult","dob":null,"clean_dob":null,"known_traveler_number":null,"redress":null,"departing":{"priority_boarding_selected":null,"checked_bags":null,"bin_bags":null,"requests":[],"requests_comments":""},"returning":null,"position":1,"pricingSource":"flight","requests_updated":false,"phone_prefix":"US +1","phoneCountryCode":"US","phoneCountryCallingCode":"1","save_traveller":false,"emergency_contact":{"enabled":false,"different":true,"wantsDifferent":false,"phonePrefix":"US +1","phoneCountryCode":"US","phoneCountryCallingCode":"1"},"passenger":1,"id":"'+vars.get("manifestID")+'_adult_0"}],"lapChildren":[],"payment_details":{"tripflex":null,"terms_accepted":false,"instant_credit":false,"card_no":null,"ccv":null,"country":"US","opt_in_marketing":true,"payment_method":"CC","appliedPoints":false,"storeCard":false,"encryptionType":"PIE"},"flightChoiceCompleted":'+vars.get("flightChoiceCompleted")+',"flightcomboid":"'+flightId+'","lastKnownFlightComboId":"'+flightId+'","flightChoiceValid":'+vars.get("flightChoiceValid")+',"saveTriggerEvent":"flightChoiceCompleted","completion_history":["flightChoiceCompleted"],"vouchers":[],"page_viewed":[{"flights":'+vars.get("flights")+'}],"activeCampaignNames":{},"upLift":{"initialized":true,"iFramePresent":false,"enabled":true,"outOfFilter":false,"selected":false,"approved":false,"rejected":false,"paymentReady":false,"paymentLastUpdated":'+vars.get("paymentLastUpdated")+',"optionsLastUpdated":'+vars.get("optionsLastUpdated")+',"options":{"checkout":false}},"saved_travellers":[],"deal_filter":"","legs":["departing"],"id":"'+vars.get("manifestID")+'","shuttle":[]}';
*/
