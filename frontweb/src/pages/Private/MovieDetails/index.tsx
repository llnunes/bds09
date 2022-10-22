import ReviewCard from '../../../components/ReviewCard';
import ReviewListing from '../../../components/ReviewListing';
import './styles.css';

const MovieDetails = () => {
  return (
    <>
      <div className="movie-details-container">
        <h1>Tela detalhes do filme id: 1 </h1>
      </div>

      <ReviewCard />

      <ReviewListing />
    </>
  );
};

export default MovieDetails;
