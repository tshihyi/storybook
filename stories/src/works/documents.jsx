import React from 'react'
import '../../css/documents.sass'
import imageFileUC1 from '../../img/04-uc-01.png'

const data = [{
  name: '系統分析文件',
  items: [{
      item: '01-爭審-案件資料',
      link: 'https://drive.google.com/file/d/1wNyg6lT426ObSSoeSqjlh5QcAiUx9b0c/view?usp=sharing'
    }, {
      item: '02-爭審-會議議程管理',
      link: 'https://drive.google.com/open?id=1i5awxGkXzzwkpIm3z9T2LtmX2Ro3-i5E'

    },{
      item: '03-福利-資料比對',
      link: 'https://drive.google.com/open?id=13FQscxZLIwAFWaTJ0XMbqZOinKjK-jn1'
    }, {
      item: '04-福利-實耕者資料管理',
      link: 'https://drive.google.com/open?id=1GS1OEmL7r9UU0IIsSjZtDiDOCd6wbGDM'
    }],
}, {
  name: '教育訓練文件',
  items: [{
      item: '教育訓練',
      link: 'https://drive.google.com/open?id=120-kjeJicILwSpHYGruuxO84b0ASIZtl'
    }]
}, {
  name: '簡報類型文件',
  items: [{
      item: 'E2E自動化測試簡介',
      link: 'https://drive.google.com/open?id=12Apoeaclz3aqzukL8d1r4wAnAVmq7PYc'
    }]
}]

const test = () =>
  <div>
    <div>使用者個案</div>
      <div className="documents docs-layout ">
        <div>
          <a href="https://drive.google.com/file/d/1wNyg6lT426ObSSoeSqjlh5QcAiUx9b0c/view?usp=sharing" target="_blank">
            <img src={imageFileUC1} width="200" height="250" />
            <div>爭審-案件資料</div>
          </a>
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1wNyg6lT426ObSSoeSqjlh5QcAiUx9b0c/view?usp=sharing" target="_blank">
            <img src={imageFileUC1} width="200" height="250" />
            <div>爭審-案件資料</div>
          </a>
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1wNyg6lT426ObSSoeSqjlh5QcAiUx9b0c/view?usp=sharing" target="_blank">
            <img src={imageFileUC1} width="200" height="250" />
            <div>爭審-案件資料</div>
          </a>
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1wNyg6lT426ObSSoeSqjlh5QcAiUx9b0c/view?usp=sharing" target="_blank">
            <img src={imageFileUC1} width="200" height="250" />
            <div>爭審-案件資料</div>
          </a>
        </div>
        <div>
          <a href="https://drive.google.com/file/d/1wNyg6lT426ObSSoeSqjlh5QcAiUx9b0c/view?usp=sharing" target="_blank">
            <img src={imageFileUC1} width="200" height="250" />
            <div>爭審-案件資料</div>
          </a>
        </div>
      </div>
  </div>
export { test as Documents }
