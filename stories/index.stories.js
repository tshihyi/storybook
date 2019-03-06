import React from 'react'
import ReactModal from 'react-modal'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'
import { Timeline } from './src/fws/timeline.jsx'
import { Register } from './src/fws/register.jsx'
import { News } from './src/fws/news.jsx'
import { CaseRegister } from './src/fidr/case-register.jsx'
import { Resume } from './src/resume/resume.jsx'

storiesOf("履歷", module)
  .add("覆歷簡表", () => <Resume />)
storiesOf("107FWS", module)
  .add("農審辦法", () => <Timeline />)
  .add("註冊", () => <Register />)
storiesOf("108FWS", module)
  .add("最新公告", () => <News />)
storiesOf("107FIDR", module)
  .add("案件登錄", () => <CaseRegister />)
