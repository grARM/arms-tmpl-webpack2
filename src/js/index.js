import $$log from '../lib/log.js';
$$log.log('page: index');
// QT.config({
//     environment: {source:"testbridge"}
// });

require('../sass/index.scss');

import $$headerModule from '../module/header/header.js';

// console.log('jq', $);

$(document).ready(function () {
  const env = NODE_ENV;
  ((x) => {
    $$log.log('NODE_ENV: ', x);
  })(env);
  $$headerModule.init();
});

