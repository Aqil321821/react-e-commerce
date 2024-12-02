import { createContext, useContext } from 'react';

const savePostContext = createContext({
  savePost: [],
  setSavePost: () => {},
});
function useSavePost() {
  return useContext(savePostContext);
}
const SavePostProvider = savePostContext.Provider;

export { SavePostProvider, savePostContext };
export default useSavePost;
