function onload(){
	//...
	getData();
}
 
function getData(){
	if(window.localStorage){
		for(var i=0; i<window.localStorage.length;i++){
			var key = window.localStorage.key(i);
			var value = window.localStorage.getItem(key);
                                    displayData(value);
		}
	}
}
 
function saveData(){
	for(var i=1; i<4;i++)
		{
		
		var vare = 'e'+i;
		var varee ={};

		
		//varee[i] = document.getElementById(vare).innerHTML;
		
		window.localStorage.setItem(i,cnt[i]);

		}



	
	//var ee2 = document.getElementById("e2").innerHTML;
	//window.localStorage.setItem(2, ee2);
	//var ee3 = document.getElementById("e3").innerHTML;
	//window.localStorage.setItem(3, ee3);
}
 
function displayData(data){
	for(var i=1; i<4;i++)
		{
		
		var vare = 'e'+i;
		var varee ={};

		

		cnt[i]=window.localStorage.getItem(i);
		document.getElementById(vare).innerHTML =cnt[i];
		if (cnt[i] != null){vare = parseInt(cnt[i]);}
		else{cnt[i]=0;}
		}

	//ee2=window.localStorage.getItem(2);
	//document.getElementById("e2").innerHTML =ee2;
	//if (ee2 != null){e2 = parseInt(ee2);}

	//ee3=window.localStorage.getItem(3);
	//document.getElementById("e3").innerHTML =ee3;
	//if (ee3 != null){e3 = parseInt(ee3);}
	
}



