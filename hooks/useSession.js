import { useAtom } from 'jotai';
import { useCallback } from 'react';
import {
  homeSectionAtom,
  homeModeAtom,
  separateSectionAtom,
  separateModeAtom,
  craftSectionAtom,
  craftModeAtom,
  albumSectionAtom,
  albumModeAtom,
  sessionIdAtom,
  artsAtom,
  titleAtom,
  hashtagsAtom,
  shareImgAtom
} from '../models/stores';
import useHeadRoute from './useHeadRoute';

// セッションデータ
const useSession = () => {
  ///////////////////////////////////
  //  ページセッション
  ///////////////////////////////////

  const [homeSection, setHomeSection] = useAtom(homeSectionAtom);
  const [homeMode, setHomeMode] = useAtom(homeModeAtom);

  const [separateSection, setSeparateSection] = useAtom(separateSectionAtom);
  const [separateMode, setSeparateMode] = useAtom(separateModeAtom);

  const [craftSection, setCraftSection] = useAtom(craftSectionAtom);
  const [craftMode, setCraftMode] = useAtom(craftModeAtom);

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

  ///////////////////////////////////
  //  内部処理セッション
  ///////////////////////////////////

  const [, setSessionId] = useAtom(sessionIdAtom);
  const [, setArts] = useAtom(artsAtom);
  const [, setTitle] = useAtom(titleAtom);
  const [, setHashtags] = useAtom(hashtagsAtom);
  const [, setShareImg] = useAtom(shareImgAtom);

  const resetSession = useCallback(() => {
    setSessionId('');
    setArts([]);
    setTitle('');
    setHashtags([]);
    setShareImg('');
  }, [setSessionId, setArts, setTitle, setHashtags, setShareImg]);

  return { section, setSection, mode, setMode, resetSession };
};

export default useSession;
