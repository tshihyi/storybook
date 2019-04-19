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
            <div>2016</div>
            <div>系統</div>
            <div>分析師</div>
            <div>3年</div>
          </div>
          <div className="timeline-shape">
            <div>2012</div>
            <div>網站</div>
            <div>行銷企劃</div>
            <div>4年</div>
          </div>
          <div className="timeline-shape">
            <div>2008</div>
            <div>軟體</div>
            <div>工程師</div>
            <div>4年</div>
          </div>
          <div className="timeline-shape">
            <div>2007</div>
            <div>碩士畢業</div>
            <div>資訊教育</div>
            <div>研究所</div>
          </div>
        </div>
      </div>
      <div>
        <div className="cv-title">工作技能</div>
        <div className="work-item">
          <li>客戶訪談及需求收集與分析</li>
          <li>系統雛型Prototype繪製(Axure RP)</li>
          <li>資料庫基本設計及語法操作與管理(MS SQL)</li>
          <li>UML圖型繪製(活動圖、類別圖、流程圖)</li>
          <li>系統開發、系統設計、系統需求規格文件撰寫</li>
          <li>政府專案管理經驗(備標、成本評估與分析、期末審查、驗收)</li>
        </div>
      </div>
      <div>
        <div className="cv-title">工作成果</div>
        <div className="work-item">
          <li>首位規畫手機掃描身分證協助農保職災投保業務成功</li>
          <li>成功規畫農保職災保費扣款功能上線</li>
          <li>整合POS消費APP集點/兌點/儲值系統</li>
          <li>連續2年度銷售業績成長15%</li>
        </div>
      </div>
      </div>
    <div>
      <div>
        <div className="cv-title-right">學歷與工作</div>
        <div>2017/12 - 現在</div>
        <div className="work-description">凌誠科技股份有限公司 系統分析師(政府專案)</div>
        <div>2017/02 - 2017/11</div>
        <div className="work-description">宣揚電腦有限公司 系統分析師(消費型APP)</div>
        <div>2016/05 - 2017/02</div>
        <div className="work-description">慶富造船股份有限公司 軟體工程師(Java)</div>
        <div>2012/03 - 2016/05</div>
        <div className="work-description">SeeMii韓國服飾 網路行銷企畫及店長</div>
        <div>2010/02 - 2012/02</div>
        <div className="work-description">神達電腦股份有限公司 網站管理師(C#)</div>
        <div>2009/02 - 2010/02</div>
        <div className="work-description">國立高雄師範大學 專任助理(C++)</div>
        <div>2008/02 - 2009/02</div>
        <div className="work-description">羽冠電腦股份有限公司 軟體工程師(C#)</div>
        <div>2005/09 - 2007/06</div>
        <div className="work-description">國立高雄師範大學 資訊教育研究所</div>
        <div>2001/09 - 2005/06</div>
        <div className="work-description">國立屏東科技大學 資訊管理系(第二名畢業)</div>
      </div>
      <div className="cv-title-right">其他證照</div>
      <div className="work-item">
        <li>電腦軟體應用丙級</li>
        <li>會計事務丙級</li>
        <li>TOEIC 530</li>
      </div>
      <div className="cv-title-right">個人特質</div>
      <div className="work-item">
        <li>注重時間以及工作效率</li>
        <li>喜歡從工作中發現問題並解決問題</li>
      </div>
    </div>
  </div>

export { test as Resume }
