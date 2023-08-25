var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var results = document.querySelector(".result");
var subType = "basic";
// "basic" is the default value for the Subscription drop-down list
var subDuration = 1;
// 1 is the default value for the Duration drop-down list. Must be a number data type and not a string

subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
    //console.log(subType);
    updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) { 
    subDuration = Number(e.target.value);
    //console.log(subDuration);
    updateSubscriptionDiv();
});

var updateSubscriptionDiv = function () {
    var monthlyCost = 5;
    // 5 is the monthly cost for a basic subscription, which is selected by default. 
    if (subType === "standard") {
        monthlyCost = 7;
    } else if (subType === "premium") {
        monthlyCost = 10;
    };
    var total = subDuration * monthlyCost;
    results.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`
};