export default function Btn({ languages, onClick }) {
  function handleMoreClick(language) {
    onClick(language.id);
  }
  return (
    <>
      {languages.map((language) => (
        <button
          key={language.id}
          className="btn"
          onClick={() => handleMoreClick(language)}
        >
          {language.name}
        </button>
      ))}
    </>
  );
}
