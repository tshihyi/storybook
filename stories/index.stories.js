import React from 'react'
import ReactModal from 'react-modal'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'
import { Timeline } from './src/timeline.jsx'
import { Register } from './src/register.jsx'
import { CaseRegister } from './src/fidr/case-register.jsx'

storiesOf("01FWS", module)
  .add("System rules with law", () => <Timeline />)
  .add("register", () => <Register />)

storiesOf("02FIDR", module)
  .add("Case Register", () => <CaseRegister />)
