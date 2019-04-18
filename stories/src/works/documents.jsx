import React from 'react'
import '../../css/documents.sass'
import imageFileUC5 from '../../img/05-fws-data-compare.png'
import imageFileUC6 from '../../img/06-fidr-case.png'
import imageFileUC7 from '../../img/07-fidr-meeting.png'
import imageFileUC10 from '../../img/10-education-sys-operation.png'
import imageFileUC11 from '../../img/11-e2e-automatic-testing.png'





const data = [{
  name: '使用者個案文件',
  items: [{
      item: '1-1-福利-職保批次投保',
      link: ''
    }, {
      item: '1-2-福利-資料比對',
      link: 'https://drive.google.com/open?id=13FQscxZLIwAFWaTJ0XMbqZOinKjK-jn1'
    }, {
      item: '2-1-爭審-案件資料',
      link: 'https://drive.google.com/file/d/1wNyg6lT426ObSSoeSqjlh5QcAiUx9b0c/view?usp=sharing'
    }, {
      item: '2-1-爭審-會議議程管理',
      link: 'https://drive.google.com/open?id=1i5awxGkXzzwkpIm3z9T2LtmX2Ro3-i5E'
    }],
}, {
  name: '教育訓練文件',
  items: [{
      item: '1-3-福利-保費功能教育訓練',
      link: 'https://drive.google.com/open?id=120-kjeJicILwSpHYGruuxO84b0ASIZtl'
    }]
}, {
  name: '簡報類型文件',
  items: [{
      item: '1-4-福利-E2E自動化測試簡介',
      link: 'https://drive.google.com/open?id=12Apoeaclz3aqzukL8d1r4wAnAVmq7PYc'
    }]
}]

const test = () =>
  <div>
    <div className="docs-titles">使用者個案文件</div>
    <div className="documents docs-layout">
      <div>
        <a href="" target="_blank">
          <img src={imageFileUC5} />
          <div className="docs-sub-titles">1-1-福利-職保批次投保</div>
        </a>
      </div>
      <div>
        <a href="https://drive.google.com/open?id=13FQscxZLIwAFWaTJ0XMbqZOinKjK-jn1" target="_blank">
          <img src={imageFileUC5} />
          <div className="docs-sub-titles">1-2-福利-資料比對</div>
        </a>
      </div>
      <div>
        <a href="https://drive.google.com/file/d/1wNyg6lT426ObSSoeSqjlh5QcAiUx9b0c/view?usp=sharing" target="_blank">
          <img src={imageFileUC6} />
          <div className="docs-sub-titles">2-1-爭審-案件資料</div>
        </a>
      </div>
      <div>
        <a href="https://drive.google.com/open?id=1i5awxGkXzzwkpIm3z9T2LtmX2Ro3-i5E" target="_blank">
          <img src={imageFileUC7} />
          <div className="docs-sub-titles">2-1-爭審-會議議程管理</div>
        </a>
      </div>
    </div>
    <div className="docs-titles">投影片簡報文件</div>
    <div className="documents docs-layout ">
        <div>
          <a href="https://drive.google.com/file/d/1wNyg6lT426ObSSoeSqjlh5QcAiUx9b0c/view?usp=sharing" target="_blank">
            <img src={imageFileUC10} />
            <div className="docs-sub-titles">1-3-福利-保費功能教育訓練</div>
          </a>
        </div>
        <div className="img2">
          <a href="https://drive.google.com/open?id=12Apoeaclz3aqzukL8d1r4wAnAVmq7PYc" target="_blank">
            <img src={imageFileUC11} />
            <div className="docs-sub-titles">1-4-福利-E2E自動化測試簡介</div>
          </a>
        </div>
      </div>
  </div>
export { test as Documents }
