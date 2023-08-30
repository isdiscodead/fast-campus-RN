import React from 'react';
import {NavigationBar} from './NavigationBar';
import {TabIcon} from './TabIcon';

type Props = {};

export default function NavTabBar({}: Props) {
  return (
    <NavigationBar>
      <TabIcon
        visibleBadge={false}
        iconName="stats-chart-outline"
        iconColor="white"
      />
      <TabIcon visibleBadge={false} iconName="home" iconColor="white" />
      <TabIcon
        visibleBadge={false}
        iconName="settings-outline"
        iconColor="white"
      />
    </NavigationBar>
  );
}
