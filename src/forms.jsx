export function PersonalForm({ form, setForm }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    return (
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="number">Phone number</label>
                <input
                    name="number"
                    id="number"
                    type="tel"
                    value={form.number}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="linkedIn">LinkedIn</label>
                <input
                    name="linkedIn"
                    id="linkedIn"
                    type="text"
                    value={form.linkedIn}
                    onChange={handleChange}
                />
            </div>
        </form>
    );
}

export function EducationForm({ form, setForm }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    return (
        <>
            {form.map((education, index) => (
                <form key={index}>
                    <div>
                        <label htmlFor={`college-${index}`}>College</label>
                        <input
                            name="college"
                            id="college"
                            type="text"
                            value={education.college}
                            data-index={index}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="degree">Degree</label>
                        <input
                            name="degree"
                            id="degree"
                            type="text"
                            value={education.degree}
                            data-index={index}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="cgpa">CGPA</label>
                        <input
                            name="cgpa"
                            id="cgpa"
                            type="number"
                            value={education.cgpa}
                            data-index={index}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="from">From</label>
                        <input
                            name="from"
                            id="from"
                            type="date"
                            autoComplete="off"
                            value={education.from}
                            data-index={index}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="to">To</label>
                        <input
                            name="to"
                            id="to"
                            type="date"
                            autoComplete="off"
                            value={education.to}
                            data-index={index}
                            onChange={handleChange}
                        ></input>
                    </div>
                </form>
            ))}
        </>
    );
}

export function ExperienceForm({ form, setForm }) {
    const addExperience = () => {
        setForm((prevForm) => [
            ...prevForm,
            { company: "", role: "", description: "", from: "", to: "" },
        ]);
    };

    const handleChange = (e) => {
        const { name, value, dataset } = e.target;
        const index = dataset.index;

        setForm((prevForm) => {
            const updatedForm = [...prevForm];
            updatedForm[index] = { ...updatedForm[index], [name]: value };
            return updatedForm;
        });
    };

    return (
        <>
            {form.map((experience, index) => (
                <form key={index}>
                    <div>
                        <label htmlFor={`company-${index}`}>Company Name</label>
                        <input
                            id={`company-${index}`}
                            type="text"
                            name="company"
                            autoComplete="off"
                            value={experience.company}
                            onChange={handleChange}
                            data-index={index}
                        />
                    </div>
                    <div>
                        <label htmlFor={`role-${index}`}>Role</label>
                        <input
                            id={`role-${index}`}
                            type="text"
                            name="role"
                            autoComplete="off"
                            value={experience.role}
                            onChange={handleChange}
                            data-index={index}
                        />
                    </div>
                    <div>
                        <label htmlFor={`description1-${index}`}>
                            Description 1
                        </label>
                        <input
                            id={`description1-${index}`}
                            type="text"
                            name="description1"
                            autoComplete="off"
                            value={experience.description1}
                            onChange={handleChange}
                            data-index={index}
                        />
                    </div>
                    <div>
                        <label htmlFor={`description2-${index}`}>
                            Description 2
                        </label>
                        <input
                            id={`description2-${index}`}
                            type="text"
                            name="description2"
                            autoComplete="off"
                            value={experience.description2}
                            onChange={handleChange}
                            data-index={index}
                        />
                    </div>
                    <div>
                        <label htmlFor={`from-${index}`}>From</label>
                        <input
                            id={`from-${index}`}
                            type="date"
                            name="from"
                            autoComplete="off"
                            value={experience.from}
                            onChange={handleChange}
                            data-index={index}
                        />
                    </div>
                    <div>
                        <label htmlFor={`to-${index}`}>To</label>
                        <input
                            id={`to-${index}`}
                            type="date"
                            name="to"
                            autoComplete="off"
                            value={experience.to}
                            onChange={handleChange}
                            data-index={index}
                        />
                    </div>
                </form>
            ))}
            {form.length < 2 && (
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

export function ProjectForm({ form, setForm }) {
    const handleChange = (e) => {
        const { name, value, dataset } = e.target;
        const index = dataset.index;

        setForm((prevForm) => {
            const updatedForm = [...prevForm];
            updatedForm[index] = { ...updatedForm[index], [name]: value };
            return updatedForm;
        });
    };

    return (
        <>
            {form.map((project, index) => (
                <form key={index}>
                    <div>
                        <label htmlFor={`projectName-${index}`}>Project</label>
                        <input
                            name="projectName"
                            type="text"
                            id={`projectName-${index}`}
                            value={project.projectName}
                            data-index={index}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor={`link-${index}`}>Link</label>
                        <input
                            name="link"
                            type="text"
                            id={`link-${index}`}
                            value={project.link}
                            data-index={index}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor={`description1-${index}`}>
                            Description 1
                        </label>
                        <input
                            name="description1"
                            type="text"
                            id={`description1-${index}`}
                            value={project.description1}
                            data-index={index}
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div>
                        <label htmlFor={`description2-${index}`}>
                            Description 2
                        </label>
                        <input
                            name="description2"
                            type="text"
                            id={`description2-${index}`}
                            value={project.description2}
                            data-index={index}
                            onChange={handleChange}
                        ></input>
                    </div>
                </form>
            ))}
        </>
    );
}

export function SkillsForm({ form, setForm }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    return (
        <form>
            <label htmlFor="languages">Languages</label>
            <input
                name="languages"
                id="languages"
                type="text"
                value={form.languages}
                onChange={handleChange}
            ></input>
            <label htmlFor="technologies">Technologies/Frameworks</label>
            <input
                name="technologies"
                id="technologies"
                type="text"
                value={form.technologies}
                onChange={handleChange}
            ></input>
            <label htmlFor="databases">databases</label>
            <input
                name="databases"
                id="databases"
                type="text"
                value={form.databases}
                onChange={handleChange}
            ></input>
        </form>
    );
}
