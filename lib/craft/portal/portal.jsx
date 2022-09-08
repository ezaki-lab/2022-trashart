import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { MdAssistantPhoto } from 'react-icons/md';
import { Headline1 } from '../../../components/headline';
import useSession from '../../../hooks/useSession';
import ArtItem from './artItem';
import { artIdAtom } from '../../../models/stores';

const Portal = () => {
  const { setSection } = useSession();

  const [arts, setArts] = useState([]);
  const [artId, setArtId] = useAtom(artIdAtom);

  const handleClick = useCallback((id) => {
    setSection('crafting');
    setArtId(id);
  }, [setSection, setArtId]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/arts')
      .then((res) => res.json())
      .then((json) => {
        setArts(json["arts"]);
      });
  }, []);

  return (
    <section>
      <Headline1
        label="おすすめ"
        textColor="text-crafting-500"
        icon={<MdAssistantPhoto />}
        iconColor="rgb(253, 167, 69)"
      />

      <section className="mt-3 pb-32 w-full grid grid-cols-2 gap-3">
        {arts.length !== 0 && (
          <>
            {arts.map((art, index) =>
              <ArtItem
                id={art.id}
                name={art.name}
                img={art.original_image_url}
                onClick={handleClick}
                index={index}
                key={art.id}
              />
            )}
          </>
        )}
      </section>

      <button
        className="px-10 py-5 text-white text-xl font-bold bg-crafting-500 rounded-2xl shadow-xl fixed bottom-8"
      >
        新しい画像からアート製作する
      </button>
    </section>
  );
};

export default Portal;
