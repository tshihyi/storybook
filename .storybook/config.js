import { configure, addParameters } from '@storybook/react';

addParameters({
  options: {
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    name: '杜詩怡工作作品集',
    isFullScreen: true,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: false
  }
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);