import './styles.css';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { requestBackend } from 'util/requests';

import { AxiosRequestConfig } from 'axios';
import { Review } from 'types/review';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', '');
        onInsertReview(response.data);
        console.log('sucesso ao salvar', response);
      })
      .catch((error) => {
        console.log('error ao salvar', error);
      });
  };

  return <h1>teste</h1>;
};

export default ReviewForm;
