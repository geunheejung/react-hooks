import React, {  useRef } from 'react';

const App = () => {
  /*
  *  react hook의 일종으로, 인자로 넘어온 초깃값을 useRef 객체의 current 프로퍼티에 저장.
  * 변경되어도 컴포넌트가 리렌더링되지 않도록 하기 위한 값들을 저장하기 위해서도 사용. -> useRef가 내용이 변경되어도 이를 알려주지 않는다. -> setState등 react의 라이프사이클 도구 사용을 하지 않기에, ->
  * useRef는 current 프로퍼티에 변경 가능한 값을 담고 있는 상자와 같다.
  * 함수의 초깃값을 current 프로퍼티에 저장만 한다.
  * 1. useRef<T>(initialValue: T): MutableRefObject<T>; -> 인자의 타입과 제네릭의 타입이 T -> MutableRefObject<T>를 반환. -> current 프로퍼티 그 자체를 직접 변경 가능하다.
  * 즉 초기값을 지정해줬을 경우 current 프로퍼티를 수정 가능함.
  * 2. useRef<T>(intialValue: T|null): RefObject<T>;
  * 인자의 타입이 null을 허용하는 경우, RefObject<T> 를 반환한다. -> current 프로퍼티는 readonly다.
  * 3. useRef<T = undefined>(): MutableRefObject<T | undefined>;
  * 제네릭의 타입이 undefined인 경우(타입 제공 안한 경우), MutableRefObject<T | undefined>를 반환한다.
  * */

  // 1. useRef를 로컬 변수 용도로 사용하는 경우.
  // MutableRefObject<T>를 사용해야 하므로 제네릭 타입과 같은 타입의 초깃값 <T>(T);
  // const localVarRef = useRef<number>(0);

  // 2. useRef가 2번 경우로, current 프로퍼티가 readonly인 RefObject를 반환.
  const localVarRef = useRef<number>(0);
  // 3. DOM을 직접 조작하기 위해 프로퍼티로 useRef 객체를 사용할 경우, ref 프로퍼티의 타입인 RefObject<T>를 맞춰야 하므로, 초깃값을 null을 넣어준다.
  const inputRef = useRef<HTMLInputElement>(null);
  // ref 프로퍼티 전달쪽에서 에러 -> ref 프로퍼티는 RefObject형만 받는데, inputRef는 정의 상 MutableRefObject가 되고, 이를 ref 프로퍼티에 넣으려해서.
  // const inputRef = useRef<HTMLInputElement>();

  const handleIncreseBtnClick = () => {
    if (typeof localVarRef.current === 'number') {
      localVarRef.current += 1;
      console.log('localVarRef', localVarRef.current);
    }
  }

  const handleClearBtnClick = () => {
    if (inputRef.current) {
      // current 프로퍼티는 readonly, 하위 프로퍼티는 가능. readonly의 shallow특성.
      inputRef.current.value = '';
    }

    // 로컬 변수 용도로 useRef를 사용하는 경우
    // if (typeof localVarRef.current === 'number') {
    //   localVarRef.current += 1;
    //   console.log('localVarRef', localVarRef.current);
    // }
  }

  return (
    <div className="App">
      <button onClick={handleIncreseBtnClick}>+1</button>

      <input type="text" ref={inputRef}/>
      <button onClick={handleClearBtnClick}>clear</button>
    </div>
  );
}

export default App;
