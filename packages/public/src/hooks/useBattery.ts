import { useEffect, useRef, useState } from 'react';

interface BatteryManager extends EventTarget {
  readonly charging: boolean;
  readonly chargingTime: number;
  readonly dischargingTime: number;
  readonly level: number;
}

interface BatteryNavigator extends Navigator {
  getBattery?: () => Promise<BatteryManager>;
}

/**
 * This pretty useless
 */
export const useBatterySaver = () => {
  const [batterySaver, setBatterySaver] = useState<boolean>();
  const batteryRef = useRef<BatteryManager | undefined>();
  useEffect(() => {
    const handleLevelChange = () => {
      if (batteryRef.current != null) {
        // if supported when charging or at 30% is the minimum level of battery to use light theme
        setBatterySaver(
          !batteryRef.current.charging && batteryRef.current.level < 0.3
        );
      }
    };
    ((navigator as BatteryNavigator).getBattery?.() ?? Promise.reject()).then(
      (battery) => {
        batteryRef.current = battery;
        handleLevelChange();
        batteryRef.current.addEventListener('levelchange', handleLevelChange);
        batteryRef.current.addEventListener('chargingchange', handleLevelChange);
      },
      () => {
        setBatterySaver(false);
      }
    );
    return () => {
      batteryRef.current?.removeEventListener('levelchange', handleLevelChange);
      batteryRef.current?.removeEventListener(
        'chargingchange',
        handleLevelChange
      );
      batteryRef.current = undefined;
    };
  }, []);
  return batterySaver;
};
