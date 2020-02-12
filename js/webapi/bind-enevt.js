const btn = document.getElementById('btn1')
btn.addEventListener('click', enevt => {
  console.log('clicked')
})
// ===================================================
// 汎用イベントバンド関数
// 1
function bindEvent (elem, type, fn) {
  elem.addEventListener(type, fn)
}
// 2
function bindEvent1 (elem, type, selector, fn) {
  if (arguments.length <= 3){
    fn = selector
    selector = null
  }
  elem.addEventListener(type, event=>{
    const target = event.target
    if(selector){
      //代理
      if (target.matches(selector)){ //実際のtagとパラメータのtag同じかを見る
        fn.call(target, event) //targetを返すのは40行目のthisに使わせるために
      }
    }else {
      //普通bind
      fn.call(target, event)
    }
  })
}
// タイプ1使用
const a = document.getElementById('link1')
bindEvent(a, 'click', function (event) {
  event.preventDefault() // defaultのイベントをとめる,
  alert('clicked')
})
// タイプ2使用
const div3 = document.getElementById('div3')
bindEvent1(div3, 'click', 'a', function (event) {
  event.preventDefault()
  console.log(this.innerHTML) //ここのthisはdiv3
})

//= ==============================================
// 実例
bindEvent(btn, 'click', event => {
  console.log(event.target) // 事件を呼び出したDom要素
  event.preventDefault() // defaultのイベントをとめる,例えば <a>タグがリンク先に飛ばなくなる
  alert('clicked')
})
// ================================================
// ポップアップ事件の処理
// ポップアップ事件の順番 親要素->Body*Domの順番で上へ
const body = document.body // bodyで事件を受ける
bindEvent(body, 'click', event => {
  console.log('body clicked')
  console.log(event.target)
})

const div2 = document.getElementById('div2') // 事件起きた要素の親要素
bindEvent(div2, 'click', event => {
  console.log('div2 clicked')
  console.log(event.target)
})
// =======================================================
// ポップアップ事件上階層へ行くの阻止
const p1 = document.getElementById('p1')
bindEvent(p1, 'click', event => {
  event.stopPropagation() // 阻止
  console.log('キャンセル')
})

// ========================================================
// イベント代理
// 子要素多すぎの場合、代理でまとめて処理
```
<div id="div3">
  <a href="#">a1</a>
  <a href="#">a2</a>
  <a href="#">a3</a>
  <button>ロード...</button>
</div>  
```
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', event => {
  event.preventDefault()
  const target = event.target
  if (target.nodeName === 'A') {
    alert(target.innerHTML)
  }
})
