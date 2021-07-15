const fs=require('fs').promises;

setIntervar(() => {
    fs.unlink('./abcdefg.js')
},1000);