import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Counter(props) {
  const [count = 0, setCount] = useState(props.start);

  useEffect(() => {
    
  });

  return <div>
    <p>Counter: {count}</p>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
  </div>
}

Counter.propTypes = {
  count: PropTypes.number
}

export default Counter;