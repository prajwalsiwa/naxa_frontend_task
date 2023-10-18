import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDataRequest } from './redux/action';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="App">
       {data.map((item) => (
        <div key={item.id} className='services'>
          <div className="section1">

        <div className='photo-section'>
          <img src={item.photo} alt={item.title} />
        </div>
          </div>
          <div className="section2">
        <div className='services-icon'>
          <img src={item.icon} alt={item.title} />
        </div>
        <div className='title'>{item.title}</div>
        <div className='description1'>{item.description1}</div>
        <div className='description2'>{item.description2}</div>
        <div>{item.service_order}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

