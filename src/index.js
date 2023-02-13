import React from "react";
import * as ReactDOM from "react-dom";
import {createRoot} from "react-dom/client"
import  App  from "./App";
import "./public-path"



const render = (props) => {
  
  // const { container, store, incrementCounter } = props;
  const { container } = props;
  const root = createRoot(container?.querySelector("#root") || document.getElementById("root"));
  root.render(
    // <Provider store={store}>
      // <App increment={incrementCounter}/>
      <App/>
    // </Provider>
  );
};

export async function bootstrap() {
  console.log("[FRONTEND APP PRODUCT] bootstraped");
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  const root = createRoot( document.getElementById("root"));
  root.render(
   
      <App />
   
  );
}

export async function mount(props) {
  render(props);
  console.log("[FRONTEND APP PRODUCT] mount with props", props);
}

export async function unmount(props) {
  const { container } = props;
  const root = container?.querySelector("#root") || document.getElementById("root");

  if (root) {
    ReactDOM.unmountComponentAtNode(root);
  }
}


