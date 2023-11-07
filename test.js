
const { parser } = require('./dist');


(async () => {

    var result = await parser('https://anhhangxom.xyz/nhiep-anh/preset/lightroom-vintage-violin-retro');

    console.log(JSON.stringify(result, null, 3));

})();
