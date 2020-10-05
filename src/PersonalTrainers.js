import React, {Component} from 'react';
import './Components/css/style.css';



class PersonalTrainers extends Component {
    constructor(props) {
        super(props);
        this.state={
            personaltrainers: [
                {
                    id: 0,
                    name: "Alex",
                    image: "./assets/images/persoanltrainer.png",
                    description: "Personal Trainer-Alex",
                    biography: "Alex is an National Strength and Conditioning Association (NSCA) Personal Trainer. In college Alex played Point Guard for the Georgetown Hoayas. After sustaining an injury, Alex realized this unfortunate event could have been avoided with proper training. It was then he doscovered his passion of personal training. He now strives on motivating others to acheieve their goals or recover from injury with strength training."
                },
                {
                    id: 1,
                    name:"Rachel",
                    image: "./src/assets/images/personaltrainer2.png",
                    description: "Personal Trainer-Rachel",
                    biography: "Rachel is an National Academy of Sports Medicine (NASM) Personal Trainer and currently holds a Cross FitCertification Level 2 license. In college she was a long distance runner at UCLA. After obtaining her Bachelors degree in Science in Health & Wellness she has devoted her life to guide others in their quest to a healthy lifestyle."
                },
                {
                    id: 2,
                    name:"Felix",
                    image: "./assets/images/personaltrainer3.png",
                    description: "Personal Trainer-Felix",
                    biography:"In his past Felix consistenly indulged in fast food & sweets. After weighing in at 300 lbs he decided it was time for a change. Now Felix is 75 lbs lighter and a two time NPC Big Cat Fitness compeition winner. After retiring from fitness compeitions he obtained his National Strength and Conditioning Association (NSCA) license and uses his personal story to motivate his clients to lose weigt and keep it off."
                },
                {
                    id: 3,
                    name:"Courtney",
                    image: "./assets/images/personaltrainer4.png",
                    description: "Personal Trainer-Courtney",
                    biography: "After graduating Magna Cum Laude at Grand Cayon University in Sports Management Courtney obtained her certifications in International Sports Sciences Association (ISSA) and American College of Sports Medicine (ACSM). Her method is to build a custom plan based on your shape, size, and fitness goals. She aims not only to transform your body but to influence you in making more mindful decisions when it comes to your health"
                }
            ]
        };
    }

    render() {
        const personaltrainer = this.state.personaltrainers.map(personaltrainer => {
            return (
                <div className="row">
                    <h3 className="smHeader">{personaltrainer.name}</h3>
                    <img src={personaltrainer.image} alt={personaltrainer.description} className="mx-auto" width="25" height="25" />
                    <p>{personaltrainer.biography}</p>
                </div>
            );
        })
        return (
            <div>
            <div className="personaljumbo"><h1 className="smHeader text-center">PERSONAL TRAINERS</h1></div>
            <div className="container">
                <div className="row">
                    {personaltrainer}
                </div>
            </div>
            </div>

        );
    }

}
    
    export default PersonalTrainers;