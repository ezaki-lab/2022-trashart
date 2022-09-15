import { useAtom } from 'jotai';
import {
  homeSectionAtom,
  homeModeAtom,
  craftSectionAtom,
  craftModeAtom,
  separateSectionAtom,
  separateModeAtom,
  albumSectionAtom,
  albumModeAtom
} from '../models/stores';
import useHeadRoute from './useHeadRoute';

// セッションデータ
const useSession = () => {
  const [homeSection, setHomeSection] = useAtom(homeSectionAtom);
  const [homeMode, setHomeMode] = useAtom(homeModeAtom);

  const [craftSection, setCraftSection] = useAtom(craftSectionAtom);
  const [craftMode, setCraftMode] = useAtom(craftModeAtom);

  const [separateSection, setSeparateSection] = useAtom(separateSectionAtom);
  const [separateMode, setSeparateMode] = useAtom(separateModeAtom);

  const [albumSection, setAlbumSection] = useAtom(albumSectionAtom);
  const [albumMode, setAlbumMode] = useAtom(albumModeAtom);

  const route = useHeadRoute();

  let section = homeSection;
  let setSection = setHomeSection;
  let mode = homeMode;
  let setMode = setHomeMode;

  if (route === '/craft') {
    section = craftSection;
    setSection = setCraftSection;
    mode = craftMode;
    setMode = setCraftMode;

  } else if (route === '/separate') {
    section = separateSection;
    setSection = setSeparateSection;
    mode = separateMode;
    setMode = setSeparateMode;

  } else if (route === '/album') {
    section = albumSection;
    setSection = setAlbumSection;
    mode = albumMode;
    setMode = setAlbumMode;
  }

  return { section, setSection, mode, setMode };
};

export default useSession;
