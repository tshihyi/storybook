import React from 'react'
import '../../css/documents.sass'
import imgPojectPlanning from '../../img/28-project-planning.png'
import imgSA from '../../img/29-sa.png'
import imgSD from '../../img/30-sd.png'
import imgRFP from '../../img/31-rfp.png'
import imgFinalReport from '../../img/32-final-report.png'

const docs = [{
  item: '1-工作計畫書',
  link: 'https://drive.google.com/open?id=1lHwqxYNwkiNNrxV97dPVR2F-YDbsML74',
  image: imgPojectPlanning
}, {
  item: '2-系統分析規格書',
  link: 'https://drive.google.com/open?id=12SI3oa2GRVDizD3MTWg2attBWeG_ri6M',
  image: imgSA
}, {
  item: '3-系統設計規格書',
  link: 'https://drive.google.com/open?id=1Guib1-lUtt479Qfflp7bqRs21F4Jnh0T',
  image: imgSD
}, {
  item: '4-需求規格書',
  link: 'https://drive.google.com/open?id=1HX2fkADy6hyMLR7fEWzK7cZ7n5sIJozc',
  image: imgRFP
}, {
  item: '5-期末報告',
  link: 'https://drive.google.com/open?id=1BDxTTV1cY07JZNOg8MBOgTIRBlZx8yJk',
  image: imgFinalReport
}]

const data = [{
  name: '開發工作管理看板',
  items: docs
}]

const test = () =>
  <div className="documents">
    <div className=" docs-layout">
    {docs.map(({item, link, image}) =>
      <div>
        <a href={link} target="_blank">
          <img src={image} />
          <div className="docs-sub-titles">{item}</div>
        </a>
      </div>
    )}
    </div>
  </div>
export { test as GovermentDocs }
