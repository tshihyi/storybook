import React from 'react'
import '../../css/resume.sass'

const jobs = [{
  period: "2019/05 - 現在",
  title: "數據應用工程師(ETL倉儲)",
  company: "中國信託商業銀行"
}, {
  period: "2017/12 - 2019/05",
  title: "系統分析師(政府資訊系統)",
  company: "凌誠科技股份有限公司"
}, {
  period: "2017/02 - 2017/11",
  title: "系統分析師(消費型APP)",
  company: "宣揚電腦有限公司"
}, {
  period: "2016/05 - 2017/02",
  title: "軟體工程師(Java)",
  company: "慶富造船股份有限公司"
}, {
  period: "2012/03 - 2016/05",
  title: "數位社群分析師",
  company: "SeeMii韓國服飾"
}, {
  period: "2010/02 - 2012/02",
  title: "網站管理師(MS SQL)",
  company: "神達電腦股份有限公司"
}, {
  period: "2009/02 - 2010/02",
  title: "專任助理(C++)",
  company: "國立高雄師範大學"
}, {
  period: "2008/02 - 2009/02",
  title: "MES軟體工程師(C#)",
  company: "羽冠電腦股份有限公司"
}]

const Job = ({period, title, company}) => (
  <>
    <div className="work-description">
    <div>{period}</div>
      {title} {company}
    </div>
  </>
)

const Resume = () => (
  <div className="layout">
    <div>
      <div className="cv-title">基本資料</div>
      <div className="info">
        <div>姓名</div>
        <div>杜詩怡</div>
      </div>
      <div className="info">
        <div>📞</div>
        <div>0900-263-385</div>
      </div>
      <div className="info">
        <div>📧</div>
        <div>tshihyi@gmail.com</div>
      </div>
      <div className="info">
        <div>Github</div>
        <a href="https://github.com/tshihyi/" target="_blank">
          <div>https://github.com/tshihyi/</div>
        </a>
      </div>
      <div>
        <div className="cv-title">履歷彙整</div>
        <div className="timeline-year">
          <div className="timeline-shape">
            <div>2019</div>
            <div>數據</div>
            <div>應用工程師</div>
            <div>3年</div>
          </div>
          <div className="timeline-shape">
            <div>2017</div>
            <div>系統</div>
            <div>分析師</div>
            <div>2.5年</div>
          </div>
          <div className="timeline-shape">
            <div>2012</div>
            <div>數位</div>
            <div>社群分析</div>
            <div>4年</div>
          </div>
          <div className="timeline-shape">
            <div>2008</div>
            <div>軟體</div>
            <div>工程師</div>
            <div>4年</div>
          </div>
        </div>
      </div>
      <div>
        <div className="cv-title">工作技能</div>
        <div className="work-item">
          <li>Informatica ETL資料入倉規畫、開發與驗證</li>
          <li>資料導入後資料相依性與正確性驗證</li>
          <li>倉儲資料自動更新與存留機制設計</li>
          <li>異質資料庫資料移轉設計與開發</li>
          <li>業務需求轉SQL邏輯</li>
          <li>資料探勘及數據貼標</li>
          <li>IBM TWS批次排程自動化設計</li>
        </div>
      </div>
      <div>
        <div className="cv-title">工作成果</div>
        <div className="work-item">
          <li>設計30項以上檢核清單確保數據品質減少 5 * 5 工作人日</li>
          <li>
            至今彙整資料庫至少300張以上table的Data Inventory文件建立數據血緣
          </li>
          <li>整合3種連線環境及git bash至VS Code提升工作效率</li>
          <li>3種數據資料源ETL彙整入倉流程規畫與開發</li>
          <li>Hadoop 20億筆歷史資料更新與新增欄位</li>
          <li>整合6種金融帳戶格式產出對應繳費單據</li>
          <li>建立資料庫設計流程及規格文件制度</li>
          <li>連續2年度銷售業績成長15%</li>
        </div>
      </div>
    </div>
    <div>
      <div>
        <div className="cv-title-right">工作經歷</div>
        {jobs.map(({period,title,company}) =>[
          <div>
          <div>{period}</div>
          <div className="work-description">{title} {company}</div>
          </div>
        ])}

        <div className="cv-title-right">教育程度</div>
        <div>2005/09 - 2007/06</div>
        <div className="work-description">國立高雄師範大學 資訊教育研究所</div>
        <div>2001/09 - 2005/06</div>
        <div className="work-description">
          國立屏東科技大學 資訊管理系(第2名畢業)
        </div>
      </div>
      <div className="cv-title-right">擅長工具</div>
      <div className="work-item">
        <li>Python, SQL, Shell scripts</li>
        <li>Hadoop, Teradata, Oracle, MS SQL</li>
        <li>API資料介接</li>
        <li>Spark資料處理</li>
        <li>Git command 版控,CI/CD</li>
      </div>
      <div className="cv-title-right">個人特質</div>
      <div className="work-item">
        <li>喜歡從工作中發現問題並解決問題</li>
        <li>注重工作細節確保工作成果品質</li>
      </div>
    </div>
  </div>
)

export default Resume
