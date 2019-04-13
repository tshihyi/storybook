import React from 'react'
import '../../css/resume.sass'

const test = () =>
  <div className="layout">
    <div>
      <div className="cv-title">基本資料</div>
      <div className="info">
        <div>姓名</div>
        <div>杜詩怡</div>
      </div>
      <div className="info">
        <div>生日</div>
        <div>1983/08/11</div>
      </div>
      <div className="info">
        <div>電話</div>
        <div>0900-263-385</div>
      </div>
      <div className="info">
        <div>信箱</div>
        <div>tshihyi@gmail.com</div>
      </div>
      <div>
        <div className="cv-title">履歷彙整</div>
        <div className="timeline-year">
          <div className="timeline-shape">
            <div>2007</div>
            <div>碩士畢業</div>
            <div>學校實習</div>
            <div>0.5年</div>
          </div>
          <div className="timeline-shape">
            <div>2008</div>
            <div>軟體</div>
            <div>工程師</div>
            <div>4年</div>
          </div>
          <div className="timeline-shape">
            <div>2012</div>
            <div>網站</div>
            <div>管理師</div>
            <div>5年</div>
          </div>
          <div className="timeline-shape">
            <div>2017</div>
            <div>系統</div>
            <div>分析師</div>
            <div>2年</div>
          </div>
        </div>
      </div>
      <div>
        <div className="cv-title">工作技能</div>
        <div className="work-item">
          <li>系統雛型Wireframe繪製(Axure RP)</li>
          <li>資料庫基本語法操作與管理</li>
          <li>UML圖型繪製(活動圖、類別圖、流程圖)</li>
          <li>客戶需求收集與分析</li>
          <li>系統開發規格文件辜寫</li>
          <li>政府專案管理(備標、成本評估與分析、WBS建立、工作追蹤、期末審查、驗收)</li>
        </div>
      </div>
      <div>
        <div className="cv-title">工作成果</div>
        <div className="work-item">
          <li>建立農保/農保職災爭審議業務處理系統</li>
          <li>完成農民職災保險保費功能扣費處理系統</li>
          <li>整合POS消費APP集點/兌點/儲值系統</li>
        </div>
      </div>
      </div>
    <div>
      <div>
        <div className="cv-title-right">工作經驗</div>
        <div>2017/12 - 現在</div>
        <div>2016/05 - 2017/12</div>
        <div>2012/02 - 2016/05</div>
        <div>2012/02 - 2016/05</div>
        <div>2012/02 - 2016/05</div>
        <div>2012/02 - 2016/05</div>
      </div>
      <div className="cv-title-right">擅長技能</div>
      <div className="work-item">
        <li>建立農保/農保職災爭審議業務處理系統</li>
        <li>完成農民職災保險保費功能扣費處理系統</li>
        <li>整合POS消費APP集點/兌點/儲值系統</li>
      </div>

    </div>

  </div>

export { test as Resume }
