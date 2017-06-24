$(document).ready(function(){
	$("#docReady").html("Document Ready");
	//Paste excel below here
	var repArr = [
		['COMPANY_CODE','%V_COM_CD %'],
		['COMPANY_NAME','%V_COM_NAM %'],
		['AMOUNT_REPORT_CURRENCY','%V_AMOUNT %'],
		['REPORT_CURRENCY_INDICATOR','%V_AMT_CUR_IND %'],
	]
		
	//Paste excel above here
	
	var path="file:///C:/Users/clifford.crear/Desktop/GL_04_Data_Prep_and_Map_SAP.txt"	
	
	$("button").click(function(){
		console.log(repArr[1][0]);
		console.log(repArr[1][1]);
		console.log(repArr.length);
		$.get("C:/Users/clifford.crear/Desktop/GL_04_Data_Prep_and_Map_SAP.txt", function(data){
			var resource = data;
			$("#div1").html(data);
		});
	});
});