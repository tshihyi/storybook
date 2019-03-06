import React from 'react'
import '../../css/news.sass'


const data = [{
  date: '108/02/21',
  title: '2/26(二)17:00-18:00 系統更新',
  content: `2月26日(四)17:00-18:00 進行系統維護更新作業，本次異動內容說明如下:
  1.僅加健保審查表內容調整，養蜂及實際耕作者書面審查欄位刪除「農保保險人30日內核發之投保證明」
  2.職保保費產生時間差問題處理
  3.職保審查表表頭(鎮\市\區)顯示調整
  執行期間將有中斷服務的情況，敬請見諒，謝謝。`
}]

const test = () =>
  <div className = "container">
    <div className = "title">最新公告</div>
    <div className = "news">
      <div>公告日期</div><div id="newContet">{data[0].date}</div>
    </div>
    <div className = "news">
      <div>標題</div><div id="newContet">{data[0].title}</div>
    </div>
    <div className = "news">
      <div>內容</div><div id="newContet">{data[0].content}</div>
    </div>
  <div>
  <div className = "action">
    <button>今日不再顯示</button>
    <button>以後不再顯示</button>
  </div>

  </div>
</div>

export { test as News }
