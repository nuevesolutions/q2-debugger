import { Theme } from '@silicon-ui/atoms/lib/themes';
import { base } from '@theme-ui/presets';

const theme: Theme = {
  ...base,
  name: 'base',
  primaryColor: base.colors.primary,
  secondaryColors: base.colors.secondary
};

export default theme;
