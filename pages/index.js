import useSWR, { SWRConfig } from 'swr';
import fetch from 'unfetch';
import Link from 'next/link';

import FoodSearchBox from '../components/FoodSearchBox';

const Home = () => {
  return (
    <div className="container">
      <main>
        <h1 className="title">What&rsquo;s on Your Plate?</h1>
        <p className="description">Let&rsquo;s fill this plate&hellip;</p>
        <FoodSearchBox />
      </main>
    </div>
  );
};

export default Home;
