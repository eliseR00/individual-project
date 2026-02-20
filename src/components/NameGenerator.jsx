import { useEffect, useState } from "react";

function NameGenerator() {
    const [names, setNames] = useState([]);
    const [gender, setGender] = useState("");
    const [nation, setNation] = useState("");
    const [generatedName, setGeneratedName] = useState("");

    // Load CSV when component mounts
    useEffect(() => {
        fetch("/names.csv")
            .then(res => res.text())
            .then(text => {
                const lines = text.trim().split("\n");
                const headers = lines[0].split(",");

                const data = lines.slice(1).map(line => {
                    const values = line.split(",");
                    const obj = {};

                    headers.forEach((header, index) => {
                        obj[header.trim()] = values[index].trim();
                    });

                    return obj;
                });

                setNames(data);
            });
    }, []);

    const generateName = () => {
        const filtered = names.filter(
            person =>
                person.Gender === gender &&
                person.Nation === nation
        );

        if (!filtered.length) {
            setGeneratedName("No name found");
            return;
        }

        const randomIndex = Math.floor(Math.random() * filtered.length);
        setGeneratedName(filtered[randomIndex].Name);
    };

    return (
        <div>
            <h1>Name Generator</h1>

            <select onChange={e => setGender(e.target.value)}>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            <select onChange={e => setNation(e.target.value)}>
                <option value="">Select Nation</option>
                <option value="China">China</option>
                <option value="English">English</option>
                <option value="India">India</option>
                <option value="Navajo">Navajo</option>
                <option value="Somalia">Somalia</option>
            </select>



            <button onClick={generateName}>Generate</button>

            <h2>{generatedName}</h2>
        </div>
    );
}

export default NameGenerator;