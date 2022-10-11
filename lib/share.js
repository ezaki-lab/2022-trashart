import { pickRandom } from '../utils/random';

const messages = [
  '海洋ごみの約7割はプラスチックです。',
  '海洋プラスチックは海中で分解されるとマイクロプラスチックになります。',
  '海洋プラスチックの多くは街から流れ出したものです。',
  '海洋ごみは宝です。',
  'プラスチックは正しく分別すると再利用できます。',
  'プラスチックの中でもポリプロピレンは分解されにくいです。',
  '2050年には、海洋ごみが魚の量を超えるでしょう。',
  '海洋ごみ問題は漁業・観光業など経済に大きな影響を与えます。',
  'マイクロプラスチックは人体にも悪影響です。',
  '海の豊かさを守ろう。',
  'あなたはごみだらけの海で泳ぎたいですか？',
  '海を守るために、1人1人の行動が大切です。'
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
