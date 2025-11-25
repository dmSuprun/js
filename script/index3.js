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
    constructor(name, side, side_diff) {
        super(name, side);
        this.side_diff = side_diff;
    }
    retSquare(){
        return this.side * (this.side+this.side_diff);
    }
}






function main(){
    var name_square = document.getElementById("name").value;
    var side_square =parseFloat(document.getElementById("c1").value);


    var name_rect = document.getElementById("name2").value;
    var rect_side = parseFloat(document.getElementById("c2").value);
    var side_diff = parseFloat(document.getElementById("d").value);


    var sq = new square(name_square, side_square);
    var s = sq.retSquare();

    var rq = new rectangle(name_rect, rect_side,side_diff);
    var s_r = rq.retSquare();


    document.getElementById("result_cvadrat").innerHTML = '<br><h2>Площа квадрату:'+s+'</h2>';
    document.getElementById("result_pramokytnyk").innerHTML = '<br><h2>Площа прямокутника:'+s_r+'</h2>';



}

function close_tab(){
    document.getElementById("result_cvadrat").innerHTML = '';
    document.getElementById("result_pramokytnyk").innerHTML ='';

}