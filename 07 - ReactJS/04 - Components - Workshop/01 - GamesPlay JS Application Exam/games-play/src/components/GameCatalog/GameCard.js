function GameCard({
    game
}) {
    const onDetailsClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={game.imageUrl} />
                <h6>{game.category}</h6>
                <h2>{game.title}</h2>
                <a href={`/games/:${game._id}`} className="details-button">Details</a>
            </div>
        </div>
    );
}

export default GameCard;