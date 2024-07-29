import React from "react";
import { createApp, h } from "vue";

export function uvc(component) {
  return class VueComponent extends React.Component {
    dom = null;
    app = null;
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      const createMyApp = () => createApp(h(component, this.props));
      this.app = createMyApp();
      if (this.dom) {
        this.app.mount(this.dom)
      }
    }
    render() {
      return React.createElement('div', {
        ref: (dom) => { this.dom = dom },
      })
    }
    componentWillUnmount() {
      if (this.app) {
        this.app.unmount();
      }
    }
    componentm
  };
}
export function uvi(component) {
  Vue.use(component);
}
