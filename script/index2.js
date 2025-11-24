


function main() {
    const value = document.getElementById("city").value;
    var components = value.split(",");
    var html = "<br><ul>";
    for (var i = 0; i < components.length; i++) {
        html += "<li>" + components[i] + "</li>";
    }
    html += "</ul>";
    document.getElementById("result").innerHTML = html;
    fillTable()




}

function closeTable() {
    document.getElementById("result").innerHTML = " ";
    document.getElementById("city").value = ' '
    const tbody = document.querySelector("#myTable tbody");

    tbody.innerHTML = ""; // очистити



}

function fillTable() {
    const rows = 5;
    const cols = 5;
    const tbody = document.querySelector("#myTable tbody");

    tbody.innerHTML = ""; // очистити

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");

        if ((i + 1) % 2 === 0) {
            tr.classList.add("three_day_bd"); // парний рядок
        } else {
            tr.classList.add("today_bd");     // непарний рядок
        }

        for (let j = 0; j < cols; j++) {
            const td = document.createElement("td");

            if (i === j) {
                td.textContent = 0;
            } else if ((i + 1) % 2 === 1) {
                td.textContent = i + j + 1;
            } else {
                td.textContent = -(i + j + 1);
            }

            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    }
}
