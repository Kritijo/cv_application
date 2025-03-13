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
            <div className="personal">
                <h2>{form.name}</h2>
                <div>
                    <p>{form.number}</p>•<p>{form.email}</p>•
                    <p>{form.linkedIn}</p>
                </div>
            </div>
        </>
    );
}

function EducationalData({ form }) {
    function formatDateToMonthYear(dateString) {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        });
    }

    return (
        <>
            <h2 className="education-heading">EDUCATION</h2>
            <div className="education">
                <div>
                    <p className="degree">
                        <i>{form.degree}</i>
                    </p>
                    <p>{form.college}</p>
                </div>
                <div>
                    <p>
                        <i>
                            {formatDateToMonthYear(form.from)} -{" "}
                            {formatDateToMonthYear(form.to)}
                        </i>
                    </p>
                    <p className="cgpa">CGPA: {form.cgpa}</p>
                </div>
            </div>
        </>
    );
}
function ExperienceData({ form }) {
    function formatDateToMonthYear(dateString) {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        });
    }
    return (
        <>
            <h2 className="experience-heading">EXPERIENCE</h2>
            <div className="experience">
                {form.map((exp, idx) => (
                    <div className="exp-div" key={idx}>
                        <div>
                            <p className="role">
                                <i>{exp.role}</i>
                            </p>
                            <p>
                                <i>
                                    {formatDateToMonthYear(exp.from)} -{" "}
                                    {formatDateToMonthYear(exp.to)}
                                </i>
                            </p>
                        </div>
                        <p>{exp.company}</p>
                        <ul>
                            <li>{exp.description1}</li>
                            <li>{exp.description2}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}

function App() {
    const [personalData, setPersonalData] = useState({
        name: "Your name",
        number: "7283792730",
        email: "email@domain.com",
        linkedIn: "linkedIn",
    });
    const [educationData, seteducationData] = useState({
        degree: "Bachelor of Engineering, Computer Science",
        college: "Example University",
        from: "2021-08-01",
        to: "2025-05-01",
        cgpa: "8.9",
    });
    const [experienceData, setexperienceData] = useState([
        {
            role: "Software Engineer Intern",
            company: "XYZ",
            description1:
                "Worked with product managers to re-architect a multi-page web app into a single page web-app, boosting yearly revenue by $1.4M.",
            description2:
                "Improved application performance and reduced load time by 30% through code-splitting and lazy loading.",
            from: "2022-02-14",
            to: "2022-09-10",
        },
        {
            role: "Software Engineer Intern",
            company: "ABC",
            description1:
                "Worked with product managers to re-architect a multi-page web app into a single page web-app, boosting yearly revenue by $1.4M.",
            description2:
                "Improved application performance and reduced load time by 30% through code-splitting and lazy loading.",
            from: "2022-02-14",
            to: "2022-09-10",
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
