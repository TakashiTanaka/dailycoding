import data from './data.json';

function App() {
  return (
    <div className='bg-black text-white'>
      <header></header>
      <main>
        <h1 className='text-5xl'>Daily Coding</h1>
        {data.map(info => {
          return (
            <>
              <p className='text-4xl'>{info.year}</p>
              <div className='text-lg'>
                {info.sketches.map(sketche => (
                  <div className='flex'>
                    <p>{sketche.date}</p>
                    <p>{sketche.title}</p>
                    <p>{sketche.memo}</p>
                    <p>{sketche.tag[0]}</p>
                    <a
                      className="bg-white text-black"
                      href={sketche.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      作品を見る
                    </a>
                  </div>
                ))}
              </div>
            </>
          );
        })}
      </main>
    </div>
  );
}

export default App;
