import React from 'react'
import '../../css/documents.sass'
import imgFwsOAIInsure from '../../img/04-fws-oai-insure.png'
import imgFwsDataCompare from '../../img/05-fws-data-compare.png'
import imgFIDRCase from '../../img/06-fidr-case.png'
import imgFIDRMeeting from '../../img/07-fidr-meeting.png'
import imgEducationPPT from '../../img/10-education-sys-operation.png'
import imgE2ETestingPPT from '../../img/11-e2e-automatic-testing.png'
import imgAppFunctionPPT from '../../img/12-member-app.png'
import imgAppAnalyzePPT from '../../img/13-member-product-analyze.png'

const specs = [{
  item: '1-1-福利-職保批次投保',
  link: 'https://drive.google.com/open?id=1zdKKn-0g2Y1jVDF0h6REtS9Hke6NbFW9',
  image: imgFwsOAIInsure
}, {
  item: '1-2-福利-資料比對',
  link: 'https://drive.google.com/open?id=13FQscxZLIwAFWaTJ0XMbqZOinKjK-jn1',
  image: imgFwsDataCompare
}, {
  item: '2-1-爭審-案件資料',
  link: 'https://drive.google.com/file/d/1wNyg6lT426ObSSoeSqjlh5QcAiUx9b0c/view?usp=sharing',
  image: imgFIDRCase
}, {
  item: '2-2-爭審-會議議程管理',
  link: 'https://drive.google.com/open?id=1i5awxGkXzzwkpIm3z9T2LtmX2Ro3-i5E',
  image: imgFIDRMeeting
}]

const ppts =  [{
  item: '1-1-App-產品功能介紹',
  link: 'https://drive.google.com/open?id=13gsullBIDAzyPRVWidosCju8P3UuqDF0',
  image: imgAppFunctionPPT
}, {
  item: '1-2-App-競品分析簡報',
  link: 'https://drive.google.com/open?id=1qlhx4x_BsN6bdNPmzWLmkoySO4NM6XhM',
  image: imgAppAnalyzePPT
}, {
  item: '1-3-福利-保費功能教育訓練',
  link: 'https://drive.google.com/file/d/1wNyg6lT426ObSSoeSqjlh5QcAiUx9b0c/view?usp=sharing',
  image: imgEducationPPT
}, {
  item: '1-4-福利-E2E自動化測試簡介',
  link: 'https://drive.google.com/open?id=12Apoeaclz3aqzukL8d1r4wAnAVmq7PYc',
  image: imgE2ETestingPPT
}]

const data = [{
  name: '使用者個案文件',
  items: specs,
}, {
  name: '教育訓練文件',
  items: ppts
}]

const Documents = () =>
  <div className="documents">
    <div className="docs-titles">使用者個案文件</div>
    <div className=" docs-layout">
    {specs.map(({item, link, image}) =>
      <div>
        <a href={link} target="_blank">
          <img src={image} />
          <div className="docs-sub-titles">{item}</div>
        </a>
      </div>
    )}
    </div>
    <div className="docs-titles">投影片簡報文件</div>
    <div className="docs-layout ">
    {ppts.map(({item, link,image}) =>
      <div>
        <a href={link} target="_blank">
          <img src={image} />
          <div className="docs-sub-titles">{item}</div>
        </a>
      </div>
    )}
    </div>
  </div>
export default Documents
