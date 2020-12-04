 //interface
 class IQuack {
     Quack() {};
 }

 class NormalQuack extends IQuack {
     Quack() {
         console.log("Normal Quacking");
     }
 }

 class Squeaky extends IQuack {
     Quack() {
         console.log("Squeeeeeeeeeaky");
     }
 }