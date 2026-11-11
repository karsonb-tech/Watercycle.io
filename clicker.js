const clicker = document.getElementById("clicker");
const vapor = document.getElementById("vapor");
const vaporPerSecond = document.getElementById("vps");
const lowerHumidity = document.getElementById("upgrade_1");
const moreSurfaceArea = document.getElementById("upgrade_2");
const u3 = document.getElementById("upgrade_3");
const u4 = document.getElementById("upgrade_4");
const u5 = document.getElementById("upgrade_5");
const rebirth = document.getElementById("rebirth");
u3.style.display = "none";
u5.style.display = "flex";
const u3cost = 500;
const u1cost = 25;
const u2cost = 100;
const u4cost = 15000;
const u5cost = 500000;
let forever_multiplier = 0;
let rebirthcost = 250000;
let rebirths = 0;
let u1bought = 0;
let u2bought = 1;
let vaporPerSecondValue = 0;
let multiplier = 1;
let vaporvalue = 0;
function add_vapor() {
    vaporvalue = vaporvalue + (1 * multiplier);
    vapor.textContent = vaporvalue + " vapor";
        
    }
function reset_stats () {
    u1bought = 0;
    u2bought = 0;
    multiplier = 1;
    vaporvalue = 100;
}
clicker.addEventListener("click", add_vapor);
lowerHumidity.addEventListener("click", function() {
    if ((vaporvalue >= u1cost)) {
        vaporvalue = vaporvalue - (u1cost);
        vapor.textContent = vaporvalue + " Vapor";
        multiplier += 1;
    }
});
moreSurfaceArea.addEventListener("click", function() {
    if (vaporvalue >= u2cost) {
        u2bought = 1;
        vaporvalue -= u2cost;
        vaporPerSecondValue += 1;
        vaporPerSecond.textContent = vaporPerSecondValue + " Vapor Per Second"
    }
});
u3.addEventListener("click", function() {
    if (vaporvalue >= u3cost) {
        vaporvalue -= u3cost;
        multiplier += 5;
    }
});
u4.addEventListener("click", function() {
    if (vaporvalue >= u4cost) {
        vaporvalue -= u4cost;
        vaporPerSecondValue += 10;
        multiplier += 20;
    }
});
u5.addEventListener("click", function() {
    if (vaporvalue >= u5cost) {
        vaporvalue -= u5cost;
        vaporpersecond += 50;
    }
})
rebirth.addEventListener("click", function() {
    if (vaporvalue >= rebirthcost) {
        if (vaporvalue <= 1) {
            forever_multiplier = 2;
        }
        else {
            forever_multiplier += 1;
            reset_stats();
        }
    }
});
setInterval(function() {
    vaporvalue += (vaporPerSecondValue * (multiplier += forever_multiplier));

}, 1000);
setInterval(function() {
    vapor.textContent = vaporvalue + " Vapor";
    vaporPerSecond.textContent = vaporPerSecondValue + " Vapor Per Second";
    if (vaporvalue >= u1cost) {
        lowerHumidity.style.filter = "brightness(100%)";
    }
    if (u1bought === 1) {
        lowerHumidity.style.display = "none";
    }
    if (u2bought === 1) {
        u3.style.display = "flex";
    }
}, 100);