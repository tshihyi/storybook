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
import { Documents } from './src/works/documents.jsx'
import { IDList } from './src/openfile/idlist.jsx'


storiesOf("工作簡歷", module)
  .add("履歷簡表", () => <Resume />)
storiesOf("系統雛型", module)
storiesOf("系統分析", module)
  .add("系統功能雛型", ()=><Documents />)
  .add("系統分析文件", ()=><Documents />)
storiesOf("專案管理", module)
  .add("WBS切割", ()=><Documents />)
storiesOf("其他作品", module)
  .add("農審辦法", () => <Timeline />)
  .add("註冊", () => <Register />)
  .add("最新公告", () => <News />)
  .add("檔案處理", () => <IDList />)