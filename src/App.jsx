import { useState } from "react";
import personal from "./assets/personal.svg";
import education from "./assets/education.svg";
import experience from "./assets/experience.svg";
import plus from "./assets/plus.svg";
import minus from "./assets/minus.svg";
import "./App.css";

function PersonalForm({ showForm }) {
    if (!showForm) return null;

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

function Button({ name, img }) {
    const [showForm, setShowForm] = useState(false);

    const toggle = () => {
        setShowForm(!showForm);
    };

    return (
        <>
            <button onClick={toggle}>
                <img src={img} />
                {name}
                {showForm ? <img src={minus} /> : <img src={plus} />}
            </button>
            <PersonalForm showForm={showForm} />
        </>
    );
}

function App() {
    return (
        <div className="container">
            <div className="left">
                <h1>CV Generator</h1>
                <p>Fill in the details below</p>
                <Button name="Personal Details" img={personal} />
                <Button name="Education" img={education} />
                <Button name="Experience" img={experience} />
            </div>
            <div className="right"></div>
        </div>
    );
}

export default App;
