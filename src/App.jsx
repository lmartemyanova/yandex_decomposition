import Currency from './components/Currency';
import HeaderLinks from './components/HeaderLinks';
import PromoBlock from './components/PromoBlock';
import YandexLogo from './components/YandexLogo';
import TeleprogramList from './components/TeleprogramList';
import MapItem from './components/MapItem';
import SearchBar from './components/SearchBar';
import PromoBanner from "./components/PromoBanner";
import TvChannel from "./components/TvChannel";
import Weather from "./components/Weather";
import VisitedLinks from "./components/MostVisitedLinks";
import TopNewsBlock from "./components/TopNewsBlock";

import './App.css';


function App() {
  return (
    <div className="container">
    
      <div className="top-section">
        <div className='top-left'>
        <TopNewsBlock
          tabs={["Сейчас в СМИ", "В Германии", "Рекомендуем"]}
          allNews={{
            "Сейчас в СМИ": [
              {
                icon: "https://img.icons8.com/?size=100&id=111271&format=png&color=000000",
                text: "Путин упростил получение автомобильных номеров",
                link: "#",
              },
              {
                icon: "https://img.icons8.com/?size=100&id=111271&format=png&color=000000",
                text: "В команде Зеленского раскрыли план реформ",
                link: "#",
              },
            ],
            "В Германии": [
              {
                icon: "https://img.icons8.com/?size=100&id=111271&format=png&color=000000",
                text: "Германия отменила некоторые визовые требования",
                link: "#",
              },
            ],
            "Рекомендуем": [
              {
                icon: "https://img.icons8.com/?size=100&id=111271&format=png&color=000000",
                text: "Эксперты рассказали, как накопить на отпуск",
                link: "#",
              },
            ],
          }}
        />
        <div className='currency-block'>
          <Currency name="USD MOEX" value="63,52" change="+0,09" />
          <Currency name="EUR MOEX" value="70,86" change="+0,14" />
        </div>
        </div>
        <div className="top-side">
          <PromoBlock
            image="https://russianmagnets.com/images/stories/virtuemart/product/resized/Rabota_nad_osibkami_Green-site6_400x400.jpg"
            alt="Работа над ошибками"
            title="Работа над ошибками"
            subtitle="Смотрите на Яндексе и запоминайте"
          />
        </div>
      </div>

      

      <div className="search-bar-wrapper">
        <YandexLogo icon="/images/yandex.png" />
        <div className="search-section">
          <HeaderLinks text="Видео" link="#" />
          <HeaderLinks text="Картинки" link="#" />
          <HeaderLinks text="Новости" link="#" />
          <HeaderLinks text="Карты" link="#" />
          <HeaderLinks text="еще" link="#" />
          <SearchBar example="корги в тапках" />
        </div>
      </div>

      <PromoBanner
        banner="https://i.postimg.cc/xTQsvRf4/faf-rb-17421-1.jpg"
        promoName="Форсаж 9"
        promoLink="https://www.kinopoisk.ru/film/964318/?utm_referrer=www.google.com"
      />

      <div className="main-blocks">
        <div className="column">
          <Weather
            link="#"
            image="https://img.icons8.com/office/40/rain.png"
            currentTemperature="+17°"
            morningTemperature="+17"
            dayTemperature="+20"
          />

          <div className="visited-links-block">
            <a href="#" className="teleprogram-title"><h3>Посещаемое</h3></a>
            <VisitedLinks
              link="#"
              title="Недвижимость"
              content="о сталинках"
            />
            <VisitedLinks
              link="#"
              title="Маркет"
              content="люстры и светильники"
            />
            <VisitedLinks
              link="#"
              title="Авто.ру"
              content="привод 4х4 до 500 000"
            />
          </div>
        </div>

        <div className="column">
          <div className="map-block">
            <a href="#" className="map"><h3>Карта Германии</h3></a>
            <MapItem 
              link="#"
              schedule="Расписания"
            />
          </div>

          <TeleprogramList broadcastLink="#" />
        </div>

        <div className="column">
          <a href="#" className="teleprogram-title"><h3>Эфир</h3></a>
          <TvChannel
            icon="📺"
            channel="Управление как искусство"
            category="Успех"
            link="#"
          />
        </div>
        
      </div>
    </div>
  );
}

export default App
