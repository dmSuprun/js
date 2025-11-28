let tasks = []

class Task{
    constructor(task_status, name){
        this.task_status = task_status;
        this.name = name;
    }
}

async function main() {
    let url = 'https://api.jsonbin.io/v3/b/69295073ae596e708f75efaa'
    req = new Request(url,)
    res = await fetch(req,
        {
            'method': "GET",
            'headers': {
                'X-Master-Key': '$2a$10$PsWsW2kzS/lTdWYz1XkllO.kjrpB0AFnZdC3RXqkJ3Uopbz4h7hMC'
            }
        })
    if (res.status === 200) {
        const json = await res.json()
        fillUpArray(json.record)
        showTasks()

    } else {
        console.log('gg')
    }

}
function fillUpArray(json) {
    for (i in json) {
        for (j in json[i]) {
            tasks.push(new Task(i, json[i][j]));
        }
    }
    console.log(tasks);

}

function showTasks() {
    let ft = '<div><h2 class="ft">Заплановано</h2>'
    let ip = '<div><h2 class="ip">В процесі</h2>'
    let com = '<div><h2 class="com">Виконано</h2>'
    for (let i in tasks) {

        if (tasks[i]['task_status'] === "future") {
            ft +='<p>'+tasks[i]['name']['title']+'</p>'



        }else if (tasks[i]['task_status'] === "in_progress") {
            ip +=  '<p>'+tasks[i]['name']['title']+'</p>'




        }else{
            com += '<p>'+ tasks[i]['name']['title']+'</p>'




        }
    }
    ft += '</div>'
    ip += '</div>'
    com += '</div>'

    core_el = document.getElementById('future');
    core_el.innerHTML = ft;



    core_el = document.getElementById('in_progress');
    core_el.innerHTML = ip;


    core_el = document.getElementById('completed');
    core_el.innerHTML = com;


}

function close_tab() {
    core_el = document.getElementById('future');
    core_el.innerHTML = ' ';



    core_el = document.getElementById('in_progress');
    core_el.innerHTML = ' ';


    core_el = document.getElementById('completed');
    core_el.innerHTML = ' ';

}