import { StyledGrid, artistName } from '../styles';

const ArtistsGrid = ({ artists }) => (
  <>
    {artists && artists.length ? (
      <StyledGrid>
        {artists.map((artist, i) => (
          <li className="grid__item" key={i}>
          {artist.images[0] && (
            <div className="grid__item__img">
              <img src={artist.images[0].url} alt={artist.name} />
              </div>
          )}
          <h3 className="grid__item__num">{i + 1}. &nbsp; {artist.name}</h3>
      </li>
    ))}
      </StyledGrid>
    ) : (
      <p className="empty-notice">No artists available</p>
    )}
  </>
);

export default ArtistsGrid;
