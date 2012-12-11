function onload(){
	//...
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
	for(var i=1; i<nombre_equipes+1;i++)
		{
		
		var varee ={};

		
		
		window.localStorage.setItem(i,cnt[i]);
		window.localStorage.setItem(i+nombre_equipes,joueurs_equipe[i]);

		}
	



	
	//var ee2 = document.getElementById("e2").innerHTML;
	//window.localStorage.setItem(2, ee2);
	//var ee3 = document.getElementById("e3").innerHTML;
	//window.localStorage.setItem(3, ee3);
}
 
function displayData(data){
	for(var i=1; i<window.localStorage.length+1;i++)  //window.localStorage.length
		{
		var vare = 'e'+i;
		var vari = 'i'+i;

		var varee ={};


		cnt[i]=parseInt(window.localStorage.getItem(i));
		document.getElementById(vare).innerHTML =cnt[i];
		if (cnt[i] != null){vare = parseInt(cnt[i]);}
		else{cnt[i]=0;}


		
		joueurs_equipe[i]=window.localStorage.getItem(i+nombre_equipes);
		document.getElementById(vari).value =joueurs_equipe[i];
		}

			
		/*setTimeout(function() {
  		if (i=3) {alert(keyi); };
  		},5000);
		

		setTimeout(function() {
  		if (i=3) {alert(joueurs_equipe[i]); };
  		},5000);*/

	//ee2=window.localStorage.getItem(2);
	//document.getElementById("e2").innerHTML =ee2;
	//if (ee2 != null){e2 = parseInt(ee2);}

	//ee3=window.localStorage.getItem(3);
	//document.getElementById("e3").innerHTML =ee3;
	//if (ee3 != null){e3 = parseInt(ee3);}
	
}



