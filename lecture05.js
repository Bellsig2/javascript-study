var height = prompt("키를 입력해 주세요");
console.log(height, typeof(height));

var height_int = parseInt(height);
console.log(height_int, typeof(height_int)); // parseInt : 문자열을 정수로 변환

var height_float = parseFloat(height); // parseFloat : 문자열을 실수로 변환
console.log(height_float, typeof(height_float));
