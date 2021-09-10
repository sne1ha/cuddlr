import React, { useState } from 'react';
import './petquiz.module.css';

export default function PetQuiz() {
	const questions = [
		{
			questionText: 'Do you work from home or from an office?',
			answerOptions: [
				{ answerText: 'Home', isCorrect: false },
				{ answerText: 'Office', isCorrect: false },
				{ answerText: 'It Varies', isCorrect: true },
				{ answerText: 'Other', isCorrect: false },
			],
		},
		{
			questionText: 'Does your job require you to travel alot?',
			answerOptions: [
				{ answerText: 'Yes', isCorrect: false },
				{ answerText: 'No', isCorrect: true },
				{ answerText: 'Sometimes', isCorrect: false },
				{ answerText: 'Other', isCorrect: false },
			],
		},
		{
			questionText: 'Do you like big, medium, medium/small, or small sized animals',
			answerOptions: [
				{ answerText: 'Big', isCorrect: true },
				{ answerText: 'Medium', isCorrect: false },
				{ answerText: 'Medium/Small', isCorrect: false },
				{ answerText: 'Small', isCorrect: false },
			],
		},
		{
			questionText: 'Do you live in a city, town, or rural area',
			answerOptions: [
				{ answerText: 'City', isCorrect: false },
				{ answerText: 'Town', isCorrect: false },
				{ answerText: 'Rural Area', isCorrect: false },
				{ answerText: 'Farm', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);



	const handleAnswerButtonClick = (isCorrect) => {
		// if(isCorrect===true){
		// 	alert("this answer is correct")
		// }


		const nextQuestion = currentQuestion + 1;
		if(nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};



	return (
		<div className='petquiez'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>You will get your personalized report soon!</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption)=> 
							<petbutton onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</petbutton>
						
						)}
						
					</div>
				</>
			)}
		</div>
	);
}