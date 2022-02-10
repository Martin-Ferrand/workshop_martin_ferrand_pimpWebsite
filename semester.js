import 'jquery'

function showSemester(array) {
    alert("lol");
    if (window.location.href == "http://intra.epitech.eu/planning/*") {
        for (var i = 0; i < array.length; i++) {
            if (array[i]) {
                $("#semester-" + i).trigger();
            }
        }
    }
}

alert("meh");
let arraySemester = [true, true, false, false, false, true, false];
arraySemester[0] = false;
setTimeout(showSemester(arraySemester), 5000);
