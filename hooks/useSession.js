import { useAtom } from 'jotai';
import {
  albumSectionAtom,
  albumModeAtom,
  craftSectionAtom,
  craftModeAtom,
  separateSectionAtom,
  separateModeAtom
} from '../models/stores';
import useHeadRoute from './useHeadRoute';

// セッションデータ
const useSession = () => {
  const [albumSection, setAlbumSection] = useAtom(albumSectionAtom);
  const [albumMode, setAlbumMode] = useAtom(albumModeAtom);

  const [craftSection, setCraftSection] = useAtom(craftSectionAtom);
  const [craftMode, setCraftMode] = useAtom(craftModeAtom);

  const [separateSection, setSeparateSection] = useAtom(separateSectionAtom);
  const [separateMode, setSeparateMode] = useAtom(separateModeAtom);

  const route = useHeadRoute();

  if (route === '/home' || route === '/album') {
    const section = albumSection;
    const setSection = setAlbumSection;
    const mode = albumMode;
    const setMode = setAlbumMode;

    return { section, setSection, mode, setMode };

  } else if (route === '/craft') {
    const section = craftSection;
    const setSection = setCraftSection;
    const mode = craftMode;
    const setMode = setCraftMode;

    return { section, setSection, mode, setMode };

  } else if (route === '/separate') {
    const section = separateSection;
    const setSection = setSeparateSection;
    const mode = separateMode;
    const setMode = setSeparateMode;

    return { section, setSection, mode, setMode };

  } else {
    const section = albumSection;
    const setSection = setAlbumSection;
    const mode = albumMode;
    const setMode = setAlbumMode;

    return { section, setSection, mode, setMode };
  }
};

export default useSession;
