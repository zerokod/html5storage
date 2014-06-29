// definzione variabili globali

// attenzione alle variabili globali
//var messaggio_it = 'ciao a tutti';
//var messaggio_en = 'ciao a tutti';

var messaggio = 'ciao a tutti';

// definizione funzioni

function setErrorInput(input){
	input.style.border = '2px solid red';
	input.style.background = '#33FF0000';
}
function setRigthInput(input){
	input.style.border = '';
	input.style.background = 'lightgreen';
}

function init (){
	var inputs; // recupero tutti gli input della pagina 
	//anche senza var funzionerebbe
	//input = document.getElementsByTagName('input');
	//console.log(input);
	inputs = document.getElementsByTagName('input');
	console.log(inputs);
	// inizio da 1 perchÃ¨ il primo input deve essere text
	for (var i=1; i < inputs.length ; i++){
		if(inputs[i].type == 'text'){
			inputs[i].placeholder = 'Non supportato';
		}
	}
	
	// imposto una prima modifica sull'onchange del form
	// sfruttando la validazione automatizzata
	
	for (var i=0; i < inputs.length ; i++){
		console.log('processing '+inputs[i].name);
	//	if(inputs[i].type == 'text'){
			if(inputs[i].willValidate==false){
				continue;
			}else{
				console.log('setting upOnChange '+inputs[i].name);
				inputs[i].onchange = function (){
					if(this.checkValidity){
						setRigthInput(this);
					}else{
						setErrorInput(this);
					}
					
				};
			}
	//	}
	}
	
	
	// imposto che la lable associata al campo obbligatorio
	// contenga un asterisco
	for (var i=0; i < inputs.length ; i++){
		console.log('processing '+inputs[i].name);
		if(inputs[i].required){
			// recupero l'id dell'input
			id = inputs[i].id; // id varrÃ : ipAssicurazione
			// rimuovo il prefisso 'ip'
			id = id.substr(2,id.leght); // id varrÃ : Assicurazione
			// aggiungo il prefisso 'lb' che identifica la label associata
			id = 'lb'+id; // id varrÃ : lbAssicurazione
			document.getElementById(id).innerText +=' (obbligatorio)';
		}
	}
}


// avvio dello script
window.onload = init;