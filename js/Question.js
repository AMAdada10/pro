class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter answer.....");
   //Create a input box to enter the number
   this.input=createInput("").attribute("placeholder","enter your name ")
   this.playButton=createButton("play")
   this.greeting=createElement("h2")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)




    this.message = createElement("h2")
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    
    //Create html() and position() for each question, input and answers.



    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>checking answer.`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;
      //player.addPlayer();
    
    })


  }
}
