const os = require("os");

function OS_Modules() {
  console.log(os.freemem());
  console.log(os.hostname());
  console.log(os.homedir());
  console.log(os.platform());
  console.log(os.release());
  console.log(os.userInfo());
  console.log(os.version());
}

module.exports=OS_Modules;