import { ofType } from 'vue-tsx-support';

import { Positionable, Routable, Transitionable } from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VSpeedDial').VSpeedDial,
);

type Props = Positionable &
  Routable &
  Transitionable & {
    direction?: 'top' | 'right' | 'bottom' | 'left';
    mode?: string;
    openOnHover?: boolean;
    value?: any;
  };

type Events = {
  onInput: any;
};