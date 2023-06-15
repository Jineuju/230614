var frame = document.querySelector(".frame")
var articles = frame.querySelectorAll("article")
var opens = frame.querySelectorAll(".open")
var closes = frame.querySelectorAll(".close")
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")
// 원시형, 참조형 자료가 있는데 배열 객체는 참조형 자료
// 그래서 var써도 되고 const도 써도됨

// next, prev를 클릭할 때
next.addEventListener("click", ()=>{
    frame.append(frame.firstElementChild)
})

prev.addEventListener("click", ()=>{
    frame.prepend(frame.lastElementChild)
})

// open, close를 클릭할 때
opens.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        e.target.closest("article").classList.add("on")
        // currentTarget은 addEventListener를 붙인 모든 것을 실행
        // target은 직접 잡아준(직결되는) 요소를 실행(open)



    // hide를 붙이는 코드
    // on이 붙어있지않는 아티클을 어떻게 선택할것인가?
    // on이 붙어있지않다면? 그러면 hide클래스를 붙여달라
    
    // 활성화 되지 않은 article은 모두 hide를 붙여서 안보이게 해야하니
    // 반복문을 써야함

    // on클래스가 없다면 && 모두 hide클래스를 부여
    // ! : 아니라면(false)
    for(let el of articles) !el.classList.contains("on") && el.classList.add("hide")


    // 반복문 안에서 on이 없는 대상을 모두 hide해야함
    // 보통 3항연산자를 이용한 조건문이나 (앞의 조건)&& 앞의 조건이 참인것을 판단해서
    // &&뒤의 내용을 판단하도록합니다. 따라서 조건문처럼 사용할 수 있습니다.
    })

    

})  
// closes.forEach((el, index)=>{
//     el.addEventListener(("click"),()=>{
//         // 클릭이벤트가 발생한 대상에 아티클을 찾아서 on을 지웁니다
//         for(let el of articles){
//             el.classList.remove("on")
//             // 그리고 반복을 돌면서 모든 article의 hide를 지웁니다
//             el.classList.remove("hide")
//         }
        
//     })
// })

closes.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        // 클릭이벤트가 발생한 대상에 아티클을 찾아서 on을 지웁니다
        e.target.closest("article").classList.remove("on")
        // 그리고 반복을 돌면서 모든 article의 hide를 지웁니다
        for(let el of articles){
            el.classList.remove("hide")
        }
    })
})
// 위와 동일