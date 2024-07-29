const styles = {
  red: {
    color: 'red',
  }
}
import { defineComponent, ref, toRefs, watch } from 'vue';

interface Props {
  data?: string;
}

export default defineComponent({
  name: 'text-v3-ts1',
  props: {
    data: {
      type: String,
      default: 'john'
    }
  },
  setup(props: Props) {
    const { data } = toRefs(props);
    const text = ref(data.value);

    watch(data, (value, oldValue) => {
      if (value!== oldValue) {
        text.value = value;
      }
    });

    return () => (
      <div className="red">hello world, this is {text.value}</div>
    );
  }
});
