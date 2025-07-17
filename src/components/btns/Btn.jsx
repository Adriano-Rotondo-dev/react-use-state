export default function Btn({ languages }) {
  return (
    <>
      {languages.map((language, index) => (
        <button key={index} className="btn">
          {language.name}
        </button>
      ))}
    </>
  );
}
