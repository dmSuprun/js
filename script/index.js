let friends = [];

friends[0] = {
    name: "Андрій Коваленко",
    birthday: "21.11.2005",
    mobile: "098 443 23 34"
};

friends[1] = {
    name: "Оксана Петренко",
    birthday: "18.11.2004",
    mobile: null
};

friends[2] = {
    name: "Ігор Мельник",
    birthday: "05.02.2005",
    mobile: "067 512 11 77"
};

friends[3] = {
    name: "Катерина Бондар",
    birthday: "21.11.2003",
    mobile: null
};

friends[4] = {
    name: "Дмитро Шевченко",
    birthday: "11.11.2005",
    mobile: "050 911 22 45"
};

friends[5] = {
    name: "Марія Ткаченко",
    birthday: "21.03.2004",
    mobile: null
};

friends[6] = {
    name: "Сергій Полянський",
    birthday: "18.11.2005",
    mobile: "063 777 44 88"
};

friends[7] = {
    name: "Ілля Савченко",
    birthday: "02.06.2005",
    mobile: null
};

friends[8] = {
    name: "Аліна Кравець",
    birthday: "04.11.2004",
    mobile: "097 555 09 09"
};

friends[9] = {
    name: "Тарас Лисенко",
    birthday: "18.04.2003",
    mobile: null
};

function daysUntilBirthday(birthDate) {
    const today = new Date();
    const currentYear = today.getFullYear();

    let nextBirthday = new Date(currentYear, birthDate.getMonth(), birthDate.getDate());

    if (nextBirthday === today) {
        return 0;
    }

    const oneDay = 1000 * 60 * 60 * 24;
    return Math.ceil((nextBirthday - today) / oneDay);
}

function main() {
    let birthday_in_3_day = []
    let birthday_today = []
    let number_is_empty = []


    const today = new Date();

    for (let i = 0; i < 10; i++) {
        const dataComponents = friends[i]['birthday'].split('.');
        let iteration_date = new Date(dataComponents[2], dataComponents[1] - 1, dataComponents[0]);
        let diff = daysUntilBirthday(iteration_date)

        if (diff === 3) {
            birthday_in_3_day.push(i);
        } else if (diff === 0) {
            birthday_today.push(i);
        } else if (friends[i]['mobile'] == null) {
            number_is_empty.push(i);
        }

    }

    let table = "<table class=\"friends-table\" border='1' cellspacing='0' cellpadding='5'>";
    table += "<tr><th>Ім'я</th><th>Дата народження</th><th>Мобільний телефон</th></tr>";

    for (let i = 0; i < friends.length; i++) {
        if (birthday_in_3_day.includes(i)) {
            table += `<tr class="three_day_bd">
          <td>${friends[i].name}</td>
          <td>${friends[i].birthday}</td>
          <td>${friends[i].mobile ?? 'Оййй...нема('}</td>
        </tr>`;
        } else if (birthday_today.includes(i)) {
            table += `<tr class="today_bd">
          <td>${friends[i].name}</td>
          <td>${friends[i].birthday}</td>
          <td>${friends[i].mobile ?? 'Оййй...нема('}</td>
        </tr>`;
        } else {
            table += `<tr>
          <td>${friends[i].name}</td>
          <td>${friends[i].birthday}</td>
          <td>${friends[i].mobile ?? 'Оййй...нема('}</td>
        </tr>`;
        }
    }

    table += "</table>";

    document.getElementById("result").innerHTML = table;


}

function closeTable() {
    document.getElementById("result").innerHTML = " ";


}