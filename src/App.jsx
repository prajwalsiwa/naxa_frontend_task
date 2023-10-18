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
        <div key={item.id}>
        <div>{item.title}</div>
        <div>{item.description1}</div>
        <div>{item.description2}</div>
        <div>
          <img src={item.photo} alt={item.title} />
        </div>
        <div>
          <img src={item.icon} alt={item.title} />
        </div>
        <div>{item.service_order}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

