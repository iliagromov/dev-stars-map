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
    path: `/images/backgrounds/${filename}.svg`,
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
  const selectBackground = async (bg: Background) => {
    if (bg.active) {
      await unsetBackgroundFilename();
    } else {
      await setBackgroundFilename(bg.filename);
    }
  };

  return {
    backgrounds,
    selectBackground,
  };
}
