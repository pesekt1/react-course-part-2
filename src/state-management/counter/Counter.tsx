import useCounterStore from "./store";

const Counter = () => {
  const { counter, increment, reset, setMax } = useCounterStore();

  return (
    <div>
      Counter ({counter})
      <button onClick={() => increment()} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary mx-1">
        Reset
      </button>
      <button onClick={() => setMax(10)} className="btn btn-primary mx-1">
        Set Max
      </button>
    </div>
  );
};

export default Counter;
