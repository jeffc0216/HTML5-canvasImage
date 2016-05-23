function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext("2d");

	var pic = new Image(); //constructor:給初值用
	pic.src = '007.jpg';

	//讀取圖檔，匿名函數(){}都要有
	pic.addEventListener('load', function(){
		canvas.drawImage(pic, 0, 0, x.width, x.height); //x物件的寬與高
	}, false); 

	
}

window.addEventListener('load', doFirst, false);