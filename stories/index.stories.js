import React from 'react'
import ReactModal from 'react-modal'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'
import { Timeline } from './src/fws/timeline.jsx'
import { Register } from './src/fws/register.jsx'
import { News } from './src/fws/news.jsx'
import { Resume } from './src/resume/resume.jsx'
import { IDList } from './src/openfile/idlist.jsx'


storiesOf("工作簡歷", module)
  .add("履歷簡表", () => <Resume />)
  .add("履歷投影片", () => <Resume />)
storiesOf("系統UI", module)
  .add("農審辦法", () => <Timeline />)
  .add("註冊", () => <Register />)
  .add("最新公告", () => <News />)
  .add("檔案處理", () => <IDList />)
storiesOf("系統需求文件", module)
storiesOf("系統設計文件", module)
storiesOf("資料庫設計文件", module)
storiesOf("系統教育訓練", module)
storiesOf("專案管理文件", module)
storiesOf("過往其他相關", module)