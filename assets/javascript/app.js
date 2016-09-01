$( document ).ready(function() {

	var QnA= [
		{Q:"Star War is belong to who now?", answer: "Disney", choices: ["Micky Mouse","Disney","John Smith","George Lucus"]},
		{Q:"The singer of 'Eye of the Storm", answer:"Ryan Stevenson",choices: ["Ryan Stevenson","Disney","John Smith","George Lucus"]},
		{Q:"Who is the first officer for Captian Kirk?", answer: "Mr. Spock",choices: ["Ryan Stevenson","Disney","John Smith","Mr. Spock"]},
	];


	// for (var i=0; i< QnA.length; i++) {
	var i = 0;



		function Ask(){
			$("#TQ").append((QnA[i].Q));
			}

		Ask();



		

	for (j=0; j<4;j++) {
		// console.log(QnA[i].choices[j]);
		function Mchoices(){
			$("#Choices").append((QnA[i].choices[j]));
		}

		Mchoices();


		};


	// };





	// };


	// function
	// function Ask(){
	// 	console.log(QnA[0].Q);

	
	// 	}

	// 	var x=Ask();
	

	// Click Start to start the game
	

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