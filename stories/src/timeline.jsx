import React from 'react'

const data = [{
  date: '77/11/15',
  title: '老會員',
  content: `1. 77/11/15(含)前加入農會 或 104/12/31(含)加入農保，若持同筆土地加保人只有一人，則土地面積不受限制。
2. 若持同筆土地加保人>1，則土地面積依資格別計算。`
}, {
  date: '78/06/30',
  ref: `a.(78)農輔字第8129081號令
b.(78)臺內社字第 709579號令`,
  title: '頒布全文11條',
  content: `1. 自耕農：以本人、配偶或同戶直系血親所有農地，平均每人0.1公頃 = 1000 平方公尺。
2. 佃   農：承租耕地面積0.2公頃以上 = 2000 平方公尺且從事農業生產連續經營滿1年。
(1) 新加「農保」或「健保」，須進行「初次現勘」作業。
(2)「土地持有日期」未滿1年者，須進行「二次現勘」作業。
(3)「農保」加入滿6個月，須進行「二次現勘」作業。
3. 雇   農：受雇於自耕農或佃農，農地面積滿0.5公頃 = 5000平方公尺。
4. 無農業以外之專任職業者。`
}, {
  date: '78/12/30',
  ref: `a.(78)農輔字第8155963A號令
b.(78)臺內社字第763421號令 `,
  title: '修正發布第3條文',
  content: '1. 增列自耕農之「翁姑、媳婦」，亦可加入農保'
}, {
  date: '80/05/30',
  ref: `a.(80)農輔字第0060265A號令
b.(80)臺內社字第921234號令`,
  title: `修正發布3、4、6、9條文、增訂9-1條文`,
  content: '雇農加保，均需提交「薪資證明」。'
}, {
  date: '85/05/30',
  ref: `a.(85)農輔字第5060222A號令
b.(85)臺內社字第8577404號令`,
  title: '修正發布名稱及全文9條（原名稱：從事農業工作農民認定標準及資格審查辦法）',
  content: `(1)刪除(非)會員配偶，無土地持有面積 = 0。
(2)85/05/30(含)前以「非會員配偶」身份投保，當事人土地持有面積可以=0，僅檢查所依附的會員土地面積；此後，以「非會員配偶」身份投保，土地持有面積必須依身分別計算。`
}, {
  date: '90/05/09',
  ref: `a.(90)農輔字第900050402號令
b.(90)臺內社字第9015488號令`,
  title: '修正發布第2條文',
  content: `(1)「委託經營」修正為「耕地租賃」
(2)刪除農會會員之雇農加保絛件`
}, {
  date: '92/06/12',
  ref: `a.農輔字第0920050531號令
b.臺內社字第0920021644號令`,
  title: '修正發布第2～4、6～8條文；增訂第9、10條文；原第9條文遞改為第11條文',
  content: `1. 自有耕地者：林地面積：0.2公頃 = 2000 平方公尺；其餘農地面積：0.1公頃 = 1000 平方公尺。
2. 承租農地者：
(1) 375減租用地、其他農地：0.2公頃 = 2000 平方公尺。
(2) 林地：0.4公頃 = 4000 平方公尺。
`
}, {
  date: '92/08/29',
  ref: `a.農輔字第0920050817號令
b.臺內社字第0920064845號令`,
  title: '修正發布第8條文；增訂第11條文；原第11條文遞改為第12條文',
  content: ``
}, {
  date: '92/12/17',
  ref: `a.農輔字第0920050817號令
b.臺內社字第0920064845號令`,
  title: '修正發布第11條文；增訂第12條文；原第12條文遞改為第13條文',
  content: `1. 658: 92/12/17(含)前加入農保滿8年，且年滿65歲(含)以上者，本人投保之土地面積不受限制。`
}, {
  date: '99/1/21',
  ref: `a.農輔字第 0980051405 號令
b.台內社字第 0980241922 號令`,
  title: '修正發布第 1、2 條文；並增訂第 12-1 條文',
  content: `1. 97/11/27(含)前，參加勞保者，可繼續參加農保，且可領取農暇期間之餘勞工保險老年給付。
2. 勞農重複不可超逾90工作天(農暇之餘勞務工作)。`
}, {
  date: '102/11/07',
  ref: `a.(78)農輔字第8129081號令
b.(78)臺內社字第 709579號令`,
  title: '修正發布全文13條；並自發布日施行',
  content: `1. 新加「農保」，須辦理「現地勘查」。`
}, {
  date: '103/12/25',
  ref: `a.(78)農輔字第8129081號令
  b.(78)臺內社字第 709579號令`,
  title: '修正發布第2、3、6、8、10、12條條文',
  content: `1. 滿65歲者，適用658；未滿65歲者，適用6515。
  2. 於95/12/25日(含)投保者，加保年資滿8年。`
}, {
  date: '104/08/20',
  ref: ``,
  title: '第一階段補正作業',
  content: `1. 補正期間：104/08/20 ~ 105/03/19
2. 補正原因：
(1) 戶籍異動
(2) 死亡登記
(3) 住址變更
(4) 遷出地與投保農會不符
(5) 遷出農會組織區域之農保清單
(6) 644清查
(7) 勞農重複
(8) 長期旅居國外
(9) 入獄服刑
(10) 內部清查
(11) 具農業以外專任職業`
}, {
  date: '104/09/15',
  ref: `a.農輔字第1040022832號令
  b.台內團字第1040065199號令`,
  title: '修正發布第2、3、6、8、10、12條文',
  content: `1. 刪除非會員「同戶」限制
  2. 所持加保土地，因都更編定為「公共設施保留地」且未依都市計畫法辦理前，應持相關文件，辦理現勘得繼續加保。`
}, {
  date: '105/06/24',
  ref: `a.(78)農輔字第8129081號令
  b.(78)臺內社字第 709579號令`,
  title: '修正發布第3、13條條文；並增訂第2-1~2-4條條文',
  content: '1. 6515：年滿65歲且加入農保滿15年，享有本人投保土地面積不受限制之優惠。'
}, {
  date: '106/07/24',
  ref: ``,
  title: '第二階段補正作業',
  content: `1. 補正期間：106/07/24 ~ 106/11/24
2. 補正原因：
(1) 戶籍異動
(2) 死亡登記
(3) 住址變更
(4) 遷出地與投保農會不符
(5) 遷出農會組織區域之農保清單
(6) 644清查
(7) 勞農重複
(8) 長期旅居國外
(9) 入獄服刑
(10) 內部清查
(11) 具農業以外專任職業
`
}, {
  date: '107/03/14',
  ref: `a.農輔字第1070022209號令
b.台內團字第1070015415號令`,
  title: '修正發布第2、3、8條條文及第6條附件二',
  content:`1.增加實耕者、蜂農加入農保。

2.實耕者: 無書面租約之實際從農工作者。

3.蜂農: 18~45歲之養蜂農民。

4.實耕者   現勘單位：改良場；
蜂農      現勘單位:鄉鎮市公所；
一般農民  現勘單位：農會。

5.每一年或定期換發資格文件。`
}]

const topic = [{
  topic: '農保審查辦法'
}]

const EventDetail = ({values}) =>
<div className="detail">
  <div className="date">{values.date}</div>
  <label className="box">
    <div className="title">{values.title}</div>
    <input type="checkbox" name="main" defaultChecked />
    <div className="ref">{values.ref}</div>
    <div className="content">{values.content}</div>
  </label>
</div>

const test = () =>
  <div id="top" className="topic">
  <a target="_blank" href="http://bit.ly/2H2CZrk">{topic[0].topic}</a>
    <div className="timeline">
      {data.map((values, index) =>
        <div className="event active">
          <div className="line"></div>
          <div className="item"></div>
          <EventDetail values={values} />
        </div>
      )}
    </div>
    <div className="gotop"><a href="#top">⬆</a></div>
  </div>

export { test as Timeline }
