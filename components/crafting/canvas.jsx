import { useCallback, useRef, useState, memo } from 'react';
import { Stage, Layer, Line, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';
import usePreload from '../../hooks/usePreload';
import CenterText from '../centerText';
import ColorPicker from '../colorPicker';
import url from '../../utils/url';

const Canvas = ({ width, height }) => {
  const [penColor, setPenColor] = useState('#000000');
  const [tool, setTool] = useState('pen');

  const [image] = useImage(url('/sample.png'), 'anonymous');

  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    // 線を追加
    setLines([...lines, {
      tool,
      penColor,
      points: [pos.x, pos.y]
    }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) {
      return;
    }

    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines.at(-1);
    // ポイントを追加
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // 最後を入れ替える
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  return (
    <>
      <Stage
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <Layer>
          {image && <KonvaImage
            image={image}
            width={width}
            height={width * image.height / image.width}
            y={(height / 2) - ((width * image.height / image.width) / 2)}
          />}
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.penColor}
              strokeWidth={10}
              tension={0.5}
              lineCap="round"
              globalCompositeOperation={
                line.tool === 'eraser' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>

      <ToolBox
        penColor={penColor}
        setPenColor={setPenColor}
        tool={tool}
        setTool={setTool}
      />
    </>
  );
};

const ToolBox = ({ penColor, setPenColor, tool, setTool }) => {
  const [isShowColorPicker, setIsShowColorPicker] = useState(false);

  const icons = {
    pen: {
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

  const handleColorPickerClick = () => {
    setIsShowColorPicker(true);
  };

  const handleColorPickerInactive = () => {
    setIsShowColorPicker(false);
  };

  const handleColorPickerPicked = (color) => {
    setPenColor(color);
  };

  const handlePenClick = useCallback(() => {
    setTool('pen');
  }, [tool]);

  const handleEraserClick = useCallback(() => {
    setTool('eraser');
  }, [tool]);

  return (
    <div className="w-full h-20 pl-5 flex items-center absolute top-16">
      <div>
        <button
          className="w-10 h-10 border-4 border-white rounded-full shadow-lg"
          style={{ backgroundColor: penColor }}
          onClick={handleColorPickerClick}
        />
        {isShowColorPicker && <ColorPicker
          onPicked={handleColorPickerPicked}
          onInactive={handleColorPickerInactive}
        />}
      </div>
      <ButtonItem
        active={tool === 'pen'}
        icon={icons.pen}
        onClick={handlePenClick}
      />
      <ButtonItem
        active={tool === 'eraser'}
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
      onClick={!active ? onClick : null}
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
