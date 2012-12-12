function onload(){
	getData();
}
 
function getData(){
	if(window.localStorage){
		for(var i=0; i<window.localStorage.length+1;i++){
			var key = window.localStorage.key(i);
			var value = window.localStorage.getItem(key);
            displayData(value);
		}
		
	}
}
 
function saveData(){
	for(var i=1; i<nombre_equipes+1;i++){
		var varee ={};
		window.localStorage.setItem(i,cnt[i]);
		window.localStorage.setItem(i+nombre_equipes,joueurs_equipe[i]);
	}
}
 
function displayData(data){
	for(var i=1; i<window.localStorage.length+1;i++){
		var vare = 'e'+i;
		var vari = 'i'+i;
		var varee ={};

		cnt[i]=parseInt(window.localStorage.getItem(i));
		document.getElementById(vare).innerHTML =cnt[i];
		if (cnt[i] != null){vare = parseInt(cnt[i]);}
		else{cnt[i]=0;}
		
		joueurs_equipe[i]=window.localStorage.getItem(i+nombre_equipes);
		document.getElementById(vari).value =joueurs_equipe[i];
		if (joueurs_equipe[i] != null || joueurs_equipe[i]<1){joueurs_equipe[i] = parseInt(joueurs_equipe[i]);}
		else{joueurs_equipe[i]=1;}
	}

}



