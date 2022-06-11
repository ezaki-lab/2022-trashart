import dynamic from 'next/dynamic';

const { Scene } = dynamic(() => {
  import('../../lib/ar/render/scenes/scene'), { ssr: false };
});

const { Renderer } = dynamic(() => {
  import('../../lib/ar/render/core/renderer'), { ssr: false };
});

const useGl = () => {
  const gl = createWebGLRenderer({ xrCompatible: true });
  const scene = new Scene();

  gl.canvas.width = width;
  gl.canvas.height = height;

  const renderer = new Renderer(gl);
  scene.setRenderer(renderer);
};

export default useGl;
