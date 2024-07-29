import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <div>
        <h1>Hello, JSX!</h1>
        <p>This is a paragraph in JSX.</p>
      </div>
    );
  }
});
