import { NavLink } from 'react-router-dom';
import ButtonIcon from '../ButtonIcon';
import './styles.css';

const ReviewCard = () => {
  return (
    <div className="base-card review-card">
      <div className="mb-4">
        <input type="text" className='form-control base-input' placeholder="Email" name="username" />
        <div className="invalid-feedback d-block"></div>
      </div>
      <div className="review-submit">
          <NavLink to="/movies" className="btn-avaliacao">
            <ButtonIcon text="SALVAR AVALIAÇÃO" />
          </NavLink>
        </div>
    </div>
  );
};

export default ReviewCard;
