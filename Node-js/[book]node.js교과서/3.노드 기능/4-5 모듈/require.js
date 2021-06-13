console.log('requre가 가장 위에 오지 않아도 된다.');

module.exprots = '해당 모듈을 찾아봐';

require('../var.js');

console.log('require.cache 예시');
console.log(require.cache);

console.log('require.main 예시');
console.log(require.main === module);
console.log(require.main.filename);