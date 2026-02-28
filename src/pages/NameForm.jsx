import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NameForm() {
    const navigate = useNavigate();

    //list of names and their details
    const nameList = [
        { name: "Aadan", gender: "m", nation: "Somalia" },
        { name: "Cabdi", gender: "m", nation: "Somalia" },
        { name: "Daauud", gender: "m", nation: "Somalia" },
        { name: "Faarax", gender: "m", nation: "Somalia" },
        { name: "Ibraahim", gender: "m", nation: "Somalia" },
        { name: "Jaylaani", gender: "m", nation: "Somalia" },
        { name: "Maxamed", gender: "m", nation: "Somalia" },
        { name: "Mohamed", gender: "m", nation: "Somalia" },
        { name: "Nuur", gender: "m", nation: "Somalia" },
        { name: "Xasan", gender: "m", nation: "Somalia" },
        { name: "Yuusuf", gender: "m", nation: "Somalia" },
        { name: "Aamina", gender: "f", nation: "Somalia" },
        { name: "Caasha", gender: "f", nation: "Somalia" },
        { name: "Hawo", gender: "f", nation: "Somalia" },
        { name: "Fadumo", gender: "f", nation: "Somalia" },
        { name: "Jawaahir", gender: "f", nation: "Somalia" },
        { name: "Khadra", gender: "f", nation: "Somalia" },
        { name: "Maryan", gender: "f", nation: "Somalia" },
        { name: "Sacdiyo", gender: "f", nation: "Somalia" },
        { name: "Xaawo", gender: "f", nation: "Somalia" },
        { name: "Xafsa", gender: "f", nation: "Somalia" },
        { name: "Xaliima", gender: "f", nation: "Somalia" },

        { name: "Ashkii", gender: "m", nation: "Navajo" },
        { name: "Awee", gender: "m", nation: "Navajo" },
        { name: "Bidziil", gender: "m", nation: "Navajo" },
        { name: "Hastiin", gender: "m", nation: "Navajo" },
        { name: "Klah", gender: "m", nation: "Navajo" },
        { name: "Notah", gender: "m", nation: "Navajo" },
        { name: "Shandiin", gender: "m", nation: "Navajo" },
        { name: "Ajei", gender: "f", nation: "Navajo" },
        { name: "Awee", gender: "f", nation: "Navajo" },
        { name: "Dezba", gender: "f", nation: "Navajo" },
        { name: "Lina", gender: "f", nation: "Navajo" },
        { name: "Nanabah", gender: "f", nation: "Navajo" },
        { name: "Nizhoni", gender: "f", nation: "Navajo" },
        { name: "Shandiin", gender: "f", nation: "Navajo" },

        { name: "Deming", gender: "m", nation: "China" },
        { name: "Enlai", gender: "m", nation: "China" },
        { name: "Gang", gender: "m", nation: "China" },
        { name: "Han", gender: "m", nation: "China" },
        { name: "Jiahao", gender: "m", nation: "China" },
        { name: "Qiang", gender: "m", nation: "China" },
        { name: "Tao", gender: "m", nation: "China" },
        { name: "Xiaoping", gender: "m", nation: "China" },
        { name: "Zhiyong", gender: "m", nation: "China" },
        { name: "Zonghan", gender: "m", nation: "China" },
        { name: "Ai", gender: "f", nation: "China" },
        { name: "Fengying", gender: "f", nation: "China" },
        { name: "Guilan", gender: "f", nation: "China" },
        { name: "Hai", gender: "f", nation: "China" },
        { name: "Hongmei", gender: "f", nation: "China" },
        { name: "Lanying", gender: "f", nation: "China" },
        { name: "Nuan", gender: "f", nation: "China" },
        { name: "Qianqian", gender: "f", nation: "China" },
        { name: "Shu", gender: "f", nation: "China" },
        { name: "Yawen", gender: "f", nation: "China" },

        { name: "Aden", gender: "m", nation: "English" },
        { name: "Benji", gender: "m", nation: "English" },
        { name: "Carl", gender: "m", nation: "English" },
        { name: "Dane", gender: "m", nation: "English" },
        { name: "Egbert", gender: "m", nation: "English" },
        { name: "Frank", gender: "m", nation: "English" },
        { name: "Glenn", gender: "m", nation: "English" },
        { name: "Harmon", gender: "m", nation: "English" },
        { name: "Irvin", gender: "m", nation: "English" },
        { name: "Keith", gender: "m", nation: "English" },
        { name: "Abbey", gender: "f", nation: "English" },
        { name: "Barbie", gender: "f", nation: "English" },
        { name: "Courtney", gender: "f", nation: "English" },
        { name: "Darla", gender: "f", nation: "English" },
        { name: "Elise", gender: "f", nation: "English" },
        { name: "Geneva", gender: "f", nation: "English" },
        { name: "Helen", gender: "f", nation: "English" },
        { name: "Irene", gender: "f", nation: "English" },
        { name: "Lucy", gender: "f", nation: "English" },
        { name: "Margaret", gender: "f", nation: "English" },

        { name: "Aamir", gender: "m", nation: "India" },
        { name: "Bhim", gender: "m", nation: "India" },
        { name: "Deepak", gender: "m", nation: "India" },
        { name: "Fateh", gender: "m", nation: "India" },
        { name: "Haseeb", gender: "m", nation: "India" },
        { name: "Jagjit", gender: "m", nation: "India" },
        { name: "Khawaja", gender: "m", nation: "India" },
        { name: "Maninder", gender: "m", nation: "India" },
        { name: "Nadim", gender: "m", nation: "India" },
        { name: "Parth", gender: "m", nation: "India" },
        { name: "Abeeha", gender: "f", nation: "India" },
        { name: "Basanti", gender: "f", nation: "India" },
        { name: "Chandrakanta", gender: "f", nation: "India" },
        { name: "Ferdousi", gender: "f", nation: "India" },
        { name: "Gargi", gender: "f", nation: "India" },
        { name: "Hema", gender: "f", nation: "India" },
        { name: "Indira", gender: "f", nation: "India" },
        { name: "Jayanti", gender: "f", nation: "India" },
        { name: "Kasi", gender: "f", nation: "India" },
        { name: "Laxmi", gender: "f", nation: "India" }

    ];

    const [selectedGenders, setSelectedGenders] = useState(() => {
  const saved = JSON.parse(localStorage.getItem("nameForm"));
  return saved?.genders || [];
});

const [selectedNations, setSelectedNations] = useState(() => {
  const saved = JSON.parse(localStorage.getItem("nameForm"));
  return saved?.nations || [];
});

const [count, setCount] = useState(() => {
  const saved = JSON.parse(localStorage.getItem("nameForm"));
  return saved?.count || 1;
});

    //load saved selectoins if  they exist
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("nameForm"));
        if (saved) {
            setSelectedGenders(saved.genders || []);
            setSelectedNations(saved.nations || []);
            setCount(saved.count || 1);
        }
    }, []);

    //save selections to loval storage
    useEffect(() => {
        localStorage.setItem(
            "nameForm",
            JSON.stringify({
                genders: selectedGenders,
                nations: selectedNations,
                count
            })
        );
    }, [selectedGenders, selectedNations, count]);

    //toggle the selection
    const toggleSelection = (value, list, setList) => {
        if (list.includes(value)) {
            setList(list.filter((item) => item !== value));
        } else {
            setList([...list, value]);
        }
    };

    //time to generate names, this method ensures there are no repeats
    const generateNames = () => {
        const filtered = nameList.filter(
            (n) =>
                selectedGenders.includes(n.gender) &&
                selectedNations.includes(n.nation)
        );

        if (filtered.length === 0) return;

        const copy = [...filtered];
        const results = [];

        for (let i = 0; i < count && copy.length > 0; i++) {
            const randomIndex = Math.floor(Math.random() * copy.length);
            results.push(copy[randomIndex]);
            copy.splice(randomIndex, 1);
            //^ removes the selected so it doesnt repeat
        }

        navigate("/generated", { state: { result: results } });



    };
    return (
        <div className="form-container">
            <div className="gender-container">
                <h2>Select Gender</h2>
                <label className="gender-label"> Male
                    <input type="checkbox" checked={selectedGenders.includes("m")} onChange={() =>
                        toggleSelection("m", selectedGenders, setSelectedGenders)
                    } />
                </label>

                <label className="gender-label"> Female
                    <input type="checkbox" checked={selectedGenders.includes("f")} onChange={() =>
                        toggleSelection("f", selectedGenders, setSelectedGenders)
                    } />
                </label>
            </div>

            <div className="nation-container">
                <h2>Select Nation</h2>
                <label className="nation-label"> Somalia
                    <input type="checkbox" checked={selectedNations.includes("Somalia")} onChange={() =>
                        toggleSelection("Somalia", selectedNations, setSelectedNations)
                    } />
                </label>
                <label className="nation-label"> Navajo
                    <input type="checkbox" checked={selectedNations.includes("Navajo")} onChange={() =>
                        toggleSelection("Navajo", selectedNations, setSelectedNations)
                    } />
                </label>
                <label className="nation-label"> China
                    <input type="checkbox" checked={selectedNations.includes("China")} onChange={() =>
                        toggleSelection("China", selectedNations, setSelectedNations)
                    } />
                </label>
                <label className="nation-label"> English
                    <input type="checkbox" checked={selectedNations.includes("English")} onChange={() =>
                        toggleSelection("English", selectedNations, setSelectedNations)
                    } />
                </label>
                <label className="nation-label"> India
                    <input type="checkbox" checked={selectedNations.includes("India")} onChange={() =>
                        toggleSelection("India", selectedNations, setSelectedNations)
                    } />
                </label>
            </div>

            <div className="count-container">
                <h2>How many names would you like to generate?</h2>
                <select value={count} onChange={e => setCount(Number(e.target.value))}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>

                <button onClick={generateNames} disabled={selectedGenders.length === 0 || selectedNations.length === 0}>Generate</button>
            </div>


            
        </div>
    );
}
export default NameForm;
