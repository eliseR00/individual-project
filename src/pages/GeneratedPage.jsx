import { useLocation, useNavigate } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result || [];

  return (
    <div className="results-container">
      <h2>Generated Names</h2>

      {result.map((person, index) => (
        <p key={index}>
          {person.name} ({person.gender}, {person.nation})
        </p>
      ))}

      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}