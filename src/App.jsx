import { useState } from "react";
import personal from "./assets/personal.svg";
import education from "./assets/education.svg";
import experience from "./assets/experience.svg";
import plus from "./assets/plus.svg";
import minus from "./assets/minus.svg";
import "./App.css";
import { PersonalForm, EducationForm, ExperienceForm } from "./forms.jsx";

function Button({ name, img, formComponent, isActive, setisActive }) {
    const handleClick = () => {
        isActive === name ? setisActive("") : setisActive(name);
    };

    const FormComponent = formComponent;
    const active = isActive === name;

    return (
        <>
            <button onClick={handleClick}>
                <img src={img} />
                {name}
                {active ? <img src={minus} /> : <img src={plus} />}
            </button>
            {active && <FormComponent />}
        </>
    );
}

function HandleButtons() {
    const [isActive, setisActive] = useState("");
    const sharedProps = {
        isActive,
        setisActive,
    };

    return (
        <>
            <Button
                name="Personal"
                img={personal}
                formComponent={PersonalForm}
                {...sharedProps}
            />
            <Button
                name="Education"
                img={education}
                formComponent={EducationForm}
                {...sharedProps}
            />
            <Button
                name="Experience"
                img={experience}
                formComponent={ExperienceForm}
                {...sharedProps}
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
            <div className="right">
                <div className="PersonalData"></div>
                <div className="EducationalData"></div>
                <div className="ExperienceData"></div>
            </div>
        </div>
    );
}

export default App;
