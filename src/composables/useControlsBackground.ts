// Vendor
import { ref, watch } from 'vue';

// Config
import { BACKGROUNDS } from 'src/config';

// Composables
import useStoreDesignConfig from 'src/composables/useStoreDesignConfig';

interface Background {
  path: string;
  filename: string;
  active: boolean;
}

export default function useControlsBackground() {
  const backgrounds = ref<Background[]>(null);

  backgrounds.value = BACKGROUNDS.map((filename: string) => ({
    active: false,
    path: `./images/backgrounds/${filename}.svg`,
    filename,
  }));

  const {
    backgroundFilename,
    setBackgroundFilename,
    unsetBackgroundFilename,
  } = useStoreDesignConfig();

  watch(backgroundFilename, (activeBgFilename) => {
    backgrounds.value.forEach((bg) => {
      bg.active = bg.filename === activeBgFilename;
    });
  });

  /** Выбор фона */
  const selectBackground = async (bg2: Background) => {
    if (bg2.active) {
      await unsetBackgroundFilename();
    } else {
      await setBackgroundFilename(bg2.path);
    }
  };

  return {
    backgrounds,
    selectBackground,
  };
}
