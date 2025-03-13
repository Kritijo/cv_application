import { useState } from "react";
import personal from "./assets/personal.svg";
import education from "./assets/education.svg";
import experience from "./assets/experience.svg";
import plus from "./assets/plus.svg";
import minus from "./assets/minus.svg";
import "./App.css";

function PersonalForm() {
    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" autoComplete="name"></input>
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input
                    id="address"
                    type="text"
                    autoComplete="address-line1"
                ></input>
            </div>
            <div>
                <label htmlFor="number">Phone number</label>
                <input id="number" type="tel"></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" autoComplete="email"></input>
            </div>
            <div>
                <label htmlFor="linkedIn">LinkedIn</label>
                <input id="linkedIn" type="text"></input>
            </div>
            <div>
                <label htmlFor="github">Github</label>
                <input id="github" type="tel"></input>
            </div>
        </form>
    );
}

function EducationForm() {
    return (
        <form>
            <div>
                <label htmlFor="college">College</label>
                <input id="college" type="text"></input>
            </div>
            <div>
                <label htmlFor="degree">Degree</label>
                <input id="degree" type="text"></input>
            </div>
            <div>
                <label htmlFor="cgpa">CGPA</label>
                <input id="cgpa" type="number"></input>
            </div>
            <div>
                <label htmlFor="from">From</label>
                <input id="from" type="date" autoComplete="email"></input>
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input id="to" type="date"></input>
            </div>
        </form>
    );
}

function ExperienceForm() {
    const [experiences, setExperiences] = useState([
        { company: "", position: "", description: "", from: "", to: "" },
    ]);

    const addExperience = () => {
        setExperiences([
            ...experiences,
            { company: "", position: "", description: "", from: "", to: "" },
        ]);
    };

    return (
        <>
            {experiences.map((_, index) => (
                <form key={index}>
                    <div>
                        <label htmlFor={`company-${index}`}>Company Name</label>
                        <input id={`company-${index}`} type="text" />
                    </div>
                    <div>
                        <label htmlFor={`position-${index}`}>
                            Position Title
                        </label>
                        <input id={`position-${index}`} type="text" />
                    </div>
                    <div>
                        <label htmlFor={`description-${index}`}>
                            Description
                        </label>
                        <input id={`description-${index}`} type="text" />
                    </div>
                    <div>
                        <label htmlFor={`from-${index}`}>From</label>
                        <input id={`from-${index}`} type="date" />
                    </div>
                    <div>
                        <label htmlFor={`to-${index}`}>To</label>
                        <input id={`to-${index}`} type="date" />
                    </div>
                </form>
            ))}
            {experiences.length < 2 && (
                <button
                    type="button"
                    onClick={addExperience}
                    className="addFieldBttn"
                >
                    Add More
                </button>
            )}
        </>
    );
}

function Button({ name, img, formComponent, isActive, setisActive }) {
    const handleClick = () => {
        isActive===name ? setisActive("") :setisActive(name);
    };
    
    const active = isActive === name;

    return (
        <>
            <button onClick={handleClick}>
                <img src={img} />
                {name}
                {active ? <img src={minus} /> : <img src={plus} />}
            </button>
            {active && formComponent}
        </>
    );
}

function HandleButtons() {
    const [isActive, setisActive] = useState("");

    return (
        <>
            <Button
                name="Personal"
                img={personal}
                formComponent={<PersonalForm />}
                isActive={isActive}
                setisActive={setisActive}
            />
            <Button
                name="Education"
                img={education}
                formComponent={<EducationForm />}
                isActive={isActive}
                setisActive={setisActive}
            />
            <Button
                name="Experience"
                img={experience}
                formComponent={<ExperienceForm />}
                isActive={isActive}
                setisActive={setisActive}
            />
        </>
    );
}

function App() {
    return (
        <div className="container">
            <div className="left">
                <h1>CV Generator</h1>
                <p>Fill in the details below</p>
                <HandleButtons />
            </div>
            <div className="right"></div>
        </div>
    );
}

export default App;
