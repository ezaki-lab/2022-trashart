import { useCallback, useState, memo } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';
import usePreload from '../../hooks/usePreload';
import CenterText from '../../components/centerText';
import url from '../../utils/url';

const Canvas = ({ width, height }) => {
  const [isZooming, setIsZooming] = useState(false);
  const [imageX, setImageX] = useState(0);
  const [imageY, setImageY] = useState(0);

  const [image] = useImage('/sample.png', 'anonymous');

  const [pencilColor, setPencilColor] = useState('#000000');
  const [isActivePencil, setIsActivePencil] = useState(true);
  const [isActiveEraser, setIsActiveEraser] = useState(false);

  let lastCenter = null;
  let lastDistance = 0;

  // ピタゴラスの定理で2点間の距離を求める
  const getDistance = (pos1, pos2) => {
    return Math.sqrt(
      Math.pow(pos2.x - pos1.x, 2)
      + Math.pow(pos2.y - pos1.y, 2)
    );
  };

  // 2点の中点を求める
  const getCenter = (pos1, pos2) => {
    return {
      x: (pos1.x + pos2.x) / 2,
      y: (pos1.y + pos2.y) / 2
    };
  };

  // 2点指で操作されているなら
  const handleMultiTouchMove = (e) => {
    e.evt.preventDefault();

    const finger1 = e.evt.touches[0];
    const finger2 = e.evt.touches[1];
    const stage = e.target.getStage();

    // 2本指の位置が取得できるなら
    if (finger1 && finger2) {
      setIsZooming(true);

      const pos1 = {
        x: finger1.clientX,
        y: finger1.clientY
      };
      const pos2 = {
        x: finger2.clientX,
        y: finger2.clientY
      };

      if (!lastCenter) {
        lastCenter = getCenter(pos1, pos2);
        return;
      }
      const newCenter = getCenter(pos1, pos2);

      const newDistance = getDistance(pos1, pos2);

      if (!lastDistance) {
        lastDistance = newDistance;
      }

      // 新しい中心点座標
      const pointTo = {
        x: (newCenter.x - stage.x()) / stage.scaleX(),
        y: (newCenter.y - stage.y()) / stage.scaleX()
      };

      // 画像の拡大倍率をステージの倍率に調整
      // 最小スケールが規定スケールより小さくなければ、適応
      const scale = (stage.scaleX() * (newDistance / lastDistance) >= width / 1920)
        ? stage.scaleX() * (newDistance / lastDistance)
        : width / 1920;
      stage.scaleX(scale);
      stage.scaleY(scale);

      // どれだけ移動したか (変位)
      const dx = newCenter.x - lastCenter.x;
      const dy = newCenter.y - lastCenter.y;

      // 新しいステージの座標
      const newPos = {
        x: newCenter.x - pointTo.x * scale + dx,
        y: newCenter.y - pointTo.y * scale + dy
      };

      stage.position(newPos);
      stage.batchDraw();

      lastDistance = newDistance;
      lastCenter = newCenter;
    }
  };

  const handleMultiTouchEnd = (e) => {
    lastCenter = null;
    lastDistance = 0;
    setIsZooming(false);
  };

  const handleDragStart = (e) => {
    const stage = e.target.getStage();
    // ズームと一緒にドラッグはできないようにする
    if (isZooming) {
      stage.stopDrag();
    }
  };

  const handleDragEnd = (e) => {
    setImageX(e.target.x());
    setImageY(e.target.y());
  };

  return (
    <>
      <Stage
        width={width}
        height={height}
        onTouchMove={handleMultiTouchMove}
        onTouchEnd={handleMultiTouchEnd}
      >
        <Layer>
          <KonvaImage
            image={image}
            width={800}
            height={666}
            x={imageX}
            y={imageY}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        </Layer>
      </Stage>

      <ToolArea
        pencilColor={pencilColor}
        setPencilColor={setPencilColor}
        isActivePencil={isActivePencil}
        setIsActivePencil={setIsActivePencil}
        isActiveEraser={isActiveEraser}
        setIsActiveEraser={setIsActiveEraser}
      />
    </>
  );
};

const ToolArea = ({ pencilColor, setPencilColor, isActivePencil, setIsActivePencil, isActiveEraser, setIsActiveEraser }) => {
  const icons = {
    pencil: {
      inactive: url('/icons/ic_fluent_calligraphy_pen_24_regular.svg'),
      active: url('/icons/ic_fluent_calligraphy_pen_24_filled.svg')
    },
    eraser: {
      inactive: url('/icons/ic_fluent_eraser_24_regular.svg'),
      active: url('/icons/ic_fluent_eraser_24_filled.svg')
    }
  };

  // アイコンを予め読み込んでいく
  usePreload(url('/icons/ic_fluent_calligraphy_pen_24_regular.svg'));
  usePreload(url('/icons/ic_fluent_calligraphy_pen_24_filled.svg'));
  usePreload(url('/icons/ic_fluent_eraser_24_regular.svg'));
  usePreload(url('/icons/ic_fluent_eraser_24_filled.svg'));

  const handlePencilClick = useCallback(() => {
    setIsActivePencil(!isActivePencil);
    setIsActiveEraser(!isActiveEraser);
  }, [isActivePencil, isActiveEraser]);

  const handleEraserClick = useCallback(() => {
    setIsActivePencil(!isActivePencil);
    setIsActiveEraser(!isActiveEraser);
  }, [isActivePencil, isActiveEraser]);

  return (
    <div className="w-full h-20 pl-5 flex items-center absolute top-16">
      <button
        className="w-10 h-10 border-4 border-white bg-black rounded-full shadow-lg"
      />
      <ButtonItem
        active={isActivePencil}
        icon={icons.pencil}
        onClick={handlePencilClick}
      />
      <ButtonItem
        active={isActiveEraser}
        icon={icons.eraser}
        onClick={handleEraserClick}
      />
    </div>
  );
};

const ButtonItem = ({ active, icon, onClick }) => {
  return (
    <button
      className={
        active
          ? "w-12 h-12 ml-3 bg-sky-100 rounded-xl"
          : "w-12 h-12 ml-3"
      }
      onClick={onClick}
    >
      <CenterText>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={active ? icon.active : icon.inactive}
          alt="icon"
          width="35rem"
          className="pointer-events-none"
        />
      </CenterText>
    </button>
  );
};

export default memo(Canvas);
