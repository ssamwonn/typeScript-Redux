import * as React from "react";
import { useState, useRef, useCallback } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭헤서 시작하세요");
  const [result, setResult] = useState<number[]>([]);
  const timeout = useRef<number | null>(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onReset = useCallback(() => {
    setResult([]);
  },[]);

  const renderAverage = () => {
    return result.length === 0 ? null 
    : <>
      <div>평균시간 : {result.reduce(( a, c ) => a + c / result.length} ms </div>
      <button onClick={onReset} > 리셋</button>
    </>
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
