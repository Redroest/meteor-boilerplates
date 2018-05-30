import { h } from 'preact';
import { render } from 'preact-render-to-string';
import { onPageLoad } from 'meteor/server-render';

import App from '../ui/App';

import '../api/methods/getArticles';

onPageLoad(sink => {

  sink.renderIntoElementById('app', render(
    <App location={sink.request.url} />
  ));
});