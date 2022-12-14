import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import PlacePopup from './PlacePopup';
import Register from './Register';
import Login from './Login';
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from './ProtectedRoute';
import * as auth from '../utils/auth.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [placePopupState, setPlacePopupState] = React.useState({ isOpen: false, card: null });
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  // В корневом компоненте App создана стейт-переменная currentUser. Она используется в качестве значения для провайдера контекста.
  const [currentUser, setCurrentUser] = React.useState({});

  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
  const [tooltipStatus, setTooltipStatus] = React.useState('');

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  //В компоненты добавлены новые стейт-переменные: email — в компонент App
  const [email, setEmail] = React.useState('');

  const history = useHistory();

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token && isLoggedIn) {
      api.getAppInfo(token)
        .then(([cardData, userData]) => {
          setCurrentUser(userData.data);
          setCards(cardData.data);
        })
        .catch(err => console.log(err))
    }
  }, [isLoggedIn])

  // при монтировании App описан эффект, проверяющий наличие токена и его валидности
  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth.checkToken(token).then((res) => {
        if (res) {
          setEmail(res.data.email);
          setIsLoggedIn(true);
          history.push('/');
        } else {
          localStorage.removeItem('jwt');
        }
      })
        .catch(err => console.log(err));
    }
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setPlacePopupState({ isOpen: true, card: null });
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setPlacePopupState({ isOpen: false, card: null });
    setIsEditAvatarPopupOpen(false);
    setIsInfoToolTipOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(userUpdate) {
    api.setUserInfo(userUpdate, localStorage.getItem("jwt")).then((newUserData) => {
      setCurrentUser(newUserData.data);
      closeAllPopups();
    })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatarUpdate) {
    api.setUserAvatar(avatarUpdate, localStorage.getItem("jwt")).then((newUserData) => {
      setCurrentUser(newUserData.data);
      closeAllPopups();
    })
      .catch((err) => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked, localStorage.getItem("jwt")).then((newCard) => {
      setCards(cards => cards.map((c) => c._id === card._id ? newCard.data : c));
    })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api.removeCard(card._id, localStorage.getItem("jwt")).then(() => {
      setCards(cards => cards.filter((c) => c._id !== card._id));
    })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(newCard) {
    api.addCard(newCard, localStorage.getItem("jwt")).then((newCardFull) => {
      setCards([newCardFull.data, ...cards]);
      closeAllPopups();
    })
      .catch((err) => console.log(err));
  }

  function handleEditPlaceSubmit(data, id) {
    api.updateCard(data, id, localStorage.getItem("jwt")).then((updatedCard) => {
      setCards(cards => cards.map((c) => c._id === id ? updatedCard.data : c));
      closeAllPopups();
    })
      .catch((err) => console.log(err));
  }

  function onRegister({ email, password }) {
    auth.register(email, password)
      .then((res) => {
        if (res.data._id) {
          setTooltipStatus('success');
          setIsInfoToolTipOpen(true);
          const userData = {
            email,
            password
          }
          onLogin(userData);
        } else {
          // невалидные данные
          setTooltipStatus('fail');
          setIsInfoToolTipOpen(true);
        }
      })
      .catch((err) => {
        setTooltipStatus('fail');
        setIsInfoToolTipOpen(true);
      });
  }

  function onLogin({ email, password }) {
    auth.login(email, password).then((res) => {
      if (res.token) {
        // при вызове обработчика onLogin происходит сохранение jwt
        localStorage.setItem('jwt', res.token);
        setEmail(email);
        setIsLoggedIn(true);
        // После успешной авторизации происходит редирект на /
        history.push('/');
      } else {
        // невалидные данные
        setTooltipStatus('fail');
        setIsInfoToolTipOpen(true);
      }
    })
      .catch((err) => {
        setTooltipStatus('fail');
        setIsInfoToolTipOpen(true);
      });
  }

  function onSignOut() {
    // при вызове обработчика onSignOut происходит удаление jwt
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    // После успешного вызова обработчика onSignOut происходит редирект на /signin
    history.push('/signin');
  }

  return (
    // В компонент App внедрён контекст через CurrentUserContext.Provider
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <Header email={email} onSignOut={onSignOut}/>
        <Switch>
          {/*Роут / защищён HOC-компонентом ProtectedRoute*/}
          <ProtectedRoute
            exact path="/"
            component={Main}
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onCardEdit={(card) => setPlacePopupState({ isOpen: true, card })}
            loggedIn={isLoggedIn}
          />
          {/*Роут /signup и /signin не является защищёнными, т.е оборачивать их в HOC ProtectedRoute не нужно.*/}
          <Route path="/signup">
            <Register onRegister={onRegister}/>
          </Route>
          <Route path="/signin">
            <Login onLogin={onLogin}/>
          </Route>
        </Switch>
        <Footer/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser} onClose={closeAllPopups}/>
        <PlacePopup {...placePopupState} onEditPlace={handleEditPlaceSubmit} onAddPlace={handleAddPlaceSubmit} onClose={closeAllPopups}/>
        <PopupWithForm title="Вы уверены?" name="remove-card" buttonText="Да"/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onUpdateAvatar={handleUpdateAvatar} onClose={closeAllPopups}/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        <InfoTooltip isOpen={isInfoToolTipOpen} onClose={closeAllPopups} status={tooltipStatus}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
