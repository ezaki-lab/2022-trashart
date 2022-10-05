import { pickRandom } from '../utils/random';

const messages = [
  '実は日本の漂着ごみの6割が漁具です。',
  '2050年には、海洋ごみが魚の数を越えると言われています。',
  '海のプラスチックを正しく分別すると、処理費用を抑えることができます。',
  'プラスチックの中でもポリプロピレンは分解されにくいです。'
];

const share = (title, sharePhotoId, hashtags) => {
  if (window.location.protocol !== 'https:') {
    return;
  }

  const snsHashtags = hashtags.map((hashtag) => `#${hashtag}`).join(' ');

  navigator.share({
    title: 'MARINE TRASHART',
    text: `「${title}」を作りました！ ${snsHashtags} ${pickRandom(messages)}`,
    url: `${process.env.NEXT_PUBLIC_URL}?id=${sharePhotoId}`,
  });
};

export default share;
