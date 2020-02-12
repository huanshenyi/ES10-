//=======================================================
// xhr.readyState
/**
 * 0 send()実行前
 * 1 send()を呼び出す、リクエスト送信
 * 2 send()終わり
 * 3　リスポンス解析
 * 4 解析完成
 */

// ======================================================
// GET()
const xhr = new XMLHttpRequest()
xhr.open('GET', '/data/test.json', true) //falseの場合同期処理
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText)
    } else {
      console.log('他の何か')
    }
  }
}
xhr.send(null)

// =========================================================
// POST()
const xhr = new XMLHttpRequest()
xhr.open('POST', '/login', true)
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText)
    } else {
      console.log('他の何か')
    }
  }
}
const postData = {
  userName : 'nanika',
  passWord: 'pw'
}
xhr.send(JSON.stringify(postData))
