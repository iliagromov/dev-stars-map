/* eslint-disable no-console */
import { ref } from 'vue';
// import VueUploadComponent from 'vue-upload-component/src/FileUpload.vue';
import type { VueUploadItem } from 'vue-upload-component';
// Composables
import useStoreDesignConfig from 'src/composables/useStoreDesignConfig';

export default function useFileUpload() {
  const imageData = ref();
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
      // 创建 blob 字段
      newFile.blob = '';
      const URL = (window.URL || window.webkitURL);
      if (URL) {
        newFile.blob = URL.createObjectURL(newFile.file);
      }
      // Thumbnails
      // 缩略图
      newFile.thumb = '';
      if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        newFile.thumb = newFile.blob;
        // set
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        await setBackgroundFilename(newFile.blob);
      }
    }
    console.log('test');
  };
  const inputFile = async (newFile: VueUploadItem | undefined, oldFile: unknown | undefined) => {
    if (newFile && !oldFile) {
      // add
      console.log('add', newFile);
      console.log('add', newFile.blob);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      await setBackgroundFilename(newFile.blob);
    }
    if (newFile && oldFile) {
      // update
      console.log('update', newFile);
    }
    if (!newFile && oldFile) {
      // remove
      console.log('remove', oldFile);
    }
    // returning a Promise
    console.log('test');
  };

  return {
    upload,
    files,
    imageData,
    inputFile,
    inputFilter,
  };
}
