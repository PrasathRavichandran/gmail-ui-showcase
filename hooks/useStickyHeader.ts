import { useCallback, useState } from "react";
import { LayoutChangeEvent, NativeScrollEvent } from "react-native";
import {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ANCHOR_INIT = -9999;

export default function useStickyHeader() {
  const [headerBarHeight, setHeaderBarHeight] = useState(70);

  const safeAreaInsets = useSafeAreaInsets();

  const anchorY = useSharedValue(ANCHOR_INIT); // -9999
  const translateY = useSharedValue(0);
  const progressY = useSharedValue(0);

  const minY = -headerBarHeight; // -68
  const maxY = safeAreaInsets.top; // 59

  const handleNoteListLayout = useCallback((e: LayoutChangeEvent) => {
    setHeaderBarHeight(e.nativeEvent.layout.height);
  }, []);

  const handleEndDrag = (event: NativeScrollEvent) => {
    "worklet";
    if (progressY.value > 0.5 || event.contentOffset.y < headerBarHeight) {
      translateY.value = withTiming(maxY);
    } else {
      translateY.value = withTiming(minY);
    }
  };

  const handleScroll = useAnimatedScrollHandler(
    {
      onBeginDrag: (event) => {
        anchorY.value = event.contentOffset.y;
      },
      onScroll: (event) => {
        const offsetY = event.contentOffset.y; // -59
        let distY = offsetY - anchorY.value; // at initial anchorY.value is -9999 and when starting drag it became -59, so offsetY also -59 so distY will be 0.

        if (anchorY.value === ANCHOR_INIT) distY = offsetY;

        translateY.value =
          offsetY <= -safeAreaInsets.top
            ? maxY
            : Math.max(minY, Math.min(maxY, translateY.value - distY));
        anchorY.value = offsetY;
        progressY.value = interpolate(translateY.value, [minY, maxY], [0, 1]);
      },
      onEndDrag: handleEndDrag,
      onMomentumEnd: handleEndDrag,
    },
    [minY, maxY, headerBarHeight]
  );

  const headerBarStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));

  return {
    headerBarHeight,
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
  };
}
