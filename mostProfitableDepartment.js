function mostProfitableDepartment(salesData){
 var dataMap = {}
 var max = 0;
 var name = '';
	for(i=0;i<salesData.length; i++){
      var saleList = salesData[i];
      if (dataMap[saleList.department] === undefined){
      	dataMap[saleList.department] =  0
      }
     dataMap[saleList.department] += saleList.sales  
  	}
	for (var key in dataMap){
      if(dataMap[key] > max){
      max = dataMap[key];
      name = key 
   	 } 
 	}
 console.log(name)
 return name;
}

function mostProfitableDay(salesData){
 	var dataMap = {}
 	var max = 0;
 	var day = '';
	for(i=0;i<salesData.length; i++){
      var saleList = salesData[i];
      if (dataMap[saleList.day] === undefined){
      	dataMap[saleList.day] =  0
      }
     dataMap[saleList.day] += saleList.sales  
  	}
	for (var key in dataMap){
      if(dataMap[key] > max){
      max = dataMap[key];
      day = key 
   	 } 
 	}
 	console.log(day)
	return day;
}
