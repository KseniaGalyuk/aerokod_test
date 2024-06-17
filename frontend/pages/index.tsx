import Advantages from '@/components/organisms/Advantages/Advantages';
import { NextPage } from 'next';
import PropTypes from 'prop-types';

interface HomePageProps {
  advantages: {
    title: string;
    items: AdvantageItem[];
  };
}
interface AdvantageItem {
  id: number;
  title: string;
  description: string;
  image: {
    src: string;
  };
}

const HomePage: NextPage<HomePageProps> = ({ advantages }) => (
  <div className="w-full min-h-screen overflow-hidden flex flex-col">
    <header className="bg-light-blue mb-10">
      <div className="container">
        <div className="py-4 md:py-6">
          <h3>
            Тестовое задание
            <span className="text-blue ml-2 md:ml-3">
              Slider-Beautiful
            </span>
          </h3>
        </div>
      </div>
    </header>

    <main className="flex-auto">
      <Advantages advantages={advantages} />
    </main>
    <footer className="bg-light-blue">
      <div className="container ">
        <div className="py-4 md:py-6">
          <h3 className="">Спасибо за внимание, хорошего дня)</h3>
        </div>
      </div>
    </footer>
  </div>
);

HomePage.propTypes = {
  advantages: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
};

export default HomePage;

export async function getStaticProps() {
  const response = await fetch('http://localhost:3001/slider');
  const advantages = await response.json();

  return {
    props: { advantages },
  };
}
