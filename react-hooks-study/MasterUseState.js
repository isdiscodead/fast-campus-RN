import React from 'react'

const heavyWork = () => {
    console.log("엄청 무거운 작업 !! ");
    return ['홍길동', '김민수'];
}


export default function MasterUseState() {
    // 아래 코드는 리렌더링 될 때마다 매번 실행됨
    // const [names, setNames] = useState(heavyWork());  
    const [names, setNames] = useState(() => {
        return heavyWork();
    });

  return (
    <div>MasterUseState</div>
  )
}
