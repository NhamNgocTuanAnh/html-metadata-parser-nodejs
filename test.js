
const { parser } = require('./dist');


(async () => {

    var result = await parser('https://anhhangxom.xyz/nhiep-anh/preset/lightroom-lowkey-2023');

    console.log(JSON.stringify(result, null, 3));

})();
