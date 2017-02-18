function tab(pid){
		var tabs=["content","content2","content3","content4","content5"];
		for(var i=0;i<5;i++){
		if(tabs[i]==pid){
		document.getElementById(tabs[i]).style.display="block";
		}else{
		document.getElementById(tabs[i]).style.display="none";
			}
		}
	}