import ReviewMovie from 'components/ReviewMovie';
import { Review } from 'types/review';

import './styles.css';

type Props = {
  reviews: Review[];
}

const ReviewListing = ({reviews} : Props) => {

  return (
    <div className="row">
      {reviews && reviews?.map((review) => (
          <div className="col-sm-6 col-lg-4 col-xl-3" key={review.id}>
            <ReviewMovie review={review} /> 
          </div>
        ))
      }
    </div>
  );
};

export default ReviewListing;
