console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Cafe Latte");
console.log("3. Cappuccino");
console.log("4. Tea");

var count = 0;

while (count < 3) {
  var choice = parseInt(prompt("매뉴를 선택하여 주세요."));
  console.log(choice + "번 매뉴를 선택하였습니다.");

  switch (choice) {
    case 1:
    console.log("아메리카노는 1200원 입니다.");
    break;

    case 2:
    console.log("아메리카노는 1200원 입니다.");
    break;

    case 3:
    console.log("아메리카노는 1200원 입니다.");
    break;

    case 4:
    console.log("아메리카노는 1200원 입니다.");
    break;

    default:
      console.log("매뉴에 없는 주문입니다.");
      break;
  }
  count++;
}
console.log("안녕히가세요.");
