// useState를 통해, react component에 종속되지 않고도 react의 event를 처리 가능.
// 이벤트를 분리된 파일, 다른 entity에 연결해서 처리 가능.
import {ChangeEvent, useState} from "react";

export interface Vaildate {
    maxLen: (value: string) => Boolean
}

export const vaildates: Vaildate = {
    maxLen: (value) => value.length <= 10,
}

const useInput = (initalValue: string, vaildator?: Function) => {
    const [value, setValue] = useState(initalValue);
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target: { value } } = event;
        let willUpdate = true;

        if (typeof vaildator === 'function') willUpdate = vaildator(value);
        if (willUpdate) setValue(value);
    }

    return { value, onChange };
}

export default useInput;