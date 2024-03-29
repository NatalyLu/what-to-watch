import { SyntheticEvent } from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../enums';
import {useAppSelector, useAppDispatch} from '../../hooks';
import useCheckAuthStatus from '../../hooks/useCheckAuthStatus';
import {logoutAction} from '../../store/user/api-actions';
import { getUserData } from '../../store/user/selectors';

function SignIn(): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);
  const isAuth = useCheckAuthStatus();

  const handleLinkClick = (evt: SyntheticEvent) : void=> {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    isAuth
      ? (
        <ul className="user-block">
          <li className="user-block__item">
            <Link className="user-block__avatar" style={{display: 'block'}} to={AppRoute.MyList}>
              <img src={userData && userData.avatarUrl} alt="User avatar" width="63" height="63" />
            </Link>
          </li>
          <li className="user-block__item">
            <Link className="user-block__link" onClick={handleLinkClick} to='/'>Sign out</Link>
          </li>
        </ul>
      )
      : (
        <div className="user-block">
          <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
        </div>
      )
  );
}

export default SignIn;
