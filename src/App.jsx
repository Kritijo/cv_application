import { useState } from "react";
import personal from "./assets/personal.svg";
import education from "./assets/education.svg";
import experience from "./assets/experience.svg";
import plus from "./assets/plus.svg";
import minus from "./assets/minus.svg";
import app from "./assets/app.svg";
import skills from "./assets/skills.svg";
import "./App.css";
import {
    PersonalForm,
    EducationForm,
    ExperienceForm,
    ProjectForm,
    SkillsForm,
} from "./forms.jsx";

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
            <Button
                name="Projects"
                img={app}
                formComponent={ProjectForm}
                {...sharedProps}
                form={formProps[3].form}
                setForm={formProps[3].setForm}
            />
            <Button
                name="Skills"
                img={skills}
                formComponent={SkillsForm}
                {...sharedProps}
                form={formProps[4].form}
                setForm={formProps[4].setForm}
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
        <div>
            <h2 className="education-heading">EDUCATION</h2>
            <div className="education">
                {form.map((education, idx) => (
                    <div className="education-div" key={idx}>
                        <div>
                            <p className="degree">
                                <i>{education.degree}</i>
                            </p>
                            <p>{education.college}</p>
                        </div>
                        <div>
                            <p>
                                <i>
                                    {formatDateToMonthYear(education.from)} -{" "}
                                    {formatDateToMonthYear(education.to)}
                                </i>
                            </p>
                            <p className="cgpa">CGPA: {education.cgpa}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
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
        <div>
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
        </div>
    );
}

function ProjectData({ form }) {
    return (
        <div>
            <h2 className="project-heading">PROJECTS</h2>
            <div className="project">
                {form.map((project, index) => (
                    <div className="project-div" key={index}>
                        <p className="projectName">
                            <i>{project.projectName}</i>
                            <a
                                href={
                                    project.link.startsWith("http")
                                        ? project.link
                                        : `https://${project.link}`
                                }
                                target="_blank"
                            >
                                (View Project)
                            </a>
                        </p>
                        <ul>
                            <li>{project.description1}</li>
                            <li>{project.description2}</li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

function SkillsData({ form }) {
    return (
        <div className="skills">
            <h2 className="skills-heading">SKILLS</h2>
            <p>
                <b>Languages:</b> {form.languages}
            </p>
            <p>
                <b>Technologies/Frameworks:</b> {form.technologies}
            </p>
            <p>
                <b>Databases:</b> {form.databases}
            </p>
        </div>
    );
}

function App() {
    const [personalData, setPersonalData] = useState({
        name: "Your name",
        number: "7283792730",
        email: "email@domain.com",
        linkedIn: "linkedIn",
    });
    const [educationData, seteducationData] = useState([
        {
            degree: "Masters of Engineering, Computer Science",
            college: "Example University",
            from: "2021-08-01",
            to: "2025-05-01",
            cgpa: "9.1",
        },
        {
            degree: "Bachelor of Engineering, Computer Science",
            college: "Example University",
            from: "2021-08-01",
            to: "2025-05-01",
            cgpa: "8.9",
        },
    ]);
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
    const [projectData, setprojectData] = useState([
        {
            projectName: "E-commerce Store",
            link: "www.github.com",
            description1:
                "Developed an online store with a fully functional shopping cart, product search, and checkout process.",
            description2:
                "Integrated Stripe API for secure payments and MongoDB for product and order data storage.",
        },
        {
            projectName: "Chat Application",
            link: "www.github.com",
            description1:
                "Developed a real-time chat application using Socket.io and Express.js for seamless communication.",
            description2:
                "Added private messaging, group chats, and user presence indicators.",
        },
    ]);
    const [skillsData, setskillsData] = useState({
        languages: "Python, JavaScript, Java, SQL, C++",
        technologies: "NodeJS, Express, ReactJS, Django",
        databases: "PostgreSQL, MongoDB, MySQL",
    });

    const formProps = [
        { form: personalData, setForm: setPersonalData },
        { form: educationData, setForm: seteducationData },
        { form: experienceData, setForm: setexperienceData },
        { form: projectData, setForm: setprojectData },
        { form: skillsData, setForm: setskillsData },
    ];

    return (
        <div className="container">
            <div className="left">
                <h1>CV Generator</h1>
                <p>Fill in the details below</p>
                <HandleButtons formProps={formProps} />
            </div>
            <div className="right">
                <PersonalData form={personalData} />
                <EducationalData form={educationData} />
                <ExperienceData form={experienceData} />
                <ProjectData form={projectData} />
                <SkillsData form={skillsData} />
            </div>
        </div>
    );
}

export default App;
