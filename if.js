console.log("Menu");
console.log("1. Ice Americano");
console.log("2. Cafe Latte");
console.log("3. Cappuccino");
console.log("4. Tea");

var choice = parseInt(prompt("매뉴를 선택해 주세요"));
console.log(choice = "빈 매뉴를 선택하였습니다.");

if (choice == 1) {
  console.log("아이스 아메리카노는 1500원 입니다.");
} else if (choice == 2) {
  console.log("커피 라때는 1700원 입니다.");
} else if (choice == 3) {
  console.log("카푸치노는 2000원 입니다.");
} else if (choice == 4) {
  console.log("홍차는 1200원 입니다.");
} else {
  console.log("죄송합니다. 매뉴에 없는 매뉴입니다.");
}
