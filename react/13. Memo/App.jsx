import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');

  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
    // 설정한 직후에는 사용이 불가하다 (스케줄이 이후로 설정됨)
    //setChosenCount((prevCount) => prevCount + 1);
    console.log(chosenCount); // won't work!
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount}/>
        <Counter key={chosenCount} initialCount={chosenCount} />
        <Counter initialCount={0} />
      </main>
    </>
  );
}

export default App;
