import React from 'react'
import '../../css/file.sass'

const download = content => {
  const link = document.createElement('a')
  link.href = URL.createObjectURL(new Blob([content], {
    type: 'text/plain'
  }))
  link.download = 'result'
  link.click()
}

const read = e => {
  const reader = new FileReader()
  reader.onload = () => {
    const id = reader.result.split('\n').map(it => it.split(',')[3])
    console.log(id.join('\n'))
    download(id.join('\n'))
  }
  reader.readAsText(e.target.files[0])
}


const IDList = () =>
<div>
  <label for="inputId" className="open-file">開啟檔案</label>
  <input type="text" onInput={it => console.log(it.target.value)} />
  <input id="inputId" type="file" onInput={read}/>
</div>

export default IDList
