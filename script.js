let current = 0;

let name = "";

let score = {

安心:0,
害怕失去:0,
逞強:0,
慢慢相信:0

};


const questions=[


{
q:"另一半一天沒有回訊息，你第一個反應？",
a:[
["是不是發生什麼事？","安心"],
["是不是不愛我了？","害怕失去"]
]
},


{
q:"另一半說今天想自己休息。",
a:[
["每個人都需要自己的空間","安心"],
["是不是開始不想陪我","害怕失去"]
]
},


{
q:"心情不好時，你通常？",
a:[
["直接告訴對方","安心"],
["希望對方自己發現","逞強"]
]
},


{
q:"發生爭執時。",
a:[
["希望一起討論","安心"],
["先冷靜，不想說話","逞強"]
]
},


{
q:"對方忘記重要日子。",
a:[
["可以理解","安心"],
["會覺得被忽略","害怕失去"]
]
},


{
q:"另一半最近工作很忙。",
a:[
["願意體諒","安心"],
["覺得自己不重要","害怕失去"]
]
},


{
q:"你比較希望另一半。",
a:[
["一起解決問題","安心"],
["先安慰我的情緒","害怕失去"]
]
},


{
q:"別人問你怎麼了。",
a:[
["說出自己的感受","安心"],
["說沒事","逞強"]
]
},


{
q:"你比較相信。",
a:[
["感情需要一起經營","慢慢相信"],
["愛了就不用改變","逞強"]
]
},


{
q:"你會常常確認訊息嗎？",
a:[
["不太會","慢慢相信"],
["會一直確認","害怕失去"]
]
},


{
q:"你比較容易。",
a:[
["表達需求","安心"],
["自己消化","逞強"]
]
},


{
q:"另一半心情不好。",
a:[
["詢問需要什麼","安心"],
["擔心是不是自己錯","害怕失去"]
]
},


{
q:"你相信感情。",
a:[
["可以慢慢建立","慢慢相信"],
["需要馬上確定","害怕失去"]
]
},


{
q:"你害怕。",
a:[
["關係失去平衡","逞強"],
["被離開","害怕失去"]
]
},


{
q:"重新開始感情。",
a:[
["願意慢慢建立信任","慢慢相信"],
["害怕再次受傷","害怕失去"]
]
}

];



function startQuiz(){

document.querySelector(".hero").style.display="none";

document.querySelector("#quiz").classList.remove("hide");

}



function begin(){

name=document.getElementById("username").value || "你";

document.getElementById("welcome").classList.add("hide");

document.getElementById("questionArea").classList.remove("hide");

showQuestion();

}



function showQuestion(){

let q=questions[current];

document.getElementById("question").innerHTML=q.q;


let html="";

q.a.forEach(item=>{

html+=`

<div class="answer"
onclick="choose('${item[1]}')">

${item[0]}

</div>

`;

});


document.getElementById("answers").innerHTML=html;


document.getElementById("progressText").innerHTML=

`第 ${current+1} / 15 題`;


document.getElementById("progressBar").style.width=

((current+1)/15*100)+"%";


}



function choose(type){

score[type]++;

nextQuestion();

}



function nextQuestion(){

if(current<14){

current++;

showQuestion();

}

else{

showResult();

}

}



function previousQuestion(){

if(current>0){

current--;

showQuestion();

}

}



function showResult(){

document.getElementById("questionArea").classList.add("hide");

document.getElementById("result").classList.remove("hide");


let result=
Object.keys(score)
.reduce((a,b)=>score[a]>score[b]?a:b);



let content={


安心:
`
🌿 安心陪伴型

你的安全感來自互相信任與穩定陪伴。

你願意一起面對問題，也容易成為讓另一半安心的人。

可能的盲點：

有時因為相信感情很穩定，而忽略對方真正的需求，也不太習慣主動說出自己的感受。

`,

害怕失去:
`
🌙 害怕失去型

你的安全感來自被確認與被回應。

你很重視感情，也願意付出。

可能容易因為對方的小變化，而開始反覆猜測。
`,


逞強:
`
🍃 習慣逞強型

你的安全感來自自己掌控。

你很獨立，但有時會忘記讓對方知道你的需要。
`,


慢慢相信:
`
✨ 慢慢相信型

你的安全感來自時間累積。

你重視承諾，也相信真正的關係需要慢慢建立。
`

};


document.getElementById("resultTitle").innerHTML=

`${name}，你的愛情安全感類型是：`;


document.getElementById("resultText").innerHTML=

content[result];


}