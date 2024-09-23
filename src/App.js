import { info } from './Data';

function App() {
  const cardinfo = info.map((data) => {
    return (
      <div className="w-full sm:w-1/2 mt-3 md:w-1/3 px-3">
        <div className="card p-3 min-h-[150px] border border-black flex flex-col justify-between hover:bg-red-50 shadow-lg">
          <div>
            <h2 className="text-lg font-bold text-red-700">{data.title}</h2>
            <p className="pt-2">{data.description}</p>
          </div>
          <a href={data.link} target='_blank' className="border font-semibold transition-all duration-500 hover:bg-black hover:text-white border-yellow-300 rounded-full px-2 py-1 max-w-max">{data.btn}</a>
        </div>
      </div>
    )
  });
  return (
    <div className="flex items-center min-h-screen">
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex-wrap -mx-3 flex">
          {cardinfo}
        </div>
      </div>
    </div>
  );
}

export default App;
