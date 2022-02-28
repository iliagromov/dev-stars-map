/* eslint-disable no-console */
import { ref } from 'vue';
import type { VueUploadItem } from 'vue-upload-component';
// Composables
import useStoreDesignConfig from 'src/composables/useStoreDesignConfig';

export default function useFileUpload() {
  const upload = ref();
  const files = ref([]);
  const {
    setBackgroundFilename,
  } = useStoreDesignConfig();

  const inputFilter = async (
    newFile: VueUploadItem | undefined,
    oldFile: VueUploadItem | undefined,
    // prevent: (prevent?: boolean) => boolean
  ) => {
    if (newFile && newFile.error === '' && newFile.file && (!oldFile || newFile.file !== oldFile.file)) {
      // Create a blob field
      newFile.blob = '';
      const URL = (window.URL || window.webkitURL);
      if (URL) {
        newFile.blob = URL.createObjectURL(newFile.file);
      }
      // Thumbnails
      newFile.thumb = '';
      if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        newFile.thumb = newFile.blob;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        await setBackgroundFilename(newFile.blob);
      }
    }
  };
  const inputFile = async (newFile: VueUploadItem | undefined, oldFile: unknown | undefined) => {
    if (newFile && !oldFile) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      await setBackgroundFilename(newFile.blob);
    }
    if (newFile && oldFile) {
      // update
      // console.log('update', newFile);
    }
    if (!newFile && oldFile) {
      // remove
      // console.log('remove', oldFile);
    }
  };

  return {
    upload,
    files,
    inputFile,
    inputFilter,
  };
}
