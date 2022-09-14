import { useCallback } from 'react';
import { useAtom } from 'jotai';
import { Headline2 } from '../../components/headline';
import { quoteAtom } from '../../models/stores';

const Description = () => {
  const [quote, setQuote] = useAtom(quoteAtom);

  const handleChange = useCallback((e) => {
    setQuote(e.target.value);
  }, [setQuote]);

  return (
    <div className="mt-6">
      <div>
        <Headline2
          label="作品名"
          textColor="text-sharing-700"
        />

        <input
          type="text"
          value={quote}
          className="mt-1 px-5 w-full h-12 text-sharing-900 bg-sharing-100 rounded-2xl"
          onChange={handleChange}
        />
      </div>

      <div className="mt-4 flex flex-row">
        <div className="w-1/3">
          <Headline2
            label="製作時間"
            textColor="text-sharing-700"
          />

          <input
            type="text"
            className="mt-1 px-5 w-full h-12 text-sharing-900 text-center bg-sharing-100 rounded-2xl"
          />
        </div>

        <div className="pl-5 w-2/3">
          <Headline2
            label="ハッシュタグ"
            textColor="text-sharing-700"
          />

          <div className="text-base">
            #タイ #フォトフレーム
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
