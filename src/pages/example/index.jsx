import React from "react";
import { inject, observer, useLocalStore } from 'mobx-react';
import Store from './store';
import { Button } from "antd";
function Example(props) {
  const { count } = props;
  const store =  useLocalStore(() => Store);

  const handleClick = () => {
    store.count +=1;
    // setTimeout(() => {
    //   alert(count);
    // }, 3000);
  };
  console.log('ppppppppppppppp',store)
  return (
    <div>
      <h2>Function</h2>
      <p>{count}</p>
      <p>{store.count}</p>
      <Button type="primary" onClick={handleClick}>
        click me
      </Button>
    </div>
  );
}

export default inject('logan')(observer(Example));
