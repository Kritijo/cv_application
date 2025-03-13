import { useState } from "react";

export function PersonalForm() {
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

export function EducationForm() {
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

export function ExperienceForm() {
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
