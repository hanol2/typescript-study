let 이름  = 'kim';
let age : number = 30;
let area : string = 'gwangju';

let like : { singer : string , song : string} = { singer : '데이식스' , song : '좋아합니다.'}

let project : {
     member : string[], 
     days : number,
    started : boolean,
} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}

// 숫자 or 문자가 가능한 array 타입지정은?
// let 회원들 : (number | string)[] = [1, '2', 3];
let 오브젝트 : { a : string | number } = { a : '123'}


//**object**안에 어떤 **속성**이 들어갈지 아직 모른다면?
//⇒ index signature
type MyObject = {
  [key :string] : number,
}
let 철수 :MyObject = { 
  age : 50,
  weight : 100,
}

// union Type ( 타입이 여러개일 경우 )

// let 회원 : number | string   = 123;
let 회원 : (number | string )  = "kim";

// any 타입 (타입이 가변적일 때)
// => 타입실드 해제문법임
let 어름 : any;
어름 = 123;
어름 = [];
let 변수 : string = 어름 ;

//=> 에러나지 않음

// unknown = any 와 같은 기능이나 any보다 안전함
// => 
let 이룸 : unknown;
이룸 = 123;
이룸 = {};
//let 변수 : string = 이룸;
// => 에러나타내줌

// (중요) 타입 엄격하게 지켜야함
// 간단한 연산도 타입 일치해야 가능
let 나이 : string | number;
//나이 + 1;

// string 타입 +1 (허용)
// number 타입 +1 (허용)
// string  | number 타입 +1 (안돼)

let user : string = 'kim';
let age1 : undefined | number = undefined;
let married : boolean = false;

let 좋아하는 : { singer : string , song : string} = { singer : '데이식스' , song : '좋아합니다.'}


// let 회원들 : (number | string)[] = [1, '2', 3];

let 하놀 : (string |number|undefined |boolean)[]= [user, age, married];


let 학교 : {
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[] 
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}


학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

function 함수 (x:number): number {
  return x*2
}

함수(2)

// 함수에서 void타입 활용가능
// 실수로 리턴하는것을 방지 void=> return 하고 싶지 않을 때
// 타입지정된 파라미터는 필수임
function 함수1 (x:number): void {
  1+1
}

함수1(3)

// 파라미터가 옵션일 경우엔 파라미터변수?: 타입


function 함수2 (x?:number) : void {
  1+1
}
// ?는 |undefined를 포함한다는 것을 의미
function 함수3 (x:number | undefined): void {
  1+1
}

//narrowing
// function 함수4 (x:number | strin): void {
//   if (x의 타입이 숫자면) {
//     console.log(x+3)
//   }
// }

function 인사(x?:string) {
    if(x ){
      console.log("안녕하세요" + x)
    } else {
      console.log("이름없음")
    }
}

인사("홍길동")

function 자릿수(x:(string | number)) : number {
    if(typeof x ===  'string'){
      return x.length
    } else {
      return x.toString().length
    }
}


// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수('상', '중' , '하' ) 를 입력할 수 있어야 한다.
// 2. 월소득은 만원당 1점, 집 보유시 500점 & 미보유시 0점, 매력점수는 '상' 일 때만 100점으로 계산합니다.



// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해주어야 합니다. 그 외엔 아무것도 return 하지 않습니다.
// sum >600


function 결혼(money : number, home : boolean, charm: string) : string | void {
  let score : number =0;
  score += money;
  if (money.toLocaleString().length > 0) {
    if (home === true) {
      score += 500
    }
    if ( charm === "상"){
      score+= 100
    }
    if ( score >= 600) {
      return "결혼가능"
    }
  }
}

console.log(결혼(100,true, '상'));
//결혼가능

// Type Narrowing : Type 이 아직 하나로 확정되지 않았을 경우

// assertion 문법
function 내함수 ( x : number | string ) {
  let array : number[] = []
  array[0] = x as number;
}


function 클리닝함수 ( x : (number | string)[] ) {

    let 클리닝엔드 : number[] = [];
    x.forEach((i)=>{
        if ( typeof i === "string") {
            return 클리닝엔드.push(parseFloat(i))
        } else {
            클리닝엔드.push(i)
        }
    })
}

클리닝함수([12,"34"])




let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 과목 ( subject : (string | string[]) ) {
    if(typeof subject ===  'string'){
    return subject
    }  else if (Array.isArray(subject) ){
    return subject[subject.length - 1];
    } else {
    return '없쪄'
    }
}


// 과목( { subject : 'math' } )  //이 경우 'math'를 return
// 과목( { subject : ['science', 'art', 'korean'] } ) //이 경우 'korean'을 return
// 과목( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 

type Animal =  {name : string, age : number}  

// let 동물 : Animal = 'kim'

let 동물 : Animal  = {name: "코끼리", age : 40}

// const 지역 = 'Gwangju';
// 지역 = 'Seoul';

const 지역 = {region : 'Seoul'}
지역.region = 'Busan';


// type BoyFriend = {
//   readonly name : string
// }

type BoyFriend = {
   name? : string
}

const 남친 : BoyFriend= {
    name : '강준'
}

남친.name = '제훈'

type PositionX = {x : number}
type PositionY = {y : number}

type NewType = PositionX & PositionY;

let position : NewType = {x : 10, y: 20}

// 1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요? => 에러남
// 2. 다음 조건을 만족하는 타입을 만들어라.
// 1) 이 타입은 object 자료형이어야 함
// 2) 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야함
// 3) 이 타입은 size 라는 속성이 있어야 하며 항상 숫자가 들어와야 함
// 4) 이 타입은 position 이라는 변경 불가능한 속성이 있어야 하며 항상 숫자가 담긴 array 자료가 들어와야 함

type A = {
    readonly position : number[]
}

type B = {color?: string , size : number}

type New = A & B

type Profile = {
    name : string,
    phone : number,
    email : string
}


type Adault = {
    name : string,
    phone : number,
    email : string,
    adault : boolean
}


// Literal types => 변수에 뭐가 들어올지 더욱 엄격하게 관리가능

let 이름이 : 123; 
// 이름이 = 2;
// 에러남

let 접니다 : '대머리' | '솔로';
접니다 = '솔로';

function 함소( a : '가위' | '바위' | '보') : ('가위' | '바위' | '보')[] {
  return [a]
}

함소('가위')

// const 변수의 한계
var 자료 = {
    name : 'kim'
} as const 

function 내꺼함수(a: 'kim') {
}

내꺼함수(자료.name)

type 함수타입 =(a: string) => number;

// let 회원정보1= {
//     name : 'kim',
//     plusOne(a: number) {
//         return a + 1
//     },
//     changeName: ( a : number ) => {}
// }


type Member = {
  name : string,
  age : number,
  plusOne : ( x :number ) => number,
  changeName : () => void
}

// Member.plusOne(1);
// Member.changeName();

// (숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

// - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

// - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

// - 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 

// 물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 


// type cutZeroType = (x : string) => string;

// let cutZero : cutZeroType= function (x) {
//     let result = x.replace(/^0+/, "")
//     return result
// }



// type 함수타입1 = (a: number) => number;

// 함수타입을 지정할 때에는 아래와 같이 써주기
// let 함슈 : 함수타입1 = function () {
//     return 10
// }

// let 회원이다 = {
//     name : 'kimg',
//     plus(a :number) : number{
//         return a + 1
//     },
//     changeAge : (a: number) => {}
// }


let 회원정보 = {
  name : 'kim',
  age : 30,
  plusOne (x:number):number{
    return x + 1
  },
    changeName : ():void => {
    console.log('안녕')
  }
}
회원정보.plusOne(1);
회원정보.changeName();

// function cutZero(x:string):string{
//     if(x === '0'){
//         return  parseFloat(x)
//     }
// }

type cutType = (x : string) => string;

let cutZero : cutType = function(x){
    let result = x.replace(/^0+/, "")
    return result
}

type removeType = (x: string) => number;

let removeDash : removeType = function(x){
    let result = x.replace(/-/g, "")
    return parseFloat(result)
}


let title = document.querySelector('#title');
title.innerHTML = '제목입력'

if(title instanceof Element) {
    title.innerHTML ='반가워'
}


let image1 = document.querySelector("#image")
if ( image1 instanceof HTMLImageElement){
    image1.src = "new.jpg"
}

let 링크 = document.querySelectorAll('.naver');

링크.forEach((a)=>{
  if (a instanceof HTMLAnchorElement){
    a.href = 'https://kakao.com'
  }
})