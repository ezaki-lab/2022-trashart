import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { MdAssistantPhoto } from 'react-icons/md';
import { Headline1 } from '../../../../components/headline';
import useSession from '../../../../hooks/useSession';
import ArtItem from './artItem';
import { artsAtom, artIdAtom, sessionIdAtom, hashtagsAtom } from '../../../../models/stores';
import api from '../../../../models/apiClient';

const Portal = () => {
  const { setMode } = useSession();
  const router = useRouter();

  const [sessionId] = useAtom(sessionIdAtom);

  const [arts, setArts] = useAtom(artsAtom);
  const [, setArtId] = useAtom(artIdAtom);
  const [, setHashtags] = useAtom(hashtagsAtom);

  const [isRecommended, setIsRecommended] = useState(false);

  const recommenderCtrl = useRef(new AbortController());

  const handleClick = useCallback((id) => {
    setMode('crafting');
    setArtId(id);

    api.get(`/arts/${id}/hashtags`)
      .then((res) => {
        setHashtags([...res.data['hashtags'], '海洋ごみ', '海洋アート', 'MARINE_TRASHART']);
      });
  }, [setMode, setArtId, setHashtags]);

  const getArtsNotRecommend = useCallback(() => {
    api.get('/arts')
      .then((res) => {
        setArts(res.data["arts"]);
        setIsRecommended(false);
      });
  }, [setArts]);

  const handleSkipped = useCallback(() => {
    recommenderCtrl.current.abort();
    getArtsNotRecommend();
  }, [recommenderCtrl, getArtsNotRecommend]);

  const backTake = useCallback(() => {
    router.push('/craft/take');
    setArts([]);
  }, [router, setArts]);

  useEffect(() => {
    if (sessionId === '') {
      getArtsNotRecommend();
      return;
    }

    if (arts.length !== 0) {
      return;
    }

    api.get(`/art-suggestions/${sessionId}`, {
      signal: recommenderCtrl.current.signal,
    })
      .then((res) => {
        if (res.data === undefined) {
          return;
        }
        setArts(res.data['arts']);
        setIsRecommended(true);
      })
      .catch(() => {
        getArtsNotRecommend();
      });
  }, []);

  return (
    <section>
      <button
        className="mb-3"
        onClick={backTake}
      >
        ←戻る
      </button>

      <Headline1
        label={isRecommended ? 'おすすめ' : 'アート一覧'}
        textColor="text-crafting-500"
        icon={<MdAssistantPhoto />}
        iconColor="rgb(253, 188, 114)"
      />

      {arts.length === 0
        ? <Waiting onSkip={handleSkipped} />
        : <Loaded arts={arts} onSelect={handleClick} />
      }
    </section>
  );
};

const Loaded = ({ arts, onSelect }) => {
  return (
    <section className="mt-3 w-full grid grid-cols-2 gap-3">
      {arts.length !== 0 && (
        <>
          {arts.map((art, index) =>
            <ArtItem
              id={art.id}
              name={art.name}
              img={art.original_image_url}
              onClick={onSelect}
              index={index}
              key={art.id}
            />
          )}
        </>
      )}
    </section>
  );
};

const Waiting = ({ onSkip }) => {
  return (
    <div className="h-[calc(100vh-11rem)] text-gray-500 flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <div className="mb-8 animate-spin h-20 w-20 bg-crafting-200 rounded-xl" />
        取得した素材から、おすすめのアートを選定しています…

        <button
          className="mt-10 text-crafting-600 text-xl font-bold"
          onClick={onSkip}
        >
          おすすめをスキップする
        </button>
      </div>
    </div>
  );
};

export default Portal;
