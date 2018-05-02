import React from 'react'
import ReactModal from 'react-modal'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { Button, Welcome } from '@storybook/react/demo'
import { Timeline } from './src/timeline.jsx'
import { Register } from './src/register.jsx'
import './css/timeline.sass'
import './css/register.sass'

storiesOf("107FWE", module)
  .add("System rules with law", () => <Timeline />)
  .add("register", () => <Register />)
