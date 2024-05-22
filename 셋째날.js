
function 함수이름() {
    console.log("함수가 호출되었어요");
  }
  
  함수이름(); // 만든 함수 호출

  //

const 정답 = ['0', '7', '6'];
const 예상 = [];
for (let i = 0; i < 3 ; i++  ) {
const 예상숫자 = prompt(`${i+1}번째 예상 숫자 입력`);
예상.push(예상숫자)
}
//함수만들기
const 이름 = prompt("이름 입력");
function 안녕하세요(이름){
    console.log(`안녕하세요,${이름}`);
}
//평균
function 평균(a,b,c){
    return (a+b+c)/3;
}
//사이 수 모두 출력
function 사이(a,b){
    for(let i = a; i <= b; i++){
        console.log(i+" ");
    }
}
//어레이 반환
function 배열(a,b){
    const arr = [];
    for(let i = a; i <= b; i++){
       arr.push(i);
    }
    return arr;
}
// 배열내 모든 자연수 평균
function 자연수평균(arr){
    let sum = 0;
    let aver = 0;
    let len = arr.length;
    for(let i = 0; i < len; i++){
        sum += arr[i];
       
    }
    aver = sum / len;
    return aver;
}



// 정답확인
//const 정답 = ['0', '7', '6'];
//const 예상 = ['0','6','7'];
function 숫자야구() {
    const 정답 = ['0', '7', '6'];
    const 예상 = [];
    for (let i = 0; i < 3 ; i++  ) {
    const 예상숫자 = prompt(`${i+1}번째 예상 숫자 입력`);
    예상.push(예상숫자)
    }
    let strike = 0;
    let ball = 0;
    for(let i = 0 ; i < 3; i++){
        for(let j = 0 ; j < 3; j++){
            if(정답[i] === 예상[j]){
                if(i === j){
                    strike ++;
                }else{
                    ball ++;
                }
                break;
            }

        }
        
    }
    if(strike === 3){
        console.log("정답!");
    }else{
        console.log(`${strike}S,${ball}B`);
    }

}




// 
const 숫자들 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];
// 이 아래부터 코드 작성
for(let i = 0; i < 13; i++){
    숫자들.pop();
}

