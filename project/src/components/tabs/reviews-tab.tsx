import {useAppSelector} from '../../hooks';
import {Review, Reviews} from '../../types/types';
import Spiner from '../spiner/spiner';
import {getDate} from '../../utils/utils';

function ReviewsTab(): JSX.Element {
  const reviews = useAppSelector((store) => store.reviews);
  const isFilmReviewsLoading = useAppSelector((state) => state.isFilmReviewsLoading);
  // Так как отзывы выводятся в 2 колонки, то
  // необходимо разбить массив напополам =>
  // находим индекс центрального элемента массива (делением на 2 :))
  // Eсли число отзывов нечетное, то округляем в большую сторону, чтобы в первой (левой) колонке было большее количество элементов
  // -1, т.к. индексы в массиве идут с 0

  let firstColumn:Reviews = [];
  let secondColumn:Reviews = [];

  if (reviews.length > 1) {
    const IndexOfArrayCenter = ( (reviews.length % 2) ? Math.ceil(reviews.length / 2) : reviews.length / 2);
    firstColumn = reviews.slice(0, IndexOfArrayCenter);
    secondColumn = reviews.slice(IndexOfArrayCenter);
  } else {
    firstColumn = reviews;
  }

  const getReviews = (array: Review[]): JSX.Element[] => (
    array.map((item) => {
      const date: Date = new Date(item.date);
      return (
        <div className="review" key={item.id}>
          <blockquote className="review__quote">
            <p className="review__text">{item.comment}</p>
            <footer className="review__details">
              <cite className="review__author">{item.user.name}</cite>
              <time className="review__date" dateTime={item.date}>{getDate(date)}</time>
            </footer>
          </blockquote>
          <div className="review__rating">{item.rating}</div>
        </div>
      );
    })
  );

  return (
    <div className="film-card__reviews film-card__row">
      {isFilmReviewsLoading
        ? <Spiner />
        :
        <>
          <div className="film-card__reviews-col">
            {getReviews(firstColumn)}
          </div>
          {secondColumn.length > 0 &&
            <div className="film-card__reviews-col">
              {getReviews(secondColumn)}
            </div>}
        </>}
    </div>
  );
}

export default ReviewsTab;
