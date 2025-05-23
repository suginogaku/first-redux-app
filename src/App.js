import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, login } from './actions/index';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello redux</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={() => dispatch(increment(7))}>+</button>
      {isLogin ? (
        <h3>ログイン中</h3>
      ) : (
        <h3>ログインしてください</h3>
      )}
      <button onClick={() => dispatch(login())}>ログイン or ログアウト</button>
    </div>
  );
}

export default App;
