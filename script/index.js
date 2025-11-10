let friends = [];

friends[0] = {
    name: "Андрій Коваленко",
    birthday: "10.11.2005",
    mobile: "098 443 23 34"
};

friends[1] = {
    name: "Оксана Петренко",
    birthday: "13.07.2004",
    mobile: null
};

friends[2] = {
    name: "Ігор Мельник",
    birthday: "05.02.2005",
    mobile: "067 512 11 77"
};

friends[3] = {
    name: "Катерина Бондар",
    birthday: "29.11.2003",
    mobile: null
};

friends[4] = {
    name: "Дмитро Шевченко",
    birthday: "10.11.2005",
    mobile: "050 911 22 45"
};

friends[5] = {
    name: "Марія Ткаченко",
    birthday: "21.03.2004",
    mobile: null
};

friends[6] = {
    name: "Сергій Полянський",
    birthday: "14.09.2005",
    mobile: "063 777 44 88"
};

friends[7] = {
    name: "Ілля Савченко",
    birthday: "02.06.2005",
    mobile: null
};

friends[8] = {
    name: "Аліна Кравець",
    birthday: "13.11.2004",
    mobile: "097 555 09 09"
};

friends[9] = {
    name: "Тарас Лисенко",
    birthday: "27.04.2003",
    mobile: null
};

function daysDiff(date1, date2) {
    let data_1_day = date1.getDate()
    let data_2_day = date2.getDate()
    let data_1_month = date1.getMonth()
    let data_2_month = date2.getMonth()
    console.log(data_2_month === data_1_month)
    if (data_1_month === data_2_month) {
        return Math.abs(data_1_day - data_2_day);
    } else {
        return 9999
    }
}

function main() {
    let birthday_in_3_day = []
    let birthday_today = []
    let number_is_empty = []


    const today = new Date();

    for (let i = 0; i < 10; i++) {
        const dataComponents = friends[i]['birthday'].split('.');
        let iteration_date = new Date(dataComponents[2], dataComponents[1] - 1, dataComponents[0]);
        let diff = daysDiff(iteration_date, today)

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
          <td>${friends[i].mobile ?? '—'}</td>
        </tr>`;
        } else if (birthday_today.includes(i)) {
            table += `<tr class="today_bd">
          <td>${friends[i].name}</td>
          <td>${friends[i].birthday}</td>
          <td>${friends[i].mobile ?? '—'}</td>
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