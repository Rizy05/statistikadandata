function showData(type) {

    let text = "";

    if (type === "discrete") {
        text =
        "Discrete data is countable data, for example the number of students in a class.";
    }

    else if (type === "continuous") {
        text =
        "Continuous data is measurable data, for example height, weight, or temperature.";
    }

    document.getElementById("result").innerHTML = text;
}