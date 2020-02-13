// ブラウザではクロスドメインを防げるが、<script>はそうはしない。
// 例題1(jquery)
$.ajax({
  url: 'http://localhost:8002/x.json',
  dataType: 'jsonp',
  jsonPCallback: 'callback', //パラメータ名
  success: function (data) {
    console.log(data)
  }
})
