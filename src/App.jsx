import { useState } from "react";
import personal from "./assets/personal.svg";
import education from "./assets/education.svg";
import experience from "./assets/experience.svg";
import plus from "./assets/plus.svg";
import minus from "./assets/minus.svg";
import "./App.css";
import { PersonalForm, EducationForm, ExperienceForm } from "./forms.jsx";

function Button({
    name,
    img,
    formComponent,
    isActive,
    setisActive,
    form,
    setForm,
}) {
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
            {active && <FormComponent form={form} setForm={setForm} />}
        </>
    );
}

function HandleButtons({ formProps }) {
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
                form={formProps[0].form}
                setForm={formProps[0].setForm}
            />
            <Button
                name="Education"
                img={education}
                formComponent={EducationForm}
                {...sharedProps}
                form={formProps[1].form}
                setForm={formProps[1].setForm}
            />
            <Button
                name="Experience"
                img={experience}
                formComponent={ExperienceForm}
                {...sharedProps}
                form={formProps[2].form}
                setForm={formProps[2].setForm}
            />
        </>
    );
}

function PersonalData({ form }) {
    return (
        <>
            <div>
                <h2>{form.name}</h2>
                <p>{form.address}</p>
                <p>{form.number}</p>
                <p>{form.email}</p>
                <p>{form.linkedIn}</p>
                <p>{form.github}</p>
            </div>
        </>
    );
}

function EducationalData({ form }) {
    return (
        <>
            <div>
                <h2>{form.college}</h2>
                <p>{form.degree}</p>
                <p>{form.cgpa}</p>
                <p>{form.from}</p>
                <p>{form.to}</p>
            </div>
        </>
    );
}
function ExperienceData({ form }) {
    return (
        <>
            <div>
                {form.map((exp, idx) => (
                    <div key={idx}>
                        <h2>{exp.company}</h2>
                        <p>{exp.position}</p>
                        <p>{exp.description}</p>
                        <p>
                            {exp.from} {exp.to}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

function App() {
    const [personalData, setPersonalData] = useState({
        name: "",
        address: "",
        number: "",
        email: "",
        linkedIn: "",
        github: "",
    });
    const [educationData, seteducationData] = useState({
        college: "",
        degree: "",
        cgpa: "",
        from: "",
        to: "",
    });
    const [experienceData, setexperienceData] = useState([
        {
            company: "",
            role: "",
            desc: "",
            from: "",
            to: "",
        },
    ]);

    const formProps = [
        { form: personalData, setForm: setPersonalData },
        { form: educationData, setForm: seteducationData },
        { form: experienceData, setForm: setexperienceData },
    ];

    return (
        <div className="container">
            <div className="left">
                <h1>CV Generator</h1>
                <p>Fill in the details below</p>
                <HandleButtons formProps={formProps} />
            </div>
            <div className="right">
                <PersonalData form={personalData} setForm={setPersonalData} />
                <EducationalData
                    form={educationData}
                    setForm={seteducationData}
                />
                <ExperienceData
                    form={experienceData}
                    setForm={setexperienceData}
                />
            </div>
        </div>
    );
}

export default App;
