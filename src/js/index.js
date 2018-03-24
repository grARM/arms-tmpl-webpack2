console.log('page: index');
// QT.config({
//     environment: {source:"testbridge"}
// });

require('../sass/index.scss');

import $$headerModule from '../module/header/header.js'

// console.log('jq', $);
// console.log('QT', QT);
// console.log('MtaH5：  ', MtaH5);
//MtaH5.clickStat('POPUP_FAILED');

//QTDictionaryTips
// console.log('QTDictionaryTips', QTDictionaryTips);


$(document).ready(function(){
	let env = NODE_ENV;
    (x => {
        console.log('NODE_ENV: ', x);
    })(env);
});

