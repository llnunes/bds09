
import './styles.css';

const ReviewListing = () => {
    return (
        <div className="base-card review-listing-card">
      <div className="mb-4">
        <input type="text" className='form-control base-input input-disabled' placeholder="Email" name="username" disabled/>
        <div className="invalid-feedback d-block"></div>
      </div>
      
    </div>

    );
}

export default ReviewListing;