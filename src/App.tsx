import BreadBox from './features/bread-box';
import BreadSlider from './features/bread-slider/bread-slider';

import Header from './features/common/header';
import Hero from './features/common/hero';

function App() {
  return (
    <div className="container mx-auto my-4 space-y-10">
      <Header />
      <Hero />
      <BreadSlider />
      <BreadBox />
    </div>
  );
}

export default App;
