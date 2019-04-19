import React from 'react'
import '../../css/systemdesigndocs.sass'
import imgFishAPI from '../../img/14-fish-api.png'
import imgFwsAPI from '../../img/15-fws-api.png'
import imgActivityDiagram from '../../img/16-activity-digram.png'
import imgUseCaseDiagram from '../../img/17-fws-use-case-diagram.png'
import imgActualFarmerUCDiagram from '../../img/18-actualfarmer-usecase-diagram.png'
import imgEERModel from '../../img/19-db-eer-model.png'
import imgSystemFlowChart from '../../img/20-system-flow-diagram.png'

const data = [{
  item: '1-APP產品API文件',
  link: 'https://drive.google.com/open?id=1WJqVqLtfCqOwCi0J1O5gCNwXjRWAmdye',
  image: imgFishAPI
}, {
  item: '2-功能活動圖',
  link: 'https://drive.google.com/open?id=1jeb6SAGDxaX0GHCxegoUc94tSjnDvDdy',
  image: imgActivityDiagram
}, {
  item: '3-使用者案例圖',
  link: 'https://drive.google.com/open?id=1U71aOl_0bqLXiotCUzFdtit0Nx-XbvZc',
  image: imgUseCaseDiagram
}, {
  item: '4-多人使用者案例圖',
  link: 'https://drive.google.com/open?id=1F10b87hAe-TumCQL7fYg5-or1AjIrOju',
  image: imgActualFarmerUCDiagram
}, {
  item: '5-資料庫資料表關聯圖',
  link: 'https://drive.google.com/open?id=1z3JgY1Ipt5WLg3VpF9nRIbHY4-LkrYAv',
  image: imgEERModel
}, {
  item: '6-系統功能流程圖',
  link: 'https://drive.google.com/open?id=1YBhJwN2SmstCMWMZ99GMOwq3tfOd5nzO',
  image: imgSystemFlowChart
}]

const test = () =>
  <div className="documents">
    <div className="docs-titles">API及DB相關文件</div>
    <div className=" docs-layout">
    {data.map(({item, link, image}) =>
      <div>
        <a href={link} target="_blank">
          <img src={image} />
          <div className="docs-sub-titles">{item}</div>
        </a>
      </div>
    )}
    </div>
  </div>
export { test as SystemDesignDocs }
