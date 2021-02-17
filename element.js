//배열.push(element); 배열의 뒤에 엘리먼트 추가
//배열.pop(); 배열의 뒤에서 엘리먼트 삭제하고 리턴
//배열.shift(); 배열의 앞에서 엘리먼트 삭제하고 리턴
//배열.unshitf(); 배열의 앞에서 엘리먼트 추가

var arr = [1, 2, 3];
//arr의 앞에 "begin", 뒤에 "end"를 엘리먼트로 추가하세요.
//push, unshift를 이용하세요.
arr.unshift("begin");
arr.push("end");
console.log(arr);
