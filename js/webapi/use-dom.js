const div1 = document.getElementById("div") //一つの要素
const divList = document.getElementsByTagName("div")//要素リスト(タグ)

const containerList = document.getElementsByClassName('.container') // 要素リスト
const pList = document.querySelectorAll('p') //リスト

// property操作(性能はattributeより少しいい)
const pList = document.querySelectorAll('p')
const p = pList[0]
console.log(p.style.width) // スタイルの取得
p.style.width = "100px" // スタイル修正
console.log(p.className) // classの取得
p.className = 'p1' // class名の修正
//タグの名前を取得 nodeName
console.log(p1.nodeName)// p
// =====================================================================
//attribute(タグの修正)
const pList = document.querySelectorAll('p')
const p = pList[0]
p.getAttribute('data-name')
p.setAttribute('data-name', 'imooc')
p.getAttribute('style')
p.setAttribute('style', 'font-size:30px')

// DOMの挿入
const div1 = document.getElementById('div1')
//挿入
const p1 = document.createElement('p')
p1.innerHTML = 'this is p1'
div1.appendChild(p1)
//=========================================================================
//DOMの移動
const p1 = document.getElementById('p1')
div2.appendChild(p1) //p1を別の所へ移動

//=========================================================================
//親要素の特定
console.log(p1.parentNode)// 親要素取得

//=========================================================================
//子要素のListを取得
const div1ChildNodes = div1.childNodes

//=========================================================================
//DoMのサーチをchche
// nochche
for(let=0; i<document.getElementsByTagName('p').length;i++){
  // ループごとに、lengthの計算を繰り返す、Domのサーチが頻繫に行われる
}
//chche
const pList = document.getElementsByTagName('p')
const length = pList.length
for(let i = 0;i<length;i++){
  //lengthのchech、Domのサーチ
}
//=========================================================================
// 頻繫なDom操作を一回にまとめる(子要素の挿入)
const listNode = document.getElementById('list')
// Document作る、でもDoMに入れない
const frag = document.createDocumentFragment();
// Documentに挿入
for(let x=0;x<10;x++){
  const li = document.createElement("li")
  li.innerHTML = "List item" + x
  frag.appendChild(li)
}
// DOMに入れる
listNode.appendChild(frag)
