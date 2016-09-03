$( document ).ready(function() {

	var QnA= [
		{Q:"Star War is belong to who now?", 
		answer: "Disney", 
		choices: [
					"Micky Mouse",
					"Disney",
					"John Smith",
					"George Lucus"
					]
		},

		{Q:"The singer of 'Eye of the Storm?", 
		answer:"Ryan Stevenson",
		choices: [
					"Ryan Stevenson",
					"Disney",
					"John Smith",
					"George Lucus"]
		},

		{Q:"Who is the first officer for Captian Kirk?", 
		answer: "Mr. Spock",
		choices: [
				"Ryan Stevenson",
				"Disney",
				"John Smith",
				"Mr. Spock"
				]
		},
		{Q:"Who created internet?", 
		answer: "Mr. Spock",
		choices: [
				"Ryan Stevenson",
				"Disney",
				"John Smith",
				"Mr. Spock"
				]
		},



	];


	
	var i = 0;
	var j = 0;
	var currentTimer=0;
	var currentQindex=0;
	var correctGuess=0;
	var IncorrectGuess=0;

/

		function Ask(){

			$("#TQ").css({"color":"orange","font-size": "40px"});
			$("#TQ").append((QnA[i].Q));

			for (var j=0; j<QnA[currentQindex].choices.length; j++) {
			var choiceDiv = $('<div>');
			choiceDiv.addClass('choice_ans')
			choiceDiv.text(QnA[currentQindex].choices[j]);
			choiceDiv.attr("data-select", QnA[currentQindex].choices[j]);
			console.log(QnA[currentQindex].choices[j]);
			$("#Choices").append(choiceDiv);


			}
		}

		Ask();

		

		$(".choice_ans").on("click",function() {

	 			console.log(this);
		});
	

	// For loop the questions until the questions are ended.

	// 1) Timer  (No answer: it will move on to next question)
	// 2) Question
	// 3) Provide 4 choices (mousse click)
	// 4) click the answer (provide 3 sec of "right" answer" after click or no click. and move on to next page)
	// 5) End of the game Show
	// 	Correct Answer:
	// 	Incorrect Answer:
	// 	Unanswer:
	// 	Start Over (Reset the game directly)


	// ============= 
	// Title

	// <Start>
	// Time Remaining
	// Question
	// <List of choices>
	// <Provide Respond>
	// <Provide Correct Answer>
	// <Provide Status>
	// <Restart button>

	// Selection of Answers
	// ==================


});