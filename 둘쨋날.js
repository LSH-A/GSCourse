
//swap

let 재벌 = 70
let 청년 = 30
let swap

swap = 재벌;
재벌 = 청년;
청년 = swap;
console.log(재벌, 청년)
//
while(true){
    console.log("무한반복?")
    break;
}
// while 
let i = 0;
while(i < 5){

    i += 1;
}
// for문 
for(let i = 0; i < 5; i++){

    console.log("반복되는 코드"+i);
}
// while 실습 
let num = 0;
while (num <= 100) {
  console.log(num);
  num = num + 1;
}
//while 거꾸로 
let num = 100;
while (num >= 0) {
  console.log(num);
  num = num - 1;
}
//while 7 나머지
let num = 50;
while (num <= 100) {

  console.log(num+"%7 = "+num%7);
  
  ++num;
}
//while 총합
let num = 0;
let sum = 0;
while(num <= 100){
    sum += num;
    num ++;
}
sum

//for 실습 1 부터 100

for (let num = 0; num <= 100; num++) {
    console.log(num);
  }

// 3의 배수만
let num = 3;
while (num <= 100) {
  if (num % 3 == 0) {
    console.log(num);
  }
  num += 1;
}
for (let num = 3; num <= 100; num++) {
    if (num % 3 == 0) {
      console.log(num);
    }
  }
// 종료라 하면 종료
let 사용자입력 = prompt("입력");
while (사용자입력 !==  "종료") {

  console.log("반복되는 핵심 코드");
  
  사용자입력 = prompt("입력");
}
//업 앤 다운 게임
console.log("< 1 ~ 50 사이 숫자 맞추기 업 앤 다운 게임 >");
const answer = Math.floor(Math.random() * 50) + 1;

let guess = Number(prompt("숫자를 맞춰 보세요"));
let count = 0;
while(answer !== guess){
    if(answer > guess){
        console.log(`${guess}?업!`)
    }
    if(answer < guess){
        console.log(`${guess}?다운!`)
    }
    count ++;
    guess = Number(prompt("숫자를 맞춰 보세요"))
}
console.log("정답!");





//Array (배열)

const 쇼핑목록 = ["사과", "라면", "키친타올", "물티슈"];
console.log(쇼핑목록[0]); // 사과
console.log(쇼핑목록[3]); // 물티슈
console.log(쇼핑목록[쇼핑목록.length - 1]); // 물티슈

//추가(push)
const 쇼핑목록 = ["사과", "라면", "키친타올", "물티슈"];
쇼핑목록.push("콜라");

console.log(쇼핑목록); // ["사과", "라면", "키친타올", "물티슈", "콜라"]

//변경
const 쇼핑목록 = ["사과", "라면", "키친타올", "물티슈"];
쇼핑목록[2] = "화장지";

console.log(쇼핑목록); // ["사과", "라면", "화장지", "물티슈"]

//삭제(pop)
const 쇼핑목록 = ["사과", "라면", "키친타올", "물티슈", "콜라"];
쇼핑목록.pop();

console.log(쇼핑목록); // ['사과', '라면', '키친타올', '물티슈']




// 1부터 100 까지 빠진 숫자 찾기
const nums = [1,2,3,4,5,6,7,8,10]
let sum = 0;
let empty;
for(let i = 0; i < nums.length; i++){
    sum += nums[i];
}
empty = 55 - sum
