import React from 'react'
import '../../css/documents.sass'
import imgTrello from '../../img/21-trello.png'
import imgAsana from '../../img/22-asana-workboard.png'
import imgTFS from '../../img/23-tfs.png'
import imgWorkStatistics from '../../img/24-iteration-work-statistics.png'

const boards = [{
  item: '1-Trello工作管理看板',
  link: 'https://trello.com/b/3cgMbtzq',
  image: imgTrello
}, {
  item: '2-Asana工作管理看板',
  link: 'https://drive.google.com/open?id=1QChMdjH2lJqPUEXkJGOj1lEtmXChiwAZ',
  image: imgAsana
}, {
  item: '3-TFS工作管理看板',
  link: 'https://drive.google.com/open?id=1hTL814tuFbxpZPuvKKhV5ciRmrYHYsdA',
  image: imgTFS
}, {
  item: '4-Iteration工作量統計',
  link: 'https://drive.google.com/open?id=1WKGcvcFcNqXdMWa9oq3obnt1C6SUzFG2',
  image: imgWorkStatistics
}]

const docs =  [{
  item: '1-專案WBS',
  link: '',
  image: imgTrello
}, {
  item: '2-專案控制表',
  link: '',
  image: imgTrello
}, {
  item: '3-成本分析表',
  link: '',
  image: imgTrello
}]

const data = [{
  name: '開發工作管理看板',
  items: boards,
}, {
  name: '專案控制管理文件',
  items: docs
}]

const test = () =>
  <div className="documents">
    <div className="docs-titles">進度管理看板</div>
    <div className=" docs-layout">
    {boards.map(({item, link, image}) =>
      <div>
        <a href={link} target="_blank">
          <img src={image} />
          <div className="docs-sub-titles">{item}</div>
        </a>
      </div>
    )}
    </div>
    <div className="docs-titles">專案管理文件</div>
    <div className="docs-layout ">
    {docs.map(({item, link,image}) =>
      <div>
        <a href={link} target="_blank">
          <img src={image} />
          <div className="docs-sub-titles">{item}</div>
        </a>
      </div>
    )}
    </div>
  </div>
export { test as ProjectManage }
