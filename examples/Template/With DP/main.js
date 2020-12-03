 class AbstractAlgorithm {

     ///Define Skeleton of an Algorithm in a Method
     TemplateMethod() {
         this.LoadData();
         this.ProcessData();
         this.SaveData();
         this.PublishResults();
     }

     ProcessData() {
         console.log("Processing Data....");
     }

     PublishResults() {
         console.log("Publishing Results ");
     }

     ///Defer Some Steps to SubClasses 
     LoadData() {

     }
     SaveData() {

     }
 }

 class ConcreteAlgorithm01 extends AbstractAlgorithm {
     LoadData() {
         console.log("Load from Cloud");
     }

     SaveData() {
         console.log("Save To Cloud");
     }
 }

 class ConcreteAlgorithm02 extends AbstractAlgorithm {
     LoadData() {
         console.log("Load from DB");
     }

     SaveData() {
         console.log("Save To DB");
     }
 }


 function Run() {
     let algo = new ConcreteAlgorithm01();
     algo.TemplateMethod();

     console.log('\n.......................');

     let algo2 = new ConcreteAlgorithm02();
     algo2.TemplateMethod();
 }