/* Recebe os valores do artigo e do botão do artigo */
var pontuacao = 0;

/*       FASE 1              */
var start = document.getElementById('start');
var step = document.getElementById('step');


/*       FASE 2              */
var step1 = document.getElementById('step1');
var next1 = document.getElementById('next1');
var voltar1 = document.getElementById('voltar1');
var ponto1 = form.op1.value;


/*       FASE 3              */
var step2 = document.getElementById('step2');
var next2 = document.getElementById('next2');
var op2 = document.getElementById('op2');
var voltar2 = document.getElementById('voltar2');

/*       FASE 4              */
var step3 = document.getElementById('step3');
var next3 = document.getElementById('next3');
var op3 = document.getElementById('op3');
var voltar3 = document.getElementById('voltar3');

/*       FASE 5              */
var step4 = document.getElementById('step4');
var next4 = document.getElementById('next4');
var op4 = document.getElementById('op4');
var voltar4 = document.getElementById('voltar4');

/*       FASE  6             */
var step5 = document.getElementById('step5');
var next5 = document.getElementById('next5');
var op5 = document.getElementById('op5');
var voltar5 = document.getElementById('voltar5');

/*       FASE  7             */
var step6 = document.getElementById('step6');
var next6 = document.getElementById('next6');
var op6 = document.getElementById('op6');
var voltar6 = document.getElementById('voltar6');

/*       FASE  7             */
var step7 = document.getElementById('step7');
var next7 = document.getElementById('next7');
var op7 = document.getElementById('op7');
var voltar7 = document.getElementById('voltar7');

/*       FASE  8             */
var step8 = document.getElementById('step8');
var next8 = document.getElementById('next8');
var voltar8 = document.getElementById('voltar8');


/*       FASE  9             */
var step9 = document.getElementById('step9');
var next9 = document.getElementById('next9');
var voltar9 = document.getElementById('voltar9');


/*       FASE  10             */
var step10 = document.getElementById('step10');
var next10 = document.getElementById('next10');
var voltar10 = document.getElementById('voltar10');


/* quando o usuário perde durante o quiz*/
var lose1 = document.getElementById('lose1');
var lose2 = document.getElementById('lose2');

/*RESTART*/
var restart = document.getElementById('restart');
/* quando o usuário perde durante o quiz*/

var restart1 = document.getElementById('restart1');
/* quando o usuário perde durante o quiz*/

var restart2 = document.getElementById('restart2');
/* quando o usuário perde durante o quiz*/

var restart3 = document.getElementById('restart3');
/* quando o usuário perde durante o quiz*/

var restart4 = document.getElementById('restart4');
/* quando o usuário perde durante o quiz*/

var restart5 = document.getElementById('restart5');
/* quando o usuário perde durante o quiz*/

var restart6 = document.getElementById('restart6');
/* quando o usuário perde durante o quiz*/

var restart7 = document.getElementById('restart7');
/* quando o usuário perde durante o quiz*/

var restart8 = document.getElementById('restart8');
/* quando o usuário perde durante o quiz*/

var restart9 = document.getElementById('restart9');
/* quando o usuário perde durante o quiz*/

var restart10 = document.getElementById('restart10');
/* quando o usuário perde durante o quiz*/

var restart11 = document.getElementById('restart11');
/* quando o usuário perde durante o quiz*/

var restart12 = document.getElementById('restart12');
/* quando o usuário perde durante o quiz*/

/*	Alterna entre as questões	*/

start.onclick = function(){
	step.style.display = "none";
	step1.style.display = "block";
};

next2.onclick = function(){
	if(document.form.op2[0].checked==false && 
		document.form.op2[1].checked==false &&
		document.form.op2[2].checked==false &&
		document.form.op2[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op2[3].checked==true){
		step2.style.display = "none";
		lose1.style.display = "block";
		restart.onclick = function(){
			location.reload();
		}
	}else{
		param2 = form.op2.value;
		paramOp2 = parseInt(param2);
        alert(paramOp2);
		step2.style.display = "none";
		step3.style.display = "block";
	}
}
voltar2.onclick = function(){
	step1.style.display = "block";
	step2.style.display ="none";
}





next3.onclick = function(){
	if(document.form.op3[0].checked==false && 
		document.form.op3[1].checked==false &&
		document.form.op3[2].checked==false &&
		document.form.op3[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op3[3].checked==true){
		step3.style.display = "none";
		lose2.style.display = "block";
		restart1.onclick = function(){
			location.reload();
		}
	}else{
		param2 = form.op3.value;
		paramOp3 = parseInt(param2);
        alert(paramOp3);
		step3.style.display = "none";
		step4.style.display = "block";
	}
}
voltar3.onclick = function(){
	step2.style.display = "block";
	step3.style.display ="none";
}







next4.onclick = function(){
	if(document.form.op4[0].checked==false && 
		document.form.op4[1].checked==false &&
		document.form.op4[2].checked==false &&
		document.form.op4[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op4[3].checked==true){
		step4.style.display = "none";
		lose3.style.display = "block";
		restart2.onclick = function(){
		step3.style.display = "none";
		lose3.style.display = "block";
			location.reload();
		}
	}else{
		param2 = form.op4.value;
		paramOp4 = parseInt(param2);
        alert(paramOp4);
		step4.style.display = "none";
		step5.style.display = "block";
	}
}
voltar4.onclick = function(){
	step3.style.display = "block";
	step4.style.display ="none";
}






next5.onclick = function(){
	if(document.form.op5[0].checked==false && 
		document.form.op5[1].checked==false &&
		document.form.op5[2].checked==false &&
		document.form.op5[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op5[3].checked==true){
		step5.style.display = "none";
		lose4.style.display = "block";
		restart3.onclick = function(){
			location.reload();
		}
	}else{
		param2 = form.op5.value;
		paramOp5 = parseInt(param2);
		param5 = form.op5.value;
		paramOp5 = parseInt(param5);
	        alert(paramOp5);
		step5.style.display = "none";
		step6.style.display = "block";
	}
}
voltar5.onclick = function(){
	step4.style.display = "block";
	step5.style.display ="none";
}








next6.onclick = function(){
	if(document.form.op6[0].checked==false && 
		document.form.op6[1].checked==false &&
		document.form.op6[2].checked==false &&
		document.form.op6[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op6[0].checked==true){
		step6.style.display = "none";
		lose5.style.display = "block";
		restart4.onclick = function(){
			location.reload();
		}
	}else{
		param2 = form.op6.value;
		paramOp6 = parseInt(param2);
		param6 = form.op6.value;
		paramOp6 = parseInt(param6);
	        alert(paramOp6);
		step6.style.display = "none";
		step7.style.display = "block";
	}
}
voltar6.onclick = function(){
	step5.style.display = "block";
	step6.style.display ="none";
}








next7.onclick = function(){
	if(document.form.op7[0].checked==false && 
		document.form.op7[1].checked==false &&
		document.form.op7[2].checked==false &&
		document.form.op7[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op7[0].checked==true){
		step7.style.display = "none";
		lose6.style.display = "block";
		restart5.onclick = function(){
			location.reload();
		}
	}else{
		param2 = form.op7.value;
		paramOp7 = parseInt(param2);
		param7 = form.op7.value;
		paramOp7 = parseInt(param7);
        alert(paramOp7);
		step7.style.display = "none";
		step8.style.display = "block";
	}
}
voltar7.onclick = function(){
	step6.style.display = "block";
	step7.style.display ="none";
}







next8.onclick = function(){
	if(document.form.op8[0].checked==false && 
		document.form.op8[1].checked==false &&
		document.form.op8[2].checked==false &&
		document.form.op8[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op8[3].checked==true){
		step8.style.display = "none";
		lose7.style.display = "block";
		restart6.onclick = function(){
			location.reload();
		}
	}else{
		param2 = form.op8.value;
		paramOp8 = parseInt(param2);
		param8 = form.op8.value;
		paramOp8 = parseInt(param8);
        alert(paramOp8);
		step8.style.display = "none";
		step9.style.display = "block";
	}
}
voltar8.onclick = function(){
	step7.style.display = "block";
	step8.style.display ="none";
}








next9.onclick = function(){
	if(document.form.op9[0].checked==false && 
		document.form.op9[1].checked==false &&
		document.form.op9[2].checked==false &&
		document.form.op9[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op9[3].checked==true){
		step9.style.display = "none";
		lose8.style.display = "block";
		restart7.onclick = function(){
			location.reload();
		}
	}else{
		param2 = form.op9.value;
		paramOp9 = parseInt(param2);
		param9 = form.op9.value;
		paramOp9 = parseInt(param9);
        alert(paramOp9);
		step9.style.display = "none";
		step10.style.display = "block";
	}
}
voltar9.onclick = function(){
	step8.style.display = "block";
	step9.style.display ="none";
}


next10.onclick = function(){
	if(document.form.op10[0].checked==false && 
		document.form.op10[1].checked==false &&
		document.form.op10[2].checked==false &&
		document.form.op10[3].checked==false){
		alert("Escolha um opção!");
	}else if(document.form.op10[3].checked==true){
		step10.style.display = "none";
		lose9.style.display = "block";
		restart8.onclick = function(){
			location.reload();
		}
	}else{
		param2 = form.op10.value;
		paramOp10 = parseInt(param2);
		param10 = form.op10.value;
		paramOp10 = parseInt(param10);
		alert(paramOp10);
		step10.style.display = "none";
		step11.style.display = "block";
	}
}
voltar10.onclick = function(){
	step9.style.display = "block";
	step10.style.display ="none";
}

next11.onclick = function(){
	pontuacao = paramOp2+paramOp3+paramOp4+paramOp5+paramOp6+paramOp7+paramOp8+paramOp9+paramOp10;
	alert(pontuacao);
	
		/*COLOCAR AQUI OS FINAIS */
    if(pontuacao < 5 || pontuacao == 5){
        step11.style.display = "none";
        var loseFinal = document.getElementById('final3');
        loseFinal.style.display = "block";
        restart11.onclick = function(){
            location.reload();
        }
    }
    else if
        (pontuacao > 5 && pontuacao < 10){
        step11.style.display = "none";
        var loseMedia = Document.getElementById('final4');
            loseMedia.style.display = "block";
            restart12.onclick = function(){
            location.reload();}
    }
    else if
        (pontuacao < 13 && pontuacao > 10 || pontuacao == 10){
            step11.style.display = "none";
            var winMedia = document.getElementById('final2');
            winMedia.style.display = "block";
            restart10.onclick = function(){
            location.reload();}
        }else{
            step11.style.display = "none";
            var winAll = document.getElementById('final1');
            winAll.style.display = "block";
            restart9.onclick = function(){
            location.reload();}
        }
	
}

	

/*
Nesse bloco sera feita a transição para a finalização da entrevista
voltar10.onclick = function(){
	step9.style.display = "block";
	step10.style.display ="none";
}
*/
/*	Alterna entre as questões	*/




/*
	SOMA TUDO:
*/
function somaValores(){
	alert("ta funcionando a função");
	var somaPontos = ponto1 + ponto2 + ponto3 + ponto4 + ponto5 + ponto6 + ponto7 + ponto8 + ponto9 + ponto10;
	alert("Você Somou: ",somaPontos);
	return somaPontos;
}