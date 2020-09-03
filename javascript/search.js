window.onload = function() {
	document.getElementById("table").innerHTML = showTable(itemList);
	itemList.forEach(function (item) {
		item.fullInfo = item.name + " " + item.code + " " + item.color + " " + item.price + " " + item.weight;
	})
	}
	
	var nameCode;
	var name;
	var color;
	var lowPrice;
	var upPrice;
	var lowWeight;
	var upWeight;
	
	function getValue(){
		nameCode = document.getElementById("nameCode").value;
		name = document.getElementById("name").value;
		color = document.getElementById("color-select").value;
		lowPrice = document.getElementById("lowPrice").value;
		upPrice = document.getElementById("upPrice").value;
		lowWeight = document.getElementById("lowWeight").value;
		upWeight = document.getElementById("upWeight").value;
	}
	
	function submitSearch(){
		getValue();
		
		var result=filterText(itemList, name, color);
		var result2=filterPrice(result, lowPrice, upPrice);
		var result3=filterWeight(result2, lowWeight, upWeight);
		var result4=advanceSearch(result3, nameCode);
		
		if(result4.length==0){
			document.getElementById("table").innerHTML = "No result";
		}
		else
		{
			document.getElementById("table").innerHTML = showTable(result4);
		}
	}
	
	
	function filterText(list, nameSearch, colorSearch){
		var result;
		if (nameSearch.localeCompare("All")==0)
		{
			if (colorSearch.localeCompare("All")==0) {result=list;}
			else result=list.filter(function(item){return item.color==colorSearch});
		}
		else
		{
			if (colorSearch.localeCompare("All")==0)
			{
				result=list.filter(function(item){return item.name==nameSearch})
			}
			else
			{
				var filter1=list.filter(function(item){return item.name==nameSearch})
				result=filter1.filter(function(item){return item.color==colorSearch});
			}
		}
		return result;
	}
	
	function filterPrice(list, lower, upper)
	{
		var result;
		if(lower=="")
		{
			if(upper=="") {result=list;}
			else {
				result = list.filter(it => it.price<=upper);
			}
		}
		else
		{
			if(upper=="") {
				result = list.filter(it => it.price >= lower);
			}
			else
			{
				result = list.filter(it=>it.price>=lower && it.price<=upper);
			}
		}
		return result;
	}
	
	function filterWeight(list, lower, upper)
	{
		var result;
		if(lower=="")
		{
			if(upper=="") {result=list;}
			else {
				result = list.filter(it => it.weight<=upper);
			}
		}
		else
		{
			if(upper=="") {
				result = list.filter(it => it.weight >= lower);
			}
			else
			{
				result = list.filter(it=>it.weight>=lower && it.weight<=upper);
			}
		}
		return result;
	}
	
	function showTable(list)
	{
		var t="<table><tr><th>Name</th><th>Code</th><th>Color</th><th>Price</th><th>Weight</th></tr>";
		for (var i=0; i<list.length; i++){
			var tr="<tr>";
			tr+= "<td>" + list[i].name + "</td>";
			tr+= "<td>" + list[i].code + "</td>";
			tr+= "<td>" + list[i].color + "</td>";
			tr+= "<td>" + list[i].price + "</td>";
			tr+= "<td>" + list[i].weight + "</td>";
			t+=tr;
		}
		t+="</table>";
		return t;
	}
	
	function changeCSS(){
		submitSearch();
		if(document.getElementById("color-select").value=="All")
		{
			document.getElementById("color-select").style.background="white";
			document.getElementById("color-select").style.color="black";
		}
		else
		{
			document.getElementById("color-select").style.background="#2D8EFF";
			document.getElementById("color-select").style.color="#ffffff";
		}
		
		if(document.getElementById("name").value=="All")
		{
			document.getElementById("name").style.background="white";
			document.getElementById("name").style.color="black";
		}
		else
		{
			document.getElementById("name").style.background="#2D8EFF";
			document.getElementById("name").style.color="#ffffff";
		}
	}
	
	function reset(){
		document.getElementById("nameCode").value="";
		document.getElementById("name").selectedIndex="0";
		document.getElementById("color-select").selectedIndex="0";
		document.getElementById("lowPrice").value="";
		document.getElementById("upPrice").value="";
		document.getElementById("lowWeight").value="";
		document.getElementById("upWeight").value="";
		changeCSS();
	}
	
	function advanceSearch(list, string){
		var result;
		result=itemList.filter(item => item.fullInfo.includes("!@#$%^"));
		var temp=string.split("*");
		var j=0;
		if(temp.length==1)
		{
			result=itemList.filter(item => item.fullInfo.toLowerCase().includes(string.toLowerCase()));
		}
		else if(temp.length==3)
		{
			result=itemList.filter(item => item.fullInfo.toLowerCase().includes(temp[1].toLowerCase()));
		}
		else if(temp.length==2){
			if(temp[0]=="")
			{
				for(var i=0;i<list.length;i++)
				{
					if(list[i].name.toLowerCase().endsWith(temp[1].toLowerCase())==true)
					{
						result[j]=list[i]; j++;
					}
					else if(list[i].color.toLowerCase().endsWith(temp[1].toLowerCase())==true)
					{
						result[j]=list[i]; j++;
					}
					else if(list[i].code.toLowerCase().endsWith(temp[1].toLowerCase())==true)
					{
						result[j]=list[i]; j++;
					}
					else if(list[i].price.toString().endsWith(temp[1].toLowerCase())==true)
					{
						result[j]=list[i]; j++;
					}
					else if(list[i].weight.toString().endsWith(temp[1].toLowerCase())==true)
					{
						result[j]=list[i]; j++;
					}
				}
			}
			else if(temp[1]=="")
			{
				for(var i=0;i<list.length;i++)
				{
					if(list[i].name.toLowerCase().startsWith(temp[0].toLowerCase())==true)
					{
						result[j]=list[i]; j++;
					}
					else if(list[i].color.toLowerCase().startsWith(temp[0].toLowerCase())==true)
					{
						result[j]=list[i]; j++;
					}
					else if(list[i].code.toLowerCase().startsWith(temp[0].toLowerCase())==true)
					{
						result[j]=list[i]; j++;
					}
					else if(list[i].price.toString().startsWith(temp[0].toLowerCase())==true)
					{
						result[j]=list[i]; j++;
					}
					else if(list[i].weight.toString().startsWith(temp[0].toLowerCase())==true)
					{
						result[j]=list[i]; j++;
					}
				}
			}
		}
		
		return result;
	
	}
