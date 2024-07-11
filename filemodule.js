const fs= require('fs');

class fileManagement {

  //Write Fuction
  Write(data) {
    fs.writeFile("text.txt", data, "utf8", () => {
      console.log("The Write Function has been Executed successfully");
    });
  }

  //Read Function
  Read() {
    fs.readFile("text.txt", "utf8", (err, res) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
    });
  }

  //WriteSync Function
  WriteSync(data){
    fs.writeFileSync('.text.txt',data,'utf8');
}
    //ReadSync function
    ReadSync(){
        fs.readFileSync('text.txt','utf8');
    };
}
module.exports=fileManagement;