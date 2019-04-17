import React from 'react'
import '../../css/documents.sass'

const data = [{
  name: '使用者案例',
  items: [{
      item: '案件資料',
      link: 'https://drive.google.com/file/d/1wNyg6lT426ObSSoeSqjlh5QcAiUx9b0c/view?usp=sharing'
    }, {
      item: '資料比對',
      link: 'https://drive.google.com/open?id=13FQscxZLIwAFWaTJ0XMbqZOinKjK-jn1'
    },{
      item: '實耕者資料管理',
      link: 'https://drive.google.com/open?id=1GS1OEmL7r9UU0IIsSjZtDiDOCd6wbGDM'
    }, {
      item: '會議議程管理',
      link: 'https://drive.google.com/open?id=1i5awxGkXzzwkpIm3z9T2LtmX2Ro3-i5E'
    }],
}, {
  name: '教育訓練',
  items: [{
      item: '教育訓練',
      link: 'https://drive.google.com/open?id=120-kjeJicILwSpHYGruuxO84b0ASIZtl'
    }]
}, {
  name: '自動化測試',
  items: [{
      item: 'E2E自動化測試簡介',
      link: 'https://drive.google.com/open?id=12Apoeaclz3aqzukL8d1r4wAnAVmq7PYc'
    }]
}]

const test = () =>
  <div className="documents layout">
    <div>
      {data.map(({name, items}) =>
        <div key={name}>
          <div className="doc-title">{name}</div>
            {items.map(({item, link}) =>
            <div className="work-item" key={link}>
              <li><a target="_blank" href={link}>{item}</a></li>
            </div>
            )}
        </div>
      )}
    </div>
  </div>
export { test as Documents }
