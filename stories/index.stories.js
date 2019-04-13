import React from 'react'
import ReactModal from 'react-modal'
import { configureAction } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions/register';
import { link } from '@storybook/addon-links/register';
import { Timeline } from './src/fws/timeline.jsx'
import { Register } from './src/fws/register.jsx'
import { News } from './src/fws/news.jsx'
import { Resume } from './src/resume/resume.jsx'
import { Documents } from './src/works/documents.jsx'
import { IDList } from './src/openfile/idlist.jsx'


storiesOf("工作簡歷", module)
  .add("履歷簡表", () => <Resume />)
storiesOf("SA系統分析/分析文件", module)
  .add("系統分析文件", ()=><Documents />)
storiesOf("SA系統分析/系統雛型", module)
  .add("系統雛型彙整", ()=><Documents />)
storiesOf("PM專案管理", module)
  .add("WBS切割", ()=><Documents />)
  .add("服務建議書", ()=><Documents />)
  .add("工作說明書", ()=><Documents />)
  .add("成本分析", ()=><Documents />)
  .add("專案控制表", ()=><Documents />)
storiesOf("其他相關", module)
  .add("農審辦法", () => <Timeline />)
  .add("註冊", () => <Register />)
  .add("最新公告", () => <News />)
  .add("檔案處理", () => <IDList />)
