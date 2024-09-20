import "./index.css";

function Card({ user }) {
  return (
    <div className="card">
      <h3>
        <b>Ismingiz: </b>
        {user.name}
      </h3>
      <p>
        <b>Emailingiz: </b>
        {user.email}
      </p>
      <p>
        <b>Millatiz: </b>
        {user.nat}
      </p>
      <p>
        <b>O'zingiz haqingizda: </b>
        {user.deck}
      </p>
      <p>
        <b>Qaysi tillarni bilasiz:</b>
      </p>
      <p>
        {user.lang.length > 0 ? (
          user.lang.map((lang, index) => <span key={index}>{lang}</span>)
        ) : (
          <span>Hech qaysi tilni bilmayman</span>
        )}
      </p>
      <button>delete</button>
    </div>
  );
}

export default Card;
