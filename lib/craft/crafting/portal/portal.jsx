import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { MdAssistantPhoto } from 'react-icons/md';
import { Headline1 } from '../../../../components/headline';
import useSession from '../../../../hooks/useSession';
import ArtItem from './artItem';
import { artsAtom, artIdAtom, sessionIdAtom } from '../../../../models/stores';

const Portal = () => {
  const { setMode } = useSession();

  const [sessionId, setSessionId] = useAtom(sessionIdAtom);

  const [arts, setArts] = useAtom(artsAtom);
  const [artId, setArtId] = useAtom(artIdAtom);

  const [isRecommended, setIsRecommended] = useState(false);

  const recommenderCtrl = new AbortController();

  const handleClick = useCallback((id) => {
    setMode('crafting');
    setArtId(id);
  }, [setMode, setArtId]);

  const getArtsNotRecommend = () => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/arts')
      .then((res) => res.json())
      .then((json) => {
        setArts(json["arts"]);
        setIsRecommended(false);
      });
  };

  const handleSkipped = useCallback(() => {
    // try {
    //   recommenderCtrl.abort();
    // } catch (err) { }
    getArtsNotRecommend();
  }, []);

  useEffect(() => {
    if (sessionId === '') {
      getArtsNotRecommend();
      return;
    }

    if (arts.length !== 0) {
      return;
    }

    try {
      fetch(
        process.env.NEXT_PUBLIC_API_URL + '/art-suggestions/' + sessionId,
        {
          signal: recommenderCtrl.signal,
        }
      )
        .then((res) => {
          if (res.status === 400) {
            console.log('なかったぜ');
            getArtsNotRecommend();
            return;
          }
          return res.json();
        })
        .then((json) => {
          if (json === undefined) {
            return;
          }
          setArts(json["arts"]);
          setIsRecommended(true);
        });
    } catch (err) { }
  }, []);

  return (
    <section>
      <Headline1
        label={isRecommended ? 'おすすめ' : 'アート一覧'}
        textColor="text-crafting-500"
        icon={<MdAssistantPhoto />}
        iconColor="rgb(253, 167, 69)"
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
    <section className="mt-3 pb-32 w-full grid grid-cols-2 gap-3">
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
