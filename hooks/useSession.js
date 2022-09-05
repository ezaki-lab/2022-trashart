import { useAtom } from 'jotai';
import { sectionAtom, modeAtom } from '../models/stores';

// セッションデータ
const useSession = () => {
  const [section, setSection] = useAtom(sectionAtom);
  const [mode, setMode] = useAtom(modeAtom);

  return { section, setSection, mode, setMode };
};

export default useSession;
