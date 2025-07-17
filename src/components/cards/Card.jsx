export default function Textbox({ languages, open }) {
  return (
    <>
      {languages.map((language) => {
        if (language.id === open) {
          return (
            <div key={language.id} className="card">
              <div className="cardHead">{language.name}</div>
              <div className="cardBody">{language.content}</div>
            </div>
          );
        }
      })}
    </>
  );
}
