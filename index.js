const FileManagement=require(`./filemodule`);
const OS_Modules=require(`./osModule`);
const myEmitter=require(`./EventEmitterModule`);

const fm = new FileManagement();
async function runFileModule() {
  fm.Write("Hello World This Is NodeJs...");
  fm.Read();
  fm.WriteSync("Hello guys!!!");
  fm.ReadSync();
}
const event = new myEmitter();
function runEventEmitter(){
event.on('bark', () => {
  console.log("Dog is Still Barking");
});

event.on('bark',()=>{
    setTimeout(()=>{
        console.log("The Dog is Still Barking!!!")
    },3000)
})
event.emit('bark');
}
//running File Modules
runFileModule();

//running OS Modules
OS_Modules();

//running EventEmitter Modules
runEventEmitter();
