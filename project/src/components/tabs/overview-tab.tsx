import {Review} from '../../types/types';

type OverviewTabProps = {
  review: Review;
}

function OverviewTab(props: OverviewTabProps): JSX.Element {
  const {review} = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{review.rating.score}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{review.rating.level}</span>
          <span className="film-rating__count">{review.rating.count}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{review.text.first}</p>
        {review.text.second && <p>{review.text.second}</p>}
        <p className="film-card__director"><strong>{review.director}</strong></p>
        <p className="film-card__starring"><strong>{review.starring}</strong></p>
      </div>
    </>
  );
}

export default OverviewTab;