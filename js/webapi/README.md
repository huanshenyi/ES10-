## ページのロードライフサイクル

DOMContentLoaded は最速 -> imgのload->windowのload

```javascript
const img1 = document.getElementById('img1')
img1.onload = ()=>{
  console.log('img loaded')
}

window.addEventListener('load', ()=>{
  console.log('window loaded')
})

document.addEventListener('DOMContentLoaded', ()=>{
  console.log('dom content loaded')
})
```
