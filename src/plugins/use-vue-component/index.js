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
      this.app = createApp(h(component, this.props));
      if (this.dom) {
        this.app.mount(this.dom)
      }
    }
    render() {
      return(<div ref={(dom) => { this.dom = dom }}></div>)
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
