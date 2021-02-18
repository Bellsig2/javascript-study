function a() {
  var v_a = "a";

  function b() {
    var v_b = "b";
    console.log("b:", typeof(v), typeof(v_a), typeof(v, b));
  }
  b();
  console.log("a:",typeof(v), typeof(v_a), typeof(v,b));
}

var v = "v";
console.log("o:", typeof(v), typeof(v_a), typeof(v, b));
