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
        <form>
            <div>
                <label htmlFor="college">College</label>
                <input
                    name="college"
                    id="college"
                    type="text"
                    value={form.college}
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="degree">Degree</label>
                <input
                    name="degree"
                    id="degree"
                    type="text"
                    value={form.degree}
                    onChange={handleChange}
                ></input>
            </div>
            <div>
                <label htmlFor="cgpa">CGPA</label>
                <input
                    name="cgpa"
                    id="cgpa"
                    type="number"
                    value={form.cgpa}
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
                    value={form.from}
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
                    value={form.to}
                    onChange={handleChange}
                ></input>
            </div>
        </form>
    );
}

export function ExperienceForm({ form, setForm }) {
    const addExperience = () => {
        setForm((prevForm) => [
            ...prevForm,
            { company: "", position: "", description: "", from: "", to: "" },
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
                        <label htmlFor={`position-${index}`}>
                            Position Title
                        </label>
                        <input
                            id={`position-${index}`}
                            type="text"
                            name="position"
                            autoComplete="off"
                            value={experience.position}
                            onChange={handleChange}
                            data-index={index}
                        />
                    </div>
                    <div>
                        <label htmlFor={`description-${index}`}>
                            Description
                        </label>
                        <input
                            id={`description-${index}`}
                            type="text"
                            name="description"
                            autoComplete="off"
                            value={experience.description}
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
