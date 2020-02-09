// ==========================================================
// navigator ブラウザの要素
const ua = navigator.userAgent
const isChrome = ua.indexOf('Chrome')
console.log(isChrome)

// ============================================================
// screen    スクリーン 例: 幅、高さとか
console.log(screen.width)
console.log(screen.height)

// ==============================================================
// location  urlデータ
location.href     // url取得
location.reload() // リロード
location.protocol // "https:" || "http"
location.host
location.search   // urlに含むプロパティーを取得
location.hash     // #以降の内容を取得
location.pathname // host以降のpathを取得
//=============================================================
// history   前に戻り、先に進
history.back()
history.forward() //進
