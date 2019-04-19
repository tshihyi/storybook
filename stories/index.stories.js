import React from 'react'
import ReactModal from 'react-modal'
import { configureAction } from '@storybook/addon-actions'
import { storiesOf, addParameters } from '@storybook/react'
import { Timeline } from './src/fws/timeline.jsx'
import { Register } from './src/fws/register.jsx'
import { News } from './src/fws/news.jsx'
import { Resume } from './src/resume/resume.jsx'
import { IDList } from './src/openfile/idlist.jsx'
import { Documents } from './src/works/documents.jsx'
import { Prototypes } from './src/works/prototypes.jsx'
import { SystemDesignDocs } from './src/works/systemdesigndocs.jsx'
import { ProjectManage } from './src/works/projectmanage.jsx'


storiesOf("工作簡歷", module)
  .add("履歷簡表", () => <Resume />)
storiesOf("SA系統分析/系統分析文件", module)
  .add("系統分析文件", ()=><Documents />)
storiesOf("SA系統分析/系統設計文件", module)
  .add("系統設計文件", ()=><SystemDesignDocs />)
storiesOf("SA系統分析/系統雛型", module)
  .add("系統雛型彙整", ()=><Prototypes />)
storiesOf("PM專案管理", module)
  .add("工作進度管理", ()=><ProjectManage />)
  .add("專案交付文件", ()=><Documents />)
storiesOf("其他相關", module)
  .add("農審辦法", () => <Timeline />)
  .add("註冊", () => <Register />)
  .add("最新公告", () => <News />)
  .add("檔案處理", () => <IDList />)
