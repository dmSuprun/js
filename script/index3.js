class square{
    constructor(name, side){
        this.name = name;

        this.side = Math.abs(side);
    }
    retSquare(){
        return this.side * this.side;

    }
}

class rectangle extends square{
    constructor(name, side,side_2, side_diff) {
        super(name, side);
        this.side_diff = side_diff;
        this.side_2 = side_2;
    }
    retSquare(){
        return this.side * this.side_2;
    }
}

class romb extends square{
    retDiagonal(){
        return 'Метод для діагоналі ромба!';
    }
}






function main(){
    var name_square = document.getElementById("name").value;
    var side_square =parseFloat(document.getElementById("c1").value);


    var name_rect = document.getElementById("name2").value;
    var rect_side = parseFloat(document.getElementById("c2").value);
    var rect_side_2 = parseFloat(document.getElementById("c3").value);
    var side_diff = parseFloat(document.getElementById("d").value);



    var name_r = document.getElementById("name_r").value;
    var side_r =parseFloat(document.getElementById("c_r").value);


    var sq = new square(name_square, side_square);
    var s = sq.retSquare();

    var rq = new rectangle(name_rect, rect_side,rect_side_2,side_diff);
    var p_q = rq.retSquare();


    var s_r = new romb(name_r, side_r);
    var romb_d = s_r.retDiagonal();


    document.getElementById("result_cvadrat").innerHTML = '<br><h2>Площа квадрату:'+s+'</h2>';
    document.getElementById("result_pramokytnyk").innerHTML = '<br><h2>Площа прямокутника:'+p_q+'</h2>';
    document.getElementById("result_romb").innerHTML = '<br><h2>Діагональ:'+romb_d+'</h2>';



}

function close_tab(){
    document.getElementById("result_cvadrat").innerHTML = '';
    document.getElementById("result_pramokytnyk").innerHTML ='';

}