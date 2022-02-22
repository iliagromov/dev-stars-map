import { ref } from 'vue';

export default function useFileUpload() {
  // const upload = ref(null);

  const files = ref([]);

  // const inputFilter = (newFile, oldFile, prevent) => {
  //   if (newFile && !oldFile) {
  //     // Before adding a file
  //     // Filter system files or hide files
  //     if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
  //       return prevent()
  //     }

  //     // Filter php html js file
  //     if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
  //       return prevent()
  //     }
  //   }
  // };

  // const inputFile = (newFile, oldFile) => {
  //   if (newFile && !oldFile) {
  //     // add
  //     // eslint-disable-next-line no-console
  //     console.log('add', newFile);
  //   }
  //   if (newFile && oldFile) {
  //     // update
  //     // eslint-disable-next-line no-console
  //     console.log('update', newFile);
  //   }

  //   if (!newFile && oldFile) {
  //     // remove
  //     // eslint-disable-next-line no-console
  //     console.log('remove', oldFile);
  //   }
  // };

  return {
    files,
  };
}
