import { DeviceStateEvent } from 'seng-device-state-tracker';
import { mapMutations, mapState } from 'vuex';
import { SET_DEVICE_STATE } from '../store/module/app/app';
import HeaderComponent from './../component/HeaderComponent'
import FooterComponent from './../component/FooterComponent'

const detailComponent = {
  HeaderComponent,
  FooterComponent
};
// @vue/component
export default {
  name: 'App',
  components: detailComponent,
  computed: {
    ...mapState({
      deviceState: state => state.app.deviceState,
    }),
  },
  created() {
    this.$deviceStateTracker.addEventListener(
      DeviceStateEvent.STATE_UPDATE,
      this.handleDeviceStateUpdate,
    );
    this.setDeviceState(this.$deviceStateTracker.currentState);
  },
  methods: {
    ...mapMutations({
      setDeviceState: SET_DEVICE_STATE,
    }),
    handleDeviceStateUpdate(event) {
      this.setDeviceState(event.data.state);
    },
  },
};
